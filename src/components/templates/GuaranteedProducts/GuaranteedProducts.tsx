import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

interface Product {
  title: string;
  description: string;
  size: "wide" | "narrow";
  image: ProductImage;
}

const row1: Product[] = [
  {
    title: "Tarjeta de Crédito",
    description:
      "Tarjetas de crédito, prepago y co-brandeadas. (Clásica, Busines Corporate e Infinte)",
    size: "wide",
    image: {
      src: "/products/cards.svg",
      alt: "Tarjetas Taveron",
      width: 280,
      height: 252,
      className: "absolute top-[47px] right-[57px] h-[252px] w-[280px]",
    },
  },
  {
    title: "Taveron Pay",
    description:
      "Terminal punto de venta para tu negocio. Acepta Visa, Mastercard, QR y wallets digitales.",
    size: "narrow",
    image: {
      src: "/products/terminal.svg",
      alt: "Terminal Taveron Pay",
      width: 114,
      height: 287,
      className: "absolute top-[40px] right-[76px] h-[287px] w-[114px]",
    },
  },
];

const row2: Product[] = [
  {
    title: "Taveron Móvil",
    description:
      "Telefonía móvil integrada a tu cuenta. Cambia de plan fácil y gestiona todo desde la app.",
    size: "narrow",
    image: {
      src: "/products/phone.svg",
      alt: "App Taveron Móvil",
      width: 186,
      height: 383,
      className: "absolute -bottom-[26px] right-[66px] h-[383px] w-[186px]",
    },
  },
  {
    title: "Remesas",
    description:
      "Envía y recibe dinero de forma segura en más de 190 países con cobertura global Taveron.",
    size: "wide",
    image: {
      src: "/products/coins.svg",
      alt: "Remesas Taveron",
      width: 321,
      height: 214,
      className: "absolute top-[70px] right-[40px] h-[214px] w-[321px]",
    },
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div
    className={`bg-blue-darker relative h-[357px] overflow-hidden rounded-[20px] ${
      product.size === "wide" ? "w-[742px]" : "w-[559px]"
    }`}
  >
    <div
      className={`absolute top-[61px] left-[40px] flex flex-col gap-5 ${
        product.size === "wide" ? "w-[322px]" : "w-[275px]"
      }`}
    >
      <Text weight="bold" size={30} className="leading-9 text-white">
        {product.title}
      </Text>
      <Text size={18} className="leading-6 text-white">
        {product.description}
      </Text>
    </div>
    <Image
      src={product.image.src}
      alt={product.image.alt}
      width={product.image.width}
      height={product.image.height}
      className={product.image.className}
    />
  </div>
);

export const GuaranteedProducts = () => {
  return (
    <section className="w-full bg-[#002749] py-[60px]">
      <div className="mx-auto flex w-[1321px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2.5">
          <Badge variant="outline-white">Nuestros beneficios</Badge>
          <Text
            as="h2"
            weight="bold"
            size={48}
            className="w-[760px] text-center leading-[58px] text-white"
          >
            Con tu tarjeta garantizada, también puedes aprovechar
          </Text>
        </div>

        <div className="flex w-full flex-col gap-5">
          <div className="flex gap-5">
            {row1.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
          <div className="flex gap-5">
            {row2.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="#" aria-label="Descargar en App Store">
            <Image
              src="/badges/apple.svg"
              alt="App Store"
              width={182}
              height={61}
            />
          </Link>
          <Link href="#" aria-label="Descargar en Google Play">
            <Image
              src="/badges/google-play.svg"
              alt="Google Play"
              width={195}
              height={60}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
