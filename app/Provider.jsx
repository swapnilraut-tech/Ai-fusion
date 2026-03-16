import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
const Provider = ({ children, ...props }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {" "}
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </NextThemesProvider>
  );
};

export default Provider;
