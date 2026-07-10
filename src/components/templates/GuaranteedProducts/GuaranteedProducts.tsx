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
      className: "absolute top-11.75 right-14.25 h-63 w-70",
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
      className: "absolute top-10 right-19 h-71.75 w-28.5",
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
      className: "absolute -bottom-6.5 right-16.5 h-95.75 w-46.5",
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
      className: "absolute top-17.5 right-10 h-53.5 w-80.25",
    },
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div
    className={`bg-blue-darker relative h-89.25 overflow-hidden rounded-[20px] ${
      product.size === "wide" ? "w-185.5" : "w-139.75"
    }`}
  >
    <div
      className={`absolute top-15.25 left-10 flex flex-col gap-5 ${
        product.size === "wide" ? "w-80.5" : "w-68.75"
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
    <section className="w-full bg-[#002749] py-15">
      <div className="mx-auto flex w-330.25 flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2.5">
          <Badge variant="outline-white">Nuestros beneficios</Badge>
          <Text
            as="h2"
            weight="bold"
            size={48}
            className="w-190 text-center leading-14.5 text-white"
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
