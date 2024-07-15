"use client";
import { createContext, PropsWithChildren, useState } from "react";

export const SidebarContext = createContext({ isOpen: false, setIsOpen: (val: boolean) => {} });

const SidebarProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
	);
};

export default SidebarProvider;
