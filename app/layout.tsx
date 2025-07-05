import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./lib/theme";
import { PropsWithChildren } from "react";
import  "./styles/home.module.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: 'Math app for kids',
  description: 'app for kids',
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}