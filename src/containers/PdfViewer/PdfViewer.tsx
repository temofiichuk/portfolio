"use client";
import { redirect, useSearchParams } from "next/navigation";

// Import styles
import "@react-pdf-viewer/zoom/lib/styles/index.css";
// Core viewer
import { Viewer, ViewMode, Worker } from "@react-pdf-viewer/core";

// Import styles
import "@react-pdf-viewer/full-screen/lib/styles/index.css";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useTheme } from "next-themes";

type DocumentType = "specialist" | "master";

const documents = {
	specialist: "/education/junior_specialist_diploma.pdf",
	master: "/education/master_diploma.pdf",
	development: "/education/web-development_certificate.pdf",
	b1: "/education/b1_certificate.pdf",
};

const PdfViewer = () => {
	const params = useSearchParams();
	const currentFile = params.get("file") as DocumentType;
	if (!currentFile || !Object.keys(documents).includes(currentFile)) redirect("404");
	const theme = useTheme();
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<Worker
			i18nIsDynamicList
			workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
			<Viewer
				i18nIsDynamicList
				enableSmoothScroll
				viewMode={ViewMode.SinglePage}
				theme={theme}
				fileUrl={documents[currentFile]}
				plugins={[defaultLayoutPluginInstance]}
			/>
		</Worker>
	);
};

PdfViewer.displayName = "PdfViewer";
export default PdfViewer;
