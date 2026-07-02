import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo, Text } from "~/components/atoms";

interface LinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const linkGroups: LinkGroup[] = [
  {
    title: "Tarjetas",
    links: [
      { label: "Empresarial", href: "#" },
      { label: "Clásica", href: "/tarjetas/clasica" },
      { label: "Infinity", href: "/tarjetas/infinity" },
    ],
  },
  {
    title: "Terminales",
    links: [
      { label: "Pay Point Pro", href: "#" },
      { label: "Pay Point Plus", href: "#" },
      { label: "Qpos cute", href: "#" },
      { label: "Pay secure", href: "#" },
    ],
  },
  {
    title: "Telefonía",
    links: [
      { label: "Recarga de celular", href: "#" },
      { label: "Comprar SIM", href: "#" },
      { label: "Portabilidad", href: "#" },
      { label: "Tieneda", href: "#" },
    ],
  },
  {
    title: "Legales",
    links: [
      { label: "Aviso de Privacidad", href: "#" },
      { label: "Términos y Condiciones", href: "#" },
    ],
  },
];

const regulators = [
  { name: "SIPRES", src: "/regulators/sipres.svg", width: 78, height: 27 },
  { name: "REDECO", src: "/regulators/redeco.svg", width: 67, height: 25 },
  { name: "Buró", src: "/regulators/buro.svg", width: 31, height: 30 },
  { name: "Profeco", src: "/regulators/profeco.svg", width: 66, height: 25 },
  { name: "REUNE", src: "/regulators/reune.svg", width: 76, height: 29 },
  { name: "REUS", src: "/regulators/reus.svg", width: 68, height: 26 },
  { name: "IFT", src: "/regulators/ift.svg", width: 42, height: 31 },
  { name: "CNBV", src: "/regulators/cnbv.svg", width: 27, height: 30 },
  { name: "CONDUSEF", src: "/regulators/condusef.svg", width: 52, height: 30 },
];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
    <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .5-2 2-2h2V2s-2-.5-4-.5c-3 0-5 2-5 5V10H5v4h3v8h5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-darker text-white">
      <div className="mx-auto flex max-w-[1512px] flex-col px-[68px] pt-[63px] pb-10">
        <div className="flex items-start gap-[140px]">
          <div className="flex w-[163px] flex-col gap-10">
            <Logo className="h-5 w-[134px] text-white" />
            <div className="flex flex-col gap-5">
              <Link href="#" aria-label="Descargar en App Store">
                <Image
                  src="/badges/apple.svg"
                  alt="App Store"
                  width={163}
                  height={54}
                />
              </Link>
              <Link href="#" aria-label="Descargar en Google Play">
                <Image
                  src="/badges/google-play.svg"
                  alt="Google Play"
                  width={163}
                  height={50}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-1 gap-[60px]">
            {linkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-8">
                <Text weight={500} size={14.69} className="leading-[140%]">
                  {group.title}
                </Text>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="opacity-75 transition-opacity hover:opacity-100"
                      >
                        <Text
                          weight={400}
                          size={16.79}
                          className="leading-[140%]"
                        >
                          {link.label}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Image
            src="/qr.svg"
            alt="Código QR Taveron"
            width={200}
            height={200}
            className="rounded-[10px]"
          />
        </div>

        <ul className="mt-[30px] flex flex-wrap items-center gap-5">
          {regulators.map((r) => (
            <li key={r.name}>
              <Image
                src={r.src}
                alt={r.name}
                width={r.width}
                height={r.height}
              />
            </li>
          ))}
        </ul>

        <div className="mt-[30px] flex items-end justify-between gap-8">
          <div className="flex flex-col gap-[5px] opacity-75">
            <Text size={14.84} className="leading-[140%]">
              Contácto: <span className="font-bold">800 967 5003</span>
            </Text>
            <Text size={14.84} className="leading-[140%]">
              Atención al cliente:{" "}
              <span className="font-bold">soporte@taveron.com</span>
            </Text>
            <Text size={14.84} className="leading-[140%]">
              Calle Juan E García #171, Colonia Centro Torreón Coahuila, México
            </Text>
          </div>

          <div className="flex flex-col items-end gap-2.5">
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/[0.125] transition-colors hover:bg-white/10"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/[0.125] transition-colors hover:bg-white/10"
              >
                <InstagramIcon />
              </Link>
            </div>
            <Text
              size={12.59}
              className="text-right leading-[140%] opacity-80"
            >
              © {year} — TAVERON GROUP S.A.P.I DE C.V. All Rights Reserved
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
