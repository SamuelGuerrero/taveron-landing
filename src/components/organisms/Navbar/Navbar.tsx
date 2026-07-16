"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Text } from "~/components/atoms";
import { DownloadCtaButton } from "~/components/molecules";

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

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
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
  // {
  //   label: "Empresarial",
  //   href: "#",
  //   image: "/cards/thumbs/empresarial.png",
  //   alt: "Tarjeta Empresarial",
  // },
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
  const pathname = usePathname();
  const [showCardsDropdown, setShowCardsDropdown] = useState(false);
  const [arrowLeft, setArrowLeft] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCardsOpen, setMobileCardsOpen] = useState(false);
  const cardsTriggerRef = useRef<HTMLAnchorElement>(null);

  // Hide the navbar on scroll down, reveal it (with a dark backdrop) on
  // scroll up. Matches the behavior on taveron.com.
  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 30) {
        if (scrollTop > lastScrollTop) {
          setHidden(true);
          setScrolled(false);
        } else {
          setHidden(false);
          setScrolled(true);
        }
      } else {
        setHidden(false);
        setScrolled(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setMobileCardsOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openCardsDropdown = () => {
    const trigger = cardsTriggerRef.current;
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      setArrowLeft(rect.left + rect.width / 2);
    }
    setShowCardsDropdown(true);
  };

  const solidHeader = showCardsDropdown || mobileOpen;

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        hidden && !showCardsDropdown && !mobileOpen
          ? "-translate-y-full"
          : "translate-y-0"
      }`}
      onMouseLeave={() => setShowCardsDropdown(false)}
    >
      <header
        className={`flex h-20 items-center justify-between px-5 transition-colors duration-300 sm:px-8 lg:h-22.5 lg:px-20.75 ${
          solidHeader
            ? "bg-white"
            : scrolled
              ? "bg-[#111827]/70 backdrop-blur-md"
              : ""
        }`}
      >
        <Link href="/" aria-label="Taveron">
          <Logo className={solidHeader ? "text-blue-darker" : "text-white"} />
        </Link>

        <nav className="hidden items-center gap-7.5 lg:flex">
          {links.map((link) => {
            const isActive = link.hasDropdown
              ? pathname.startsWith("/tarjetas")
              : pathname === link.href;
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
                className={`flex items-center gap-1.25 ${showCardsDropdown ? "text-blue-darker" : "text-white"} ${isActive ? "" : "opacity-50"}`}
              >
                <Text weight={isActive ? "bold" : 400} size={16}>
                  {link.label}
                </Text>
                {link.hasDropdown && <ChevronDown className="h-6 w-6" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <DownloadCtaButton
            className={showCardsDropdown ? "ring-blue-normal/25 ring-1" : ""}
            rightIcon={<ChevronRight className="text-blue-normal h-6 w-6" />}
          >
            Solicita tu tarjeta
          </DownloadCtaButton>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            solidHeader ? "text-blue-darker" : "text-white"
          }`}
        >
          {mobileOpen ? (
            <CloseIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>
      </header>

      {/* Desktop cards mega-menu */}
      <div
        className={`absolute inset-x-0 top-22.5 hidden transition-[opacity,transform] duration-300 ease-out lg:block ${
          showCardsDropdown
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="relative bg-white shadow-[0_24px_60px_rgba(0,30,57,0.18)]">
          <div
            style={{ left: arrowLeft }}
            className="absolute -top-2 h-4.25 w-4.25 -translate-x-1/2 rotate-45 rounded-tl-[5px] border-t border-l border-black/6 bg-white"
          />
          <div className="mx-auto flex max-w-290.5 justify-center gap-6 px-20.75 py-10">
            {cardOptions.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                onClick={() => setShowCardsDropdown(false)}
                className="group hover:ring-blue-normal/30 flex w-42 flex-col items-center gap-4 rounded-[20px] bg-linear-to-br from-[#F7F8FA] to-[#EDF0F5] px-4 pt-7 pb-5 ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:from-white hover:to-[#F2F5FA] hover:shadow-[0_16px_32px_rgba(0,30,57,0.12)]"
              >
                <div className="drop-shadow-[0_10px_18px_rgba(0,30,57,0.18)] transition-transform duration-300 group-hover:scale-[1.04]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={94}
                    height={152}
                    className="h-34 w-21 rounded-lg"
                  />
                </div>
                <Text
                  weight="bold"
                  size={16}
                  className="text-blue-darker group-hover:text-blue-normal leading-5 transition-colors"
                >
                  {card.label}
                </Text>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu (full height) */}
      <div
        className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] origin-top overflow-y-auto bg-white shadow-[0_24px_60px_rgba(0,30,57,0.18)] transition-[opacity,transform] duration-300 ease-out lg:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex min-h-full flex-col px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = link.hasDropdown
                ? pathname.startsWith("/tarjetas")
                : pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      aria-expanded={mobileCardsOpen}
                      onClick={() => setMobileCardsOpen((v) => !v)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-black/5 ${
                        isActive ? "bg-black/5" : ""
                      }`}
                    >
                      <Text
                        weight={isActive ? "bold" : 400}
                        size={18}
                        className="text-blue-darker"
                      >
                        {link.label}
                      </Text>
                      <ChevronDown
                        className={`text-blue-darker h-6 w-6 transition-transform duration-300 ${
                          mobileCardsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        mobileCardsOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-1 py-1 pl-3">
                          {cardOptions.map((card) => (
                            <Link
                              key={card.label}
                              href={card.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-black/5"
                            >
                              <Image
                                src={card.image}
                                alt={card.alt}
                                width={94}
                                height={152}
                                className="h-12 w-7.5 rounded-[4px]"
                              />
                              <Text
                                size={16}
                                className="text-blue-darker leading-5"
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
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-3 transition-colors hover:bg-black/5 ${
                    isActive ? "bg-black/5" : ""
                  }`}
                >
                  <Text
                    weight={isActive ? "bold" : 400}
                    size={18}
                    className="text-blue-darker"
                  >
                    {link.label}
                  </Text>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto px-1 pt-6 pb-2">
            <DownloadCtaButton
              className="w-full!"
              rightIcon={<ChevronRight className="text-blue-normal h-6 w-6" />}
            >
              Solicita tu tarjeta
            </DownloadCtaButton>
          </div>
        </nav>
      </div>
    </div>
  );
};
