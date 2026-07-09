"use client";

import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Text } from "~/components/atoms";
import { StoreButtons } from "~/components/molecules/StoreButtons/StoreButtons";
import { DOWNLOAD_PATH } from "~/config/download";

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
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

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAppModal = ({ isOpen, onClose }: DownloadAppModalProps) => {
  const [downloadUrl, setDownloadUrl] = useState(
    `https://taveron.com${DOWNLOAD_PATH}`,
  );

  useEffect(() => {
    setDownloadUrl(`${window.location.origin}${DOWNLOAD_PATH}`);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-blue-darker/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Descarga la app de Taveron"
        className={`relative z-10 flex w-full max-w-[440px] flex-col items-center rounded-[28px] bg-white px-10 py-12 text-center shadow-[0_24px_80px_rgba(0,30,57,0.35)] transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#F1F3F6] text-blue-darker transition-colors hover:bg-[#E4E8EE]"
        >
          <CloseIcon />
        </button>

        <Text
          as="h2"
          weight="bold"
          size={32}
          className="leading-tight text-blue-darker"
        >
          Descarga la app de Taveron
        </Text>

        <Text size={16} className="mt-3 text-[#5B6B7B]">
          Escanea el código QR para descargar la app
        </Text>

        <div className="mt-8 rounded-[20px] border border-black/[0.06] bg-white p-4 shadow-[0_8px_24px_rgba(0,30,57,0.08)]">
          <QRCodeSVG value={downloadUrl} size={196} level="M" marginSize={0} />
        </div>

        <div className="mt-8 flex w-full items-center gap-4">
          <span className="h-px flex-1 bg-black/10" />
          <Text size={14} className="whitespace-nowrap text-[#8A97A6]">
            o descarga directamente
          </Text>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        <StoreButtons className="mt-6 justify-center" />
      </div>
    </div>
  );
};
