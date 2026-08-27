"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface InquiryItem {
  id: string;
  name: string;
  category: string;
  origin?: string;
  purity?: string;
  targetQuantity?: string;
  packagingPreference?: string;
}

interface InquiryContextType {
  items: InquiryItem[];
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: Omit<InquiryItem, "targetQuantity">) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: string) => void;
  clearInquiry: () => void;
  isInInquiry: (id: string) => boolean;
  totalItems: number;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

const STORAGE_KEY = "vishnu_traders_inquiry_basket";

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore storage read error
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // Ignore storage write error
      }
    }
  }, [items, isMounted]);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const addItem = (item: Omit<InquiryItem, "targetQuantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev;
      return [...prev, { ...item, targetQuantity: "500 kg (Standard MOQ)" }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItemQuantity = (id: string, quantity: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, targetQuantity: quantity } : i))
    );
  };

  const clearInquiry = () => setItems([]);

  const isInInquiry = (id: string) => items.some((i) => i.id === id);

  return (
    <InquiryContext.Provider
      value={{
        items,
        isOpen,
        openDrawer,
        closeDrawer,
        addItem,
        removeItem,
        updateItemQuantity,
        clearInquiry,
        isInInquiry,
        totalItems: items.length,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}
