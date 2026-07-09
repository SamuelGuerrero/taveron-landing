"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";
import { DownloadAppModal } from "~/components/organisms/DownloadAppModal/DownloadAppModal";

interface DownloadModalContextValue {
  open: () => void;
  close: () => void;
}

const DownloadModalContext = createContext<DownloadModalContextValue | null>(
  null,
);

export const useDownloadModal = () => {
  const ctx = useContext(DownloadModalContext);
  if (!ctx) {
    throw new Error(
      "useDownloadModal must be used within a DownloadModalProvider",
    );
  }
  return ctx;
};

export const DownloadModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <DownloadModalContext.Provider value={{ open, close }}>
      {children}
      <DownloadAppModal isOpen={isOpen} onClose={close} />
    </DownloadModalContext.Provider>
  );
};
