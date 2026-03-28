import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ChatBot from "@/components/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hiranandani Fortune City",
  description: "Hiranandani Fortune City",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-locator-target="vscode://file/${projectPath}${filePath}:${line}:${column}"
      data-locator-client-url={null}
    >
      <head data-locator-hook-status-message="loading: No valid renderers found.">
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6YWY6HSWEY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6YWY6HSWEY', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
        <ChatBot />
      </body>
    </html>
  );
}