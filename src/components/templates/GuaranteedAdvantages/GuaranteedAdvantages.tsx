import type { ReactNode } from "react";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

const iconClass = "h-10.25 w-10.25 text-blue-normal";

const TableSettingsIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" className={iconClass} aria-hidden>
    <rect
      x="5"
      y="7"
      width="27.5"
      height="24"
      rx="3.4"
      stroke="currentColor"
      strokeWidth="3.4"
    />
    <path
      d="M7 14h27.5M7 22.5h8.5"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <path
      d="M22 27l3-3 3 3-3 3-3-3z"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinejoin="round"
    />
    <circle cx="25.5" cy="27" r="1.5" fill="currentColor" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" className={iconClass} aria-hidden>
    <circle
      cx="20.5"
      cy="20.5"
      r="17"
      stroke="currentColor"
      strokeWidth="3.4"
    />
    <ellipse
      cx="20.5"
      cy="20.5"
      rx="7"
      ry="17"
      stroke="currentColor"
      strokeWidth="3.4"
    />
    <path
      d="M3.5 20.5h34"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
  </svg>
);

const MoneyIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" className={iconClass} aria-hidden>
    <rect
      x="5"
      y="10"
      width="31"
      height="21"
      rx="2"
      stroke="currentColor"
      strokeWidth="3.4"
    />
    <circle cx="20.5" cy="20.5" r="5" stroke="currentColor" strokeWidth="3.4" />
    <circle cx="10" cy="15" r="1.5" fill="currentColor" />
    <circle cx="31" cy="26" r="1.5" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0" aria-hidden>
    <circle cx="8" cy="8" r="8" fill="#0056A3" />
    <path
      d="M5 8l2 2 4-4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Advantage {
  icon: ReactNode;
  title: string;
  items: string[];
}

const advantages: Advantage[] = [
  {
    icon: <TableSettingsIcon />,
    title: "Control y seguridad",
    items: [
      "Línea de crédito respaldada por tu depósito",
      "Ideal para iniciar o reparar historial crediticio",
    ],
  },
  {
    icon: <GlobeIcon />,
    title: "Facilidad total",
    items: [
      "Solicitud sencilla desde la app Taveron",
      "Proceso claro y sin complicaciones",
    ],
  },
  {
    icon: <MoneyIcon />,
    title: "Crecimiento financiero",
    items: [
      "Construcción activa de historial crediticio",
      "Posibilidad futura de acceder a otros productos Taveron",
    ],
  },
];

export const GuaranteedAdvantages = () => {
  return (
    <section className="flex h-200 w-full items-center justify-center bg-white">
      <div className="flex w-335.75 flex-col items-center gap-15">
        <div className="flex flex-col items-center gap-2.5">
          <Badge variant="outline">La Ventaja Taveron</Badge>
          <div className="flex w-138.5 flex-col items-center gap-5">
            <Text
              as="h2"
              weight="bold"
              size={48}
              className="text-blue-darker w-138.5 text-center leading-14.5"
            >
              Más que una Fintech:
              <br />
              Un ecosistema completo.
            </Text>
            <Text
              size={20}
              className="text-blue-darker w-138.5 text-center leading-7"
            >
              Taveron combina innovación, cumplimiento y experiencia global:
            </Text>
          </div>
        </div>

        <div className="flex w-full gap-5">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="relative h-69 flex-1 rounded-[20px] bg-[#E6EEF6]"
            >
              <div className="absolute top-5.75 left-5 flex h-20 w-20 items-center justify-center rounded-[20px] bg-white">
                {advantage.icon}
              </div>
              <div className="absolute top-30.75 left-7.25 flex flex-col gap-2.5">
                <Text
                  weight="bold"
                  size={24}
                  className="text-blue-darker leading-8"
                >
                  {advantage.title}
                </Text>
                <ul className="flex flex-col gap-2.5">
                  {advantage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5">
                        <CheckIcon />
                      </span>
                      <Text size={16} className="text-blue-darker leading-5">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
