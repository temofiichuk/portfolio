import { i18nRouter } from "next-i18n-router";
import { i18n } from "../i18n.config";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	return i18nRouter(request, i18n);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next).*)", { source: "/" }],
};
