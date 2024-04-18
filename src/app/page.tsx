import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CrewComponent from "@/components/CrewComponent";
import OurLinksComponent from "@/components/OurLinksComponent";
import Image from "next/image";
import Link from "next/link";

import bfastLogo from "@/assets/images/champions_of_breakfast/splash.png";
import hbLogo from "@/assets/images/heartbound/heartbound_splash.png";
import ktmLogo from "@/assets/images/kill_the_moon/ktm_splash.png";

import logo from "@/assets/images/pirate_logo.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ourGames = [
  {
    href: "/games/breakfast",
    title: "Champions of Breakfast",
    img: bfastLogo,
  },
  {
    href: "/games/heartbound",
    title: "Heartbound",
    img: hbLogo,
  },
  {
    href: "/games/killthemoon",
    title: "Kill the Moon",
    img: ktmLogo,
  },
];

export default function Home() {
  return (
    <section className="mb-20 flex flex-col items-center justify-center">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        src={logo}
        alt="Pirate Software Logo"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background"></div>
      <div className="flex w-full flex-col items-center justify-center py-64">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
          Pirate Software
        </h1>
        <h2 className="scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight">
          We make pretty rad games!
        </h2>
      </div>
      {/* Games section */}
      <section className="flex flex-col items-center justify-center" id="games">
        <h4 className="scroll-m-20 pb-6 text-3xl font-semibold tracking-tight">
          Our games
        </h4>
        <div className="flex flex-col items-center justify-center gap-4 px-8 md:flex-row">
          {ourGames.map((it, i) => (
            <Link
              href={it.href}
              className="transition duration-75 hover:scale-105"
              key={i}
            >
              <Card className="h-fit">
                {/* <CardHeader className="py-3">
                  <CardTitle className="text-center">{it.title}</CardTitle>
                </CardHeader> */}
                <CardContent className="rounded-b p-0">
                  <Image
                    src={it.img}
                    alt="Game splash art"
                    className="w-96 rounded"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      {/* Crew section */}
      <section
        className="jutsify-center flex flex-col items-center pt-40"
        id="crew"
      >
        <h4 className="scroll-m-20 pb-6 text-3xl font-semibold tracking-tight">
          The Crew
        </h4>
        <CrewComponent />
      </section>
      {/* Links section */}
      <section
        className="jutsify-center flex w-full flex-col items-center pt-40"
        id="links"
      >
        <h4 className="scroll-m-20 pb-6 text-3xl font-semibold tracking-tight">
          Our Links
        </h4>
        <OurLinksComponent />
      </section>
      {/* Livestream section */}
      <section
        id="stream"
        className="jutsify-center flex flex-col items-center pt-40"
      >
        <h4 className="scroll-m-20 pb-6 text-3xl font-semibold tracking-tight">
          Watch us live!
        </h4>
        <div className="w-[70vw] rounded-sm outline outline-2 outline-offset-2 outline-muted">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://player.twitch.tv/?channel=piratesoftware&height=720&width=1280&parent=localhost&parent=pirate-software.vercel.app&autoplay=false&muted=true"
              className="h-full w-full rounded-sm"
            ></iframe>
          </AspectRatio>
        </div>
      </section>
      {/* Donations section */}
      <section
        className="jutsify-center flex w-full flex-col items-center pt-40"
        id="donations"
      >
        <h4 className="scroll-m-20 pb-6 text-3xl font-semibold tracking-tight">
          Donations
        </h4>
        <Button asChild variant="link" className="text-lg">
          <Link href="https://pally.gg/p/piratesoftware" target="_blank">
            <svg viewBox="0 0 600 600" className="h-8 w-8">
              <path
                d="M263 50C157.672 50 74.6188 95.1732 28.0851 134.379C7.0606 152.093 -2.37378 179.394 0.506378 206.735C19.1833 384.036 147.753 600 263 600C378.247 600 506.817 384.036 525.494 206.735C528.374 179.394 518.939 152.093 497.915 134.379C451.381 95.1732 368.328 50 263 50Z"
                fill="url(#paint0_linear_312_3246)"
              ></path>
              <path
                d="M439.89 7.08128C383.865 110.577 309.691 155.369 209.892 184.555C207.113 185.351 204.659 187.004 202.882 189.279C201.106 191.553 200.099 194.33 200.007 197.211C199.915 200.092 200.742 202.928 202.369 205.31C203.996 207.693 206.339 209.5 209.062 210.47C287.223 239.076 334.028 282.917 334.568 379.499C334.576 382.511 335.592 385.434 337.454 387.806C339.316 390.178 341.919 391.863 344.85 392.595C347.781 393.326 350.873 393.062 353.637 391.845C356.401 390.628 358.679 388.527 360.11 385.874C415.969 282.42 490.35 237.586 590.108 208.4C592.887 207.605 595.341 205.951 597.118 203.677C598.894 201.402 599.901 198.625 599.993 195.744C600.085 192.864 599.258 190.028 597.631 187.645C596.004 185.263 593.661 183.456 590.938 182.485C512.652 153.879 466.013 110.038 465.473 13.4566C465.446 10.4494 464.418 7.53622 462.551 5.17417C460.684 2.81211 458.083 1.13482 455.156 0.40543C452.229 -0.323954 449.142 -0.0641544 446.379 1.14407C443.616 2.35229 441.334 4.44057 439.89 7.08128Z"
                fill="#E3FF17"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_312_3246"
                  x1="2.93925e-06"
                  y1="325"
                  x2="526"
                  y2="325"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6B70FF"></stop>
                  <stop offset="0.984375" stopColor="#8257FD"></stop>
                </linearGradient>
                <clipPath id="clip0_312_3246">
                  <rect width="600" height="600" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            Pally.gg
          </Link>
        </Button>
        <span>
          Donations go to our{" "}
          <Button asChild className="inline p-0" variant="link">
            <Link href="https://www.twitch.tv/piratesoftware">Twitch</Link>
          </Button>{" "}
          mods.
        </span>
      </section>
    </section>
  );
}
