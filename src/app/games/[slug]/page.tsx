import React from "react";

export default function GamePage({ params }: { params: { slug: string } }) {
  return (
    <div className="mb-20 flex flex-col items-center justify-center mt-44">
      {params.slug} page
    </div>
  );
}
