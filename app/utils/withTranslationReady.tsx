// utils/withTranslationReady.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export function withTranslationReady<T extends object>(
  Component: React.ComponentType<T>,
  namespace: string = "common"
): React.FC<T> {
  return function TranslationReadyWrapper(props: T) {
    const { ready } = useTranslation(namespace);
    if (!ready) {
      return (
        <div suppressHydrationWarning style={{ display: "none" }}>
          {/* Prevent hydration error */}
        </div>
      );
    }
    return <Component {...props} />;
  };
}
