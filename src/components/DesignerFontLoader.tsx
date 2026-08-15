"use client";

import { useEffect } from "react";
import { googleFontsHref } from "@/lib/fonts";

export function DesignerFontLoader() {
  useEffect(() => {
    if (document.querySelector(`link[data-lettering-fonts="true"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = googleFontsHref;
    link.setAttribute("data-lettering-fonts", "true");
    document.head.appendChild(link);
  }, []);

  return null;
}
