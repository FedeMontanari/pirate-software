import COBComponent from "@/components/COBComponent";
import KTMComponent from "@/components/KTMComponent";
import React from "react";

export default function GamePage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case "breakfast":
      return <COBComponent />;

    case "killthemoon":
      return <KTMComponent />;

    default:
      return <div className="mt-24 text-center">Work in progress...</div>;
  }
}
