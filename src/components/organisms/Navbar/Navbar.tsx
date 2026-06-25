import React from "react";
import Link from "next/link";
import { Logo } from "~/components/atoms/Logo/Logo";
import { Text } from "~/components/atoms/Text/Text";
import { Button } from "~/components/molecules/Button/Button";

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const links: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Tarjetas", href: "/tarjetas/clasica", hasDropdown: true },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Soporte", href: "/soporte" },
];

export const Navbar = () => {
  const activeHref = "/";

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-[90px] items-center justify-between px-[83px]">
      <Link href="/" aria-label="Taveron">
        <Logo className="text-white" />
      </Link>

      <nav className="flex items-center gap-[30px]">
        {links.map((link) => {
          const isActive = link.href === activeHref;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-[5px] text-white ${isActive ? "" : "opacity-50"}`}
            >
              <Text weight={isActive ? "bold" : 400} size={16}>
                {link.label}
              </Text>
              {link.hasDropdown && <ChevronDown className="h-6 w-6" />}
            </Link>
          );
        })}
      </nav>

      <Button rightIcon={<ChevronRight className="h-6 w-6 text-blue-normal" />}>
        Solicita tu tarjeta
      </Button>
    </header>
  );
};
