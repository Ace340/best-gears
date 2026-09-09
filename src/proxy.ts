import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

// Redirige "/" al idioma del navegador (español por defecto)
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Solo redirigir la raíz
  if (pathname !== "/") return NextResponse.next();

  const accept = request.headers.get("accept-language") ?? "";
  const locale = accept.toLowerCase().startsWith("es") || !accept.includes("en")
    ? defaultLocale
    : "en";

  return NextResponse.redirect(
    new URL(`/${locale}`, request.url)
  );
}

export const config = {
  matcher: ["/"],
};


