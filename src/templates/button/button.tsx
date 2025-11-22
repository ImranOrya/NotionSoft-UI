import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-200 text-black",
        className
      )}
      {...props}
    />
  );
};
export default Button;
