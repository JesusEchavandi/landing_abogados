"use client";

import { create } from "zustand";
import { ToastType } from "@/components/ui/Toast";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  description?: string;
  duration?: number;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }],
    }));
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },
}));

export const useToast = () => {
  const { addToast } = useToastStore();

  return {
    success: (message: string, description?: string) =>
      addToast({ type: "success", message, description }),
    error: (message: string, description?: string) =>
      addToast({ type: "error", message, description }),
    info: (message: string, description?: string) =>
      addToast({ type: "info", message, description }),
    warning: (message: string, description?: string) =>
      addToast({ type: "warning", message, description }),
  };
};
