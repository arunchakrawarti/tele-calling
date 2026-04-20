"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const SearchBarComp = ({
  iconLeft = false,
  iconRight = false,
  className = "",
  keyName = "search",
  customRoute,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qParam = searchParams.get(keyName) || "";
  const [query, setQuery] = useState(qParam);

  // Keep local state synced when navigating
  useEffect(() => {
    setQuery(qParam);
  }, [qParam]);

  //  Common search handler (ONLY REQUIRED CHANGE)
  const runSearch = () => {
    if (query.trim().length >= 2) {
      const params = new URLSearchParams(searchParams.toString());

      params.set(keyName, query.trim());

      if (customRoute) {
        router.push(`${customRoute}?${params.toString()}`);

      } else {
        router.push(`${pathname}?${params.toString()}`);

      }
    }
  };

  //  Key handling
  const handleKeyDown = (e) => {
    if (e.key === "Enter") runSearch();
    if (e.key === "Escape") clearSearch();
  };

  //  Clear search (ONLY REQUIRED CHANGE)
  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(keyName);

    router.push(`${pathname}?${params.toString()}`);
    setQuery("");
  };

  return (
    <div className="relative bg-blue-50 flex w-full items-center justify-between rounded md:rounded-md lg:rounded-full border border-gray-300 px-3 py-2.5 md:w-80 md:py-[9.5px]">
      {/* Left Icon */}
      {iconLeft && (
        <button
          type="button"
          onClick={runSearch}
          className="text-md absolute left-3 font-light text-gray-500 hover:text-gray-700"
        >
          <i className="ri-search-line" />
        </button>
      )}

      <input
        {...props}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`w-full placeholder:text-gray-500 text-sm text-gray-600 outline-none ${iconLeft ? "pl-6" : ""
          } ${iconRight ? "pr-6" : ""} ${className}`}
      />

      {/* Right Icon → toggle between clear & search */}
      {query || qParam ? (
        <button
          type="button"
          onClick={clearSearch}
          className="text-md absolute right-2.5 aspect-square h-6 rounded-full font-light text-gray-500 transition-all duration-100 hover:bg-gray-100 hover:text-gray-700"
        >
          <i className="ri-close-line cursor-pointer" />
        </button>
      ) : (
        iconRight && (
          <button
            type="button"
            onClick={runSearch}
            className="absolute right-2.5 cursor-pointer text-lg font-light text-black hover:text-black"
          >
            <i className="ri-search-line" />
          </button>
        )
      )}
    </div>
  );
};

const SearchBox = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <SearchBarComp {...props} />
  </Suspense>
);

export default SearchBox;
