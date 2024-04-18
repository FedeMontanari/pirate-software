"use client";

import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import { useState } from "react";

const navigationItems = [
  {
    name: "Our Games",
    href: "/#games",
  },
  {
    name: "The Crew",
    href: "/#crew",
  },
  {
    name: "Our links",
    href: "/#links",
  },
  {
    name: "Stream",
    href: "/#stream",
  },
  {
    name: "Donations",
    href: "/#donations",
  },
];

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <nav className="fixed z-10 flex h-10 min-w-full flex-row items-center justify-between border-b-4 bg-background/90 px-7 py-3 text-lg">
        <Link
          href="/"
          className="border-white text-2xl transition hover:scale-110 hover:border-b"
        >
          Home
        </Link>
        <ul className="flex flex-row items-center justify-center space-x-4">
          {navigationItems.map((el, i) => (
            <li key={i} className="transition hover:scale-110">
              <Link href={el.href} className="border-white hover:border-b">
                {el.name}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
      </nav>
    );
  }

  return (
    <div className="fixed top-0 z-40 h-fit w-full">
      <nav>
        <Button
          size="icon"
          variant="outline"
          className="fixed right-5 top-5 z-50"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </Button>
      </nav>

      <div
        className={`border-b-4 bg-background transition ease-in-out data-[open=true]:animate-in data-[open=false]:animate-out data-[open=false]:slide-out-to-top data-[open=true]:slide-in-from-top ${open ? "" : "hidden"}`}
        data-open={open}
      >
        <ul className="flex h-full flex-col space-y-10 py-5 text-center">
          <li className="flex items-center justify-center gap-x-5">
            <Link
              href="/"
              className="border-white text-3xl transition hover:scale-110 hover:border-b"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <ModeToggle />
          </li>
          {navigationItems.map((el, i) => (
            <li key={i} className="text-2xl transition hover:scale-110">
              <Link
                href={el.href}
                className="border-white hover:border-b"
                onClick={() => setOpen(false)}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
