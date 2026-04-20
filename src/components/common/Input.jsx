"use client";
import clsx from "clsx";
import { ChevronDown } from "lucide-react"; // Icon import kiya

const Input = ({
  label,
  className = "",
  iconClass,
  iconEye,
  error,
  options = [],
  valueKey,
  labelKey,
  labelRender,
  icon = "",
  ...rest
}) => {
  const baseInputStyles = "flex w-full items-center gap-3 rounded-xl px-3 py-1 border border-gray-700 bg-[#1e2235] text-gray-200 transition-all focus-within:border-blue-500/50";
  const errorStyles = "border-red-500/50 ring-1 ring-red-500/20";

  return (
    <div className="flex w-full flex-col gap-1">
      {label && rest?.type !== "checkbox" && (
        <label className="font-semibold mb-1 text-[12px] text-gray-400 uppercase tracking-wider">
          {label}
        </label>
      )}

      {rest?.type === "checkbox" ? (
        <label htmlFor={rest.id} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            id={rest.id}
            checked={rest.value}
            onChange={(e) => rest.onChange?.(e.target.checked)}
            className="w-4 h-4 accent-blue-500 bg-[#1e2235] border-[#262b3f]"
          />
          <span className="text-sm text-gray-300">{label}</span>
        </label>
      ) : rest?.type === "textarea" ? (
        <div className={clsx(baseInputStyles, "py-2", error && errorStyles, className)}>
          {icon && (
            <span>
              <i className={`${icon} ri-lg text-gray-500`} />
            </span>
          )}
          <textarea 
            className="w-full outline-none text-sm bg-transparent placeholder:text-gray-600" 
            {...rest} 
          />
        </div>
      ) : rest?.type === "select" ? (
        <div className={clsx(baseInputStyles, "relative", error && errorStyles, className)}>
          {icon && (
            <span>
              <i className={`${icon} ri-lg text-gray-500`} />
            </span>
          )}
          <select
            defaultValue=""
            {...rest}
            className="h-[42px] w-full text-sm outline-none bg-transparent cursor-pointer appearance-none pr-8"
          >
            {rest?.placeholder && (
              <option value="" disabled className="bg-[#1e2235] text-white">
                {rest.placeholder}
              </option>
            )}
            {options.map((opt, idx) => (
              <option 
                key={idx} 
                value={opt[valueKey] || opt.value || opt}
                className="bg-[#1e2235] text-white"
              >
                {labelRender
                  ? labelRender(opt)
                  : opt[labelKey] || opt.label || opt}
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none text-gray-500">
            <ChevronDown size={16} strokeWidth={3} />
          </div>
        </div>
      ) : (
        <div className={clsx(baseInputStyles, error && errorStyles, className)}>
          {icon && (
            <span>
              <i className={`${icon} ri-lg text-gray-500`} />
            </span>
          )}
          <input
            {...rest}
            className="h-[42px] w-full text-sm outline-none bg-transparent placeholder:text-gray-600"
          />
        </div>
      )}

      {error && <span className="text-[11px] text-red-400 mt-0.5 ml-1">{error}</span>}
    </div>
  );
};

export default Input;