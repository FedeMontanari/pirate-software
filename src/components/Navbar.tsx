import Link from "next/link";
import ModeToggle from "./ModeToggle";

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
  return (
    <nav className="fixed z-10 flex h-10 min-w-full flex-row items-center justify-between border-b-4 bg-background/90 px-7 py-3 text-lg">
      <Link
        href="/"
        className=" border-white text-2xl transition hover:scale-110 hover:border-b"
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
