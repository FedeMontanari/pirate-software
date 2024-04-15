import Image from "next/image";
import React from "react";
import Link from "next/link";
import simpleIconsPath from "@/util/simpleIconsPath";
import { ktmImages } from "@/lib/ktmImageExports";

export default function KTMComponent() {
  return (
    <div className="mb-20 mt-12 flex flex-col items-center justify-center">
      <div className="flex max-w-screen-lg flex-col items-center justify-center space-y-5 px-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h2 className="scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight">
            Kill the Moon
          </h2>
          <Image src={ktmImages.splash} alt="Splash Game Logo" />
          <p className="px-12 text-center">
            {
              "Kill The Moon is a fast paced shoot em' up roguelite dungeon runner. Power up your space shotgun, strap a telly to your head, and get to saving what's left of Earth. Or don't. Do whatever, it's your holographic apocalypse."
            }
          </p>
          <Image src={ktmImages.banner} alt="Game banner" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <h4 className="mt-12 scroll-m-20 pb-6 text-xl font-semibold tracking-tight">
            Characters
          </h4>
          <Image src={ktmImages.char} alt="Characters" />
          <p className="px-12 text-center">
            {
              "The moon is haunted by fallen past heroes. That's right, haunted. Get out there and get their parts back. Might need to really hunt for them though. Some of them ate it in pretty messed up ways. Maybe one of these worthless rat mechanics can get them running and gunning again."
            }
          </p>
          <Image src={ktmImages.banner} alt="Game banner" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <h4 className="mt-12 scroll-m-20 pb-6 text-xl font-semibold tracking-tight">
            Enemies
          </h4>
          <Image
            src={ktmImages.enemy}
            alt="Enemies"
            className="min-w-full"
            unoptimized
          />
          <p className="px-12 text-center">
            {
              "There's a ton of horrors ready to rip you to shreds out there on the moon. It's bad out there, kid. Real bad. Just shoot everything that moves until it stops moving. Then shoot it again just to make sure."
            }
          </p>
          <Image src={ktmImages.banner} alt="Game banner" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <h4 className="mt-12 scroll-m-20 pb-6 text-xl font-semibold tracking-tight">
            Platforming
          </h4>
          <Image
            src={ktmImages.jump}
            alt="Game Platforming"
            className="min-w-full"
            unoptimized
          />
          <p className="px-12 text-center">
            {
              "Lots of stuff to avoid out on the moon. You'll have to be quick on your feet... jetpack... tentacles. You get the idea. Just try not to die to traps. It's embarassing. I'd be embarassed."
            }
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mt-12 scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight">
          More links
        </h3>
        <div className="flex flex-row pt-6">
          <Link
            href="https://store.steampowered.com/app/1093180/Kill_The_Moon/"
            className="flex flex-col items-center justify-center rounded px-5 pb-2 pt-4 transition duration-75 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="45px"
              height="45px"
              className="fill-foreground"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{simpleIconsPath("siSteam").title}</title>
              <path d={simpleIconsPath("siSteam").path}></path>
            </svg>
            <p>Steam</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
