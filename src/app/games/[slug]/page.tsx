import COBComponent from "@/components/COBComponent";
import React from "react";

export default function GamePage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case "breakfast":
      return <COBComponent />;

    default:
      return <div className="mt-24 text-center">Work in progress...</div>;
  }
}
