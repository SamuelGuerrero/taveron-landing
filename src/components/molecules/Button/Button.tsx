import React, { type ReactNode } from "react";
import { Text } from "~/components/atoms/Text/Text";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  rightIcon,
  leftIcon,
  className,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`flex h-[60px] cursor-pointer items-center justify-center gap-1 rounded-[15px] bg-white px-6 transition-opacity hover:opacity-90 ${className ?? ""}`}
  >
    {leftIcon}
    <Text weight="bold" size={16} className="text-blue-normal">
      {children}
    </Text>
    {rightIcon}
  </button>
);
