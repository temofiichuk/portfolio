import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

const AppThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<ThemeProvider {...props} attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
};

export default AppThemeProvider;
