'use client'
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const {setTheme}  = useTheme()
  return (
    <div>
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
    </div>
  );
}
