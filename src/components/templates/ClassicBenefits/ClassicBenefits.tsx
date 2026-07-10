import React from "react";
import Image from "next/image";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

const LockIcon = () => (
  <svg
    viewBox="0 0 46 46"
    fill="none"
    className="h-[46px] w-[46px]"
    aria-hidden
  >
    <rect
      x="12"
      y="20"
      width="22"
      height="18"
      rx="1"
      stroke="#0056A3"
      strokeWidth="3"
    />
    <path
      d="M16 20v-4a7 7 0 0 1 14 0v4"
      stroke="#0056A3"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="23" cy="29" r="2.5" fill="#0056A3" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg
    viewBox="0 0 46 46"
    fill="none"
    className="h-[46px] w-[46px]"
    aria-hidden
  >
    <path
      d="M8 26v-3a15 15 0 0 1 30 0v3"
      stroke="#0056A3"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="6"
      y="26"
      width="8"
      height="12"
      rx="2"
      stroke="#0056A3"
      strokeWidth="3"
    />
    <rect
      x="32"
      y="26"
      width="8"
      height="12"
      rx="2"
      stroke="#0056A3"
      strokeWidth="3"
    />
  </svg>
);

const KeypadIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
    <rect
      x="4"
      y="4"
      width="13"
      height="13"
      rx="2"
      stroke="#0056A3"
      strokeWidth="3.5"
    />
    <rect
      x="23"
      y="4"
      width="13"
      height="13"
      rx="2"
      stroke="#0056A3"
      strokeWidth="3.5"
    />
    <rect
      x="4"
      y="23"
      width="13"
      height="13"
      rx="2"
      stroke="#0056A3"
      strokeWidth="3.5"
    />
    <rect
      x="23"
      y="23"
      width="13"
      height="13"
      rx="2"
      stroke="#0056A3"
      strokeWidth="3.5"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M17.5 6.5A7.7 7.7 0 0 0 12 4a7.7 7.7 0 0 0-6.7 11.5L4 20l4.7-1.2A7.7 7.7 0 0 0 12 19.7a7.7 7.7 0 0 0 5.5-13.2zM12 18.2a6.4 6.4 0 0 1-3.3-.9l-.2-.1-2.5.6.6-2.4-.2-.3A6.4 6.4 0 1 1 12 18.2zm3.5-4.8c-.2-.1-1.1-.5-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.6-1s-1.2-1.4-1.4-1.6c-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.4l.1-.4-.1-.4-.5-1.3c-.1-.3-.3-.3-.4-.3h-.4c-.1 0-.3 0-.5.2s-.7.7-.7 1.7c0 1 .7 2 .8 2.1.1.1 1.5 2.3 3.6 3.2.5.2.9.3 1.2.4.5.2 1 .1 1.4.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.9.1-1z" />
  </svg>
);

const MessageIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 8l9 6 9-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CardShellProps {
  variant?: "light" | "dark";
  children: React.ReactNode;
}

const CardShell = ({ variant = "light", children }: CardShellProps) => (
  <div
    className={`relative h-[412px] w-[437px] overflow-hidden rounded-[20px] ${
      variant === "dark" ? "bg-[#003462] text-white" : "bg-white text-[#003462]"
    }`}
  >
    {children}
  </div>
);

const CardHeader = ({
  title,
  description,
  variant = "light",
}: {
  title: string;
  description: string;
  variant?: "light" | "dark";
}) => (
  <div className="absolute top-10 left-10 flex w-[357px] flex-col gap-2.5">
    <Text
      weight="bold"
      size={30}
      className={`leading-9 ${variant === "dark" ? "text-white" : "text-[#003462]"}`}
    >
      {title}
    </Text>
    <Text
      size={18}
      className={`leading-6 ${variant === "dark" ? "text-white" : "text-[#535353]"}`}
    >
      {description}
    </Text>
  </div>
);

const ToggleRow = ({ label, on }: { label: string; on: boolean }) => (
  <div className="flex items-center justify-between">
    <Text weight="bold" size={16} className="text-blue-darker">
      {label}
    </Text>
    <div
      className={`relative h-6 w-[46px] rounded-full ${on ? "bg-blue-normal" : "bg-[#B5B8BA]"}`}
    >
      <div
        className={`absolute top-1/2 h-[19px] w-[19px] -translate-y-1/2 rounded-full bg-white transition-all ${
          on ? "left-[24px]" : "left-[2px]"
        }`}
      />
    </div>
  </div>
);

const ProtectionCard = () => (
  <CardShell>
    <CardHeader
      title="Protección de compras"
      description="Protección en compras elegibles y cobertura ante cargos no reconocidos."
    />
    <div className="absolute top-[182px] left-[35px] flex w-[368px] flex-col gap-5 rounded-[10px] bg-[#FCFCFC] p-[30px]">
      <LockIcon />
      <div className="flex flex-col gap-[30px]">
        <ToggleRow label="Bloquear Tarjeta Digital" on />
        <ToggleRow label="Bloquear Tarjeta Física" on={false} />
      </div>
    </div>
  </CardShell>
);

