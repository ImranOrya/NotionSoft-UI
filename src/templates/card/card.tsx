import { cn } from "@/utils/cn";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground border border-border rounded-lg p-4 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
