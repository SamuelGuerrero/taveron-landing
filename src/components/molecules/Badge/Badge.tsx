import React, { type ReactNode } from "react";
import { Text } from "~/components/atoms";

type BadgeVariant = "white" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  white: "border-white bg-white/10 rounded-[70px]",
  outline: "border-blue-normal text-blue-normal rounded-[27px]",
};

export const Badge = ({
  children,
  variant = "white",
  className,
}: BadgeProps) => (
  <div
    className={`inline-flex w-fit items-center justify-center border px-5 py-1.25 ${variantClasses[variant]} ${className ?? ""}`}
  >
    <Text weight="bold" size={16} className="tracking-[0.01em]">
      {children}
    </Text>
  </div>
);
