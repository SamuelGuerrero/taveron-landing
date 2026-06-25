import React, { type ReactNode } from "react";
import { Text } from "~/components/atoms";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <div
    className={`inline-flex w-fit items-center justify-center rounded-[70px] border border-white bg-white/10 px-5 py-1.25 ${className ?? ""}`}
  >
    <Text weight="bold" size={16} className="tracking-[0.01em]">
      {children}
    </Text>
  </div>
);
