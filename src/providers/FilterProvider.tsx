"use client";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export const FilterContext = createContext<{
	filter?: any;
	setFilter?: any | Dispatch<SetStateAction<any>>;
}>({});

const FilterProvider = ({ children }: PropsWithChildren) => {
	const [filter, setFilter] = useState([]);
	return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
