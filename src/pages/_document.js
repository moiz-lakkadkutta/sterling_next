import { Html, Head, Main, NextScript } from "next/document";
import { BrowserRouter } from "react-router-dom";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="min-h-screen">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
