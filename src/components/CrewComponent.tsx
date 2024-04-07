import React from "react";

interface Crew {
  header: string;
  title?: string;
  p: string[];
}

const crew: Crew[] = [
  {
    header: "Pirate Software",
    p: [
      "Pirate Software is an independent games studio based in the United States.",
      "We develop and publish our own games the way we want them to be.",
      "You can learn about a few of our core members below!",
    ],
  },
  {
    header: "Jason Thor Hall",
    title: "Game Director",
    p: [
      "Founded Pirate Software to follow his longstanding dream of building an indie games company.",
      "Thor operates as a programmer, game designer and writer on the team.",
      "His body is composed of 98% silver doritos and puns.",
    ],
  },
  {
    header: "Bradie Shaye Rehmel",
    title: "Lead Artist",
    p: [
      "Lord of the pixel and the king of hams.",
      "Shaye is our masterful Lead Artist and he reigns supreme over all assets on our projects.",
    ],
  },
  {
    header: "Stjin Van Wakeren",
    title: "Composer and Sound Designer",
    p: [
      "Legend has it they once ate an entire record and now can't stop making tunes.",
      "Doesn't know we put a mic in their house, that's legal right?",
    ],
  },
];

export default function CrewComponent() {
  return (
    <div className="flex w-11/12 flex-col items-start space-y-5">
      {crew.map((cr, i) => (
        <div key={i} className="w-11/12 border-b last:border-none">
          <h5 className="w-fit border-b text-2xl">
            {cr.header}
            {cr.title && (
              <span className="ml-3 inline text-lg">{cr.title}</span>
            )}
          </h5>
          <div className="p-8 text-center">
            {cr.p.map((p, i) => (
              <p className="text-lg" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