const SupportCard = () => (
  <CardShell>
    <CardHeader
      title="Atención 24/7"
      description="Bloquea tu tarjeta y recibe ayuda en cualquier momento."
    />
    <div className="absolute top-[157px] left-1/2 flex w-[359px] -translate-x-1/2 flex-col gap-[17px] rounded-[17px] bg-[#FCFCFC] p-[17px]">
      <HeadphonesIcon />
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="bg-blue-normal flex h-[62px] cursor-pointer items-center justify-center gap-2 rounded-[8px] text-white"
        >
          <WhatsAppIcon className="h-[27px] w-[27px]" />
          <Text weight="bold" size={13.55} className="leading-[17px]">
            Enviar whatsapp
          </Text>
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
        <button
          type="button"
          className="text-blue-normal flex h-[62px] cursor-pointer items-center justify-center gap-1 rounded-[8px] bg-[#D9E6F1]"
        >
          <MessageIcon className="h-[30px] w-[30px]" />
          <Text weight="bold" size={13.55} className="leading-[17px]">
            Enviar correo electrónico
          </Text>
          <ChevronRight className="text-blue-normal h-5 w-5" />
        </button>
      </div>
    </div>
  </CardShell>
);

const AppControlCard = () => (
  <div className="relative h-[844px] w-[437px] overflow-hidden rounded-[20px] bg-[#003462] text-white">
    <div className="absolute top-10 left-1/2 flex w-[360px] -translate-x-1/2 flex-col gap-2.5">
      <Text weight="bold" size={30} className="leading-9">
        Control desde la app
      </Text>
      <Text size={18} className="leading-6">
        Consulta movimientos, controla gastos y recibe alertas en tiempo real.
      </Text>
    </div>
    <div className="absolute top-[124px] left-1/2 -translate-x-1/2">
      <Image
        src="/img/iphone-14-pro.png"
        alt="App Taveron en iPhone"
        width={370}
        height={720}
        className="h-[720px] w-[370px] object-contain"
      />
    </div>
  </div>
);

const KeypadCard = () => (
  <CardShell>
    <CardHeader
      title="Pagos online seguros"
      description="Tokenización y 3D Secure protegen cada transacción digital."
    />
    <div className="absolute bottom-11 left-1/2 flex w-[379px] -translate-x-1/2 flex-col gap-[30px] rounded-[20px] bg-[#FCFCFC] p-[30px]">
      <KeypadIcon />
      <div className="flex justify-center gap-2.5">
        {["4", "6", "1", "7"].map((n) => (
          <div
            key={n}
            className="bg-blue-normal/10 flex h-[65px] w-[65px] items-center justify-center rounded-[7px]"
          >
            <Text weight="bold" size={46} className="text-blue-darker">
              {n}
            </Text>
          </div>
        ))}
      </div>
    </div>
  </CardShell>
);

const UsFlag = () => (
  <Image
    src="/icons/flag-usa.svg"
    alt="Estados Unidos"
    width={73}
    height={73}
    className="h-[73px] w-[73px]"
  />
);

const BorderlessCard = () => (
  <CardShell>
    <CardHeader
      title="Compra sin fronteras"
      description="Ideal para viajes y compras en el extranjero."
    />
    <div className="absolute top-[160px] left-[30px] flex w-[377px] items-start rounded-[15px] bg-[#FCFCFC] px-5 pt-4 pb-5">
      <div className="flex flex-col gap-10">
        <UsFlag />
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-[3px]">
            <Text
              weight="bold"
              size={16}
              className="text-blue-darker leading-5"
            >
              Nike Factory New York
            </Text>
            <Text
              weight="bold"
              size={20}
              className="text-blue-darker leading-7"
            >
              $1,243.00 USD
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Text size={14} className="leading-5 text-[#6B6B6B]">
              29 de Mayo, 2025
            </Text>
            <div className="bg-blue-normal h-1 w-1 rounded-full" />
            <Text size={14} className="leading-5 text-[#6B6B6B]">
              14:53 hrs
            </Text>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-5 flex items-center rounded-full bg-[#E6EEF6] px-5 py-2.5">
        <Text weight="bold" size={12} className="text-blue-normal leading-4">
          Compra Aprobada
        </Text>
      </div>
    </div>
  </CardShell>
);

export const ClassicBenefits = () => {
  return (
    <section className="w-full bg-[#F3F3F3] py-20">
      <div className="mx-auto flex w-[1351px] flex-col items-center gap-10">
        <div className="flex w-[964px] flex-col items-center gap-2.5">
          <div className="flex flex-col items-center gap-5">
            <Badge variant="outline">Nuestros beneficios</Badge>
            <Text
              as="h2"
              weight="bold"
              size={48}
              className="w-[709px] text-center leading-[58px] text-[#003462]"
            >
              Compra donde sea, cuando sea.
            </Text>
          </div>
          <Text
            size={20}
            className="w-[964px] text-center leading-7 text-[#0F0F0F]"
          >
            Utiliza tu tarjeta Clásica Taveron en millones de comercios y
            cajeros alrededor del mundo.
          </Text>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-5">
            <ProtectionCard />
            <SupportCard />
          </div>
          <AppControlCard />
          <div className="flex flex-col gap-5">
            <KeypadCard />
            <BorderlessCard />
          </div>
        </div>
      </div>
    </section>
  );
};
