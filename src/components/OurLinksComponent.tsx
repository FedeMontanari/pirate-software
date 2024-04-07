import simpleIconsPath from "@/util/simpleIconsPath";
import Link from "next/link";

const links = [
  {
    siName: "siSteam",
    href: "https://store.steampowered.com/search/?developer=Pirate%20Software",
  },
  {
    siName: "siHumblebundle",
    href: "https://www.humblebundle.com/?partner=piratesoftware",
  },
  {
    siName: "siTwitter",
    href: "https://twitter.com/PirateSoftware",
  },
  {
    siName: "siTumblr",
    href: "https://gopiratesoftware.tumblr.com/",
  },
  {
    siName: "siInstagram",
    href: "https://www.instagram.com/pirate_software/",
  },
  {
    siName: "siKofi",
    href: "https://ko-fi.com/piratesoftware/tiers",
  },
  {
    siName: "siDiscord",
    href: "https://discord.gg/piratesoftware",
  },
  {
    siName: "siYoutube",
    href: "https://www.youtube.com/c/piratesoftware",
  },
  {
    siName: "siTwitch",
    href: "https://www.twitch.tv/piratesoftware",
  },
  {
    siName: "siBigcartel",
    href: "https://piratesoftware.bigcartel.com/products",
  },
];

export default function OurLinksComponent() {
  return (
    <div className="flex w-3/4 flex-row flex-wrap items-center justify-center gap-3">
      {links.map((ic, i) => {
        const iconData = simpleIconsPath(ic.siName);
        return (
          <Link
            href={ic.href}
            key={i}
            className="flex flex-col items-center justify-center rounded bg-slate-500 px-5 pb-2 pt-4 transition duration-75 hover:scale-105 hover:bg-slate-700"
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
                color: `#${iconData.hex}`,
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-2xl bg-white/70 p-1"
            >
              <title>{iconData.title}</title>
              <path d={iconData.path}></path>
            </svg>
            <span className="text-background">
              {iconData.title == "Big Cartel" ? "Merch" : `${iconData.title}`}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
