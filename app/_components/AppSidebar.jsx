'use client'
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";

export function AppSidebar() {
    const {theme,setTheme} = useTheme()
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-5">
          <Image
            alt="client logo"
            src={"/logos/logo.svg"}
            height={60}
            width={60}
            className="w-[40px] h-[40px] "
          />
          <h2 className="text-xl font-bold">Ai Fusion</h2>
          {theme === "dark" ? (
            <Button onClick={() => setTheme("light")}>Light</Button>
          ) : (
            <Button onClick={() => setTheme("dark")}>Dark</Button>
          )}
        </div>
        <Button className={"w-full mt-7 "} size="lg">
          + New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4">
            <h1 className="font-bold text-lg">Chat</h1>
            <p className="font-extralight">Sign in to start chating with muktiple ai model</p>
          </div>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter >
        <Button>
          Sign in/Sign up
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
