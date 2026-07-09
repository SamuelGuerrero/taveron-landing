"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
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

interface CardOption {
  label: string;
  href: string;
  image: string;
  alt: string;
}

const cardOptions: CardOption[] = [
  {
    label: "Clásica",
    href: "/tarjetas/clasica",
    image: "/cards/thumbs/clasica.png",
    alt: "Tarjeta Clásica",
  },
  {
    label: "Empresarial",
    href: "#",
    image: "/cards/thumbs/empresarial.png",
    alt: "Tarjeta Empresarial",
  },
  {
    label: "Infiniti",
    href: "/tarjetas/infinity",
    image: "/cards/thumbs/infiniti.png",
    alt: "Tarjeta Infiniti",
  },
  {
    label: "Garantizada",
    href: "/tarjetas/garantizada",
    image: "/cards/thumbs/garantizada.png",
    alt: "Tarjeta Garantizada",
  },
];

export const Navbar = () => {
  const activeHref = "/";
  const [showCardsDropdown, setShowCardsDropdown] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ left: 0, arrowLeft: 0 });
  const cardsTriggerRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const openCardsDropdown = () => {
    const trigger = cardsTriggerRef.current;
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      const triggerCenter = rect.left + rect.width / 2;
      const panelWidth = panelRef.current?.offsetWidth ?? 720;
      const padding = 24;
      const maxLeft = window.innerWidth - panelWidth - padding;
      const left = Math.max(padding, Math.min(triggerCenter - panelWidth / 2, maxLeft));
      setDropdownPos({ left, arrowLeft: triggerCenter - left });
    }
    setShowCardsDropdown(true);
  };

  return (
    <div
      className="absolute inset-x-0 top-0 z-50"
      onMouseLeave={() => setShowCardsDropdown(false)}
    >
      <header className="flex h-[90px] items-center justify-between px-[83px]">
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
                ref={link.hasDropdown ? cardsTriggerRef : undefined}
                onMouseEnter={() => {
                  if (link.hasDropdown) {
                    openCardsDropdown();
                  } else {
                    setShowCardsDropdown(false);
                  }
                }}
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

      <div
        style={{ left: dropdownPos.left }}
        className={`absolute top-[86px] transition-[opacity,transform] duration-300 ease-out ${
          showCardsDropdown
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div
          ref={panelRef}
          className="relative rounded-[28px] border border-black/[0.06] bg-white p-4 shadow-[0_24px_60px_rgba(0,30,57,0.18)]"
        >
          <div
            style={{ left: dropdownPos.arrowLeft }}
            className="absolute -top-[8px] h-[17px] w-[17px] -translate-x-1/2 rotate-45 rounded-tl-[5px] border-l border-t border-black/[0.06] bg-white"
          />
          <div className="flex gap-3">
            {cardOptions.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                onClick={() => setShowCardsDropdown(false)}
                className="group flex w-[168px] flex-col items-center gap-4 rounded-[20px] bg-gradient-to-br from-[#F7F8FA] to-[#EDF0F5] px-4 pb-5 pt-7 ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:from-white hover:to-[#F2F5FA] hover:shadow-[0_16px_32px_rgba(0,30,57,0.12)] hover:ring-blue-normal/30"
              >
                <div className="drop-shadow-[0_10px_18px_rgba(0,30,57,0.18)] transition-transform duration-300 group-hover:scale-[1.04]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={94}
                    height={152}
                    className="h-[136px] w-[84px] rounded-[8px]"
                  />
                </div>
                <Text
                  weight="bold"
                  size={16}
                  className="leading-5 text-blue-darker transition-colors group-hover:text-blue-normal"
                >
                  {card.label}
                </Text>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
