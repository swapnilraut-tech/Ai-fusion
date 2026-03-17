'use client'
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import ChatInputBox from "./_components/ChatInputBox";

export default function Home() {
  const {setTheme}  = useTheme()
  return (
    <div className="w-screen">
      <h1>this swapnil ai fusion lab</h1>
      <Button >
        click
      </Button>
      <Button onClick={() => setTheme('light')}>
        light mode
      </Button>
      <Button onClick={() => setTheme('dark')}>
        dark mode
      </Button>
      <ChatInputBox />
    </div>
  );
}
