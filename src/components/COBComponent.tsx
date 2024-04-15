import Image from "next/image";
import React from "react";
import { cobImages } from "@/lib/cobImageExports";
import { Separator } from "./ui/separator";
import Link from "next/link";
import simpleIconsPath from "@/util/simpleIconsPath";

export default function COBComponent() {
  return (
    <div className="mb-20 mt-12 flex flex-col items-center justify-center">
      <div className="flex max-w-screen-lg flex-col items-center justify-center space-y-5 px-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h2 className="scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight">
            Champions of Breakfast
          </h2>
          <Image src={cobImages.splash} alt="Splash Game Logo" />
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.spices} alt="In-game difficulty selector" />
          <p className="px-12 text-center">
            These can be enabled or disabled to change the difficulty of the
            game in different ways. Each one of them makes the game harder in a
            unique manner.
            <br />
            There is also a mini-spice rack in game on the top left so viewers
            will always see which ones you have active at any time.
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.ss1} alt="Gameplay screenshot" />
          <p className="px-12 text-center">
            Bosses and mini-bosses have incredible abilities, higher health, and
            drop special boss class passives or Super Foods.
            <br />
            The Lamp mini-boss featured here is one of the most lethal enemies
            in the game. It slays you in a single hit if you ignore the flashing
            warning signs.
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.ss2} alt="Gameplay screenshot" />
          <p className="px-12 text-center">
            Each Champion has unique abilities based on Super Foods you collect
            from mini-bosses. You can activate these with right click and you
            can only hold one at a time.
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.ss3} alt="Gameplay screenshot" />
          <p className="px-12 text-center">
            Normal enemies drop random food passives that fire extra
            projectiles. These damage enemies and eventually turn you into a
            juggernaut.
            <br />
            Bosses drop 3 special boss only passives at a time and you are
            allowed to choose one of these before progressing. Boss passives are
            vastly more powerful and carry much more intricate effects.
            <br />
            New normal passives are unlocked by killing bosses while all boss
            passives are unlocked at all times.
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.ss4} alt="Gameplay screenshot" />
          <p className="px-12 text-center">
            Because of the unique shapes of the Champions you can turn and dodge
            enemy bullets. This is unlike most bullet-hell games where you
            normally have a single point of collision on your character.
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.ss5} alt="Gameplay screenshot" />
          <p className="px-12 text-center">
            These are not lunch boxes, goblin radios, or bagel launchers. :)
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.ss6} alt="Gameplay screenshot" />
          <p className="px-12 text-center">
            There is a secret level hidden in the world. Many players have
            already found it but nobody quite knows how just yet.
          </p>
          <Separator />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image src={cobImages.bg1} alt="Game splash art background" />
          <p className="px-12 text-center">
            You can earn an achievement &quot;32 Milliamps&quot; for killing the
            Bath Tub boss as the Toaster. This image can be used as a 1080p
            background.
          </p>
          <Separator />
          <Image src={cobImages.bg2} alt="Game splash art background" />
          <p className="px-12 text-center">
            The Toaster Oven is the largest of the released champions and has a
            difficult time navigating the Recliners cushion bullets. This image
            can be used as a 1080p background.
          </p>
          <Separator />
          <Image src={cobImages.bg3} alt="Game splash art background" />
          <p className="px-12 text-center">
            The Teapot is a shorter range, hardy, and small champion that tends
            to have a tough time fighting the Television. This image can be used
            as a 1080p background.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center space-x-4 py-12">
          <Image
            src={cobImages.toaster}
            alt="Game sprite"
            className="animate-bounce"
          />
          <Image
            src={cobImages.egg_beater}
            alt="Game sprite"
            className="animate-bounce delay-100"
          />
          <Image
            src={cobImages.oven}
            alt="Game sprite"
            className="animate-bounce delay-200"
          />
          <Image
            src={cobImages.washing_machine}
            alt="Game sprite"
            className="animate-bounce delay-300"
          />
          <Image
            src={cobImages.teapot}
            alt="Game sprite"
            className="delay-400 animate-bounce"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="scroll-m-20 pb-6 text-xl font-semibold tracking-tight">
          More links
        </h4>
        <div className="flex flex-row">
          <Link
            href="https://www.reddit.com/r/ChampionsOfBreakfast"
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
              style={{
                color: `#${simpleIconsPath("siReddit").hex}`,
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{simpleIconsPath("siReddit").title}</title>
              <path d={simpleIconsPath("siReddit").path}></path>
            </svg>
            <p>Reddit</p>
          </Link>
          <Link
            href="https://championsofbreakfast.gamepedia.com/Champions_of_Breakfast_Wiki"
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
              style={{
                color: `#${simpleIconsPath("siFandom").hex}`,
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{simpleIconsPath("siFandom").title}</title>
              <path d={simpleIconsPath("siFandom").path}></path>
            </svg>
            <p>Wiki</p>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h4 className="scroll-m-20 pb-6 text-2xl font-semibold tracking-tight">
          Purchase on Steam!
        </h4>
        <div className="h-fit w-fit rounded-md border-4 border-muted p-2">
          <iframe
            src="https://store.steampowered.com/widget/454380/"
            frameBorder={0}
            width="646"
            height="190"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
