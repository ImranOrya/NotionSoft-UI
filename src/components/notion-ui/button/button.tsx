import * as React from "react";
import { cn } from "../../../utils/cn";
// import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "warning" | "success";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref: any) => {
    const { className, children, variant, ...rest } = props;
    const style =
      variant == "secondary"
        ? "border hover:bg-primary hover:text-primary-foreground"
        : variant == "warning"
        ? "bg-red-500 text-primary-foreground"
        : variant == "success"
        ? "bg-green-500 text-primary-foreground"
        : "bg-primary hover:bg-primary shadow shadow-primary/50 text-primary-foreground/80 hover:opacity-90 hover:text-primary-foreground";
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          `rounded-sm cursor-pointer ltr:text-[13px] sm:ltr:text-sm rtl:text-[13px] sm:rtl:text-sm  rtl:font-semibold
           hover:shadow transition w-fit
            sm:px-4 py-[6px] leading-normal duration-200 ease-linear`,
          style,
          className
        )}
      >
        {children}
      </button>
    );
  }
);
export default Button;
