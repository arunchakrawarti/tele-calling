import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-gray-600 text-white",
  outline: "bg-white text-gray-800 border border-gray-300 ",
  tertiary:"bg-green-600 text-white",
  redbtn:"bg-red-500 text-white",
  greenbtn:"!bg-[#8cc63f] !text-white",
  primary: "bg-purple-600 text-white",
  success: "bg-orange-600 text-white",
  danger: "bg-white text-gray-500",
  bluebtn:"bg-[#1a335d] !text-white",
  secondary:" bg-blue-600 text-white",
  gradientcolor:"bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] text-white font-bold "
};

function Button({
  children,
  variant = "default",
  bgColor,
  textColor,
  icon: Icon,
  href,
  height = "h-10",
  width = "px-4",
  rounded = "rounded-[9px]",
  className,
  loading,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass = variantClasses[variant] || variantClasses.default;

  const classes = twMerge(
    baseClasses,
    variantClass,
    height,
    width,
    rounded,
    bgColor,
    textColor,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  );
}

export default Button;
