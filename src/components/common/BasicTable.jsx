"use client";
import clsx from "clsx";
import Pagination from "../common/Pagination";

const getNestedValue = (obj, path) => {
  if (!path) return undefined;
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

const BasicTable = ({
  columns,
  data,
  actions,
  total = 100,
  pageSize = 10,
  pagination,
  wrapperClassName,
}) => {
  return (
    <div
      className={clsx(
        "w-full overflow-x-auto border border-gray-700 bg-[#161926]", 
        wrapperClassName ?? "rounded-xl"
      )}
    >
      <table className="min-w-[900px] w-full border-collapse">
        <thead className="bg-[#0f1419]"> 
          <tr>
            <th className="px-4 py-4 w-10">
               <input type="checkbox" className="accent-blue-500 rounded" />
            </th>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-4 text-left whitespace-nowrap
                font-inter font-semibold text-[0.85rem]
                tracking-wider text-gray-400 uppercase"
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th className="px-4 py-4 text-left whitespace-nowrap
              font-inter font-semibold text-[0.85rem]
              tracking-wider text-gray-400 uppercase">
                Action
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-[#262b3f]">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-[#1e2235]/50 transition-colors"
            >
               <td className="px-4 py-4">
                  <input type="checkbox" className="accent-blue-500 rounded" />
               </td>
              {columns.map((col, index) => {
                const rawValue = getNestedValue(row, col.key);
                const value = col.render
                  ? col.render(rawValue, row, rowIndex)
                  : rawValue ?? "-";

                return (
                  <td
                    key={index}
                    className="px-4 py-4 whitespace-nowrap
                    font-inter font-medium text-[0.875rem]
                    text-gray-200"
                  >
                    {value}
                  </td>
                );
              })}

              {actions && (
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex gap-3">
                    {actions.map((Action, i) => (
                      <Action key={i} row={row} />
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <div className="p-4 border-t border-[#262b3f]">
          <Pagination pageSize={pageSize} total={total} />
        </div>
      )}
    </div>
  );
};

export default BasicTable;