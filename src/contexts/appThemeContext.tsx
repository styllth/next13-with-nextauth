"use client";

import { FunctionComponent, PropsWithChildren } from "react";

import { defaultTheme } from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { NextAppDirEmotionCacheProvider } from "./emotionCacheProvider";

export const AppThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={defaultTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
