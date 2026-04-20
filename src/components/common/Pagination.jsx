"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for cleaner look

export default function Pagination({
    defaultCurrent = 1,
    total,
    pageSize = 10,
    onChange,
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const pageNo = useMemo(() => {
        return searchParams.get("page");
    }, [searchParams]);

    const totalPages = Math.ceil(total / pageSize);
    const [currentPage, setCurrentPage] = useState(defaultCurrent);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        onChange?.(page);

        const params = new URLSearchParams(searchParams);
        params.set("page", page);
        router.replace(`${pathname}?${params.toString()}`);
    };

    const getPageNumbers = useMemo(() => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push("...");
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push("...");
                pages.push(totalPages);
            }
        }
        return pages;
    }, [currentPage, totalPages]);

    useEffect(() => {
        pageNo && setCurrentPage(parseInt(pageNo));
    }, [pageNo]);

    return (
        <div className="flex items-center justify-between w-full px-2 py-1">
            {/* Left side info text */}
            <span className="text-xs text-gray-400">
                Showing <span className="text-gray-200 font-medium">{(currentPage - 1) * pageSize + 1}</span> to <span className="text-gray-200 font-medium">{Math.min(currentPage * pageSize, total)}</span> of <span className="text-gray-200 font-medium">{total}</span> entries
            </span>

            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center h-9 w-9 rounded-lg border border-[#262b3f] bg-[#1e2235] text-gray-400 hover:text-white hover:border-blue-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1.5">
                    {getPageNumbers.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === "number" && handlePageChange(page)}
                            disabled={page === "..."}
                            className={`min-w-[36px] h-9 px-2 rounded-lg text-[13px] font-medium transition-all border
                                ${page === currentPage
                                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                                    : page === "..."
                                        ? "border-transparent text-gray-500 cursor-default"
                                        : "bg-[#1e2235] border-[#262b3f] text-gray-400 hover:border-gray-500 hover:text-gray-200"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center h-9 w-9 rounded-lg border border-[#262b3f] bg-[#1e2235] text-gray-400 hover:text-white hover:border-blue-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}