"use client";

import { type ComponentProps } from "react";
import { Button } from "~/components/molecules";
import { useDownloadModal } from "~/context/DownloadModalContext";

type DownloadCtaButtonProps = Omit<ComponentProps<typeof Button>, "onClick">;

/**
 * A Button that opens the "Descarga la app" modal. Use it for every
 * "Solicita tu tarjeta" / "Descargar" style call to action.
 */
export const DownloadCtaButton = (props: DownloadCtaButtonProps) => {
  const { open } = useDownloadModal();
  return <Button {...props} onClick={open} />;
};
