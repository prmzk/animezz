"use client";

import AnimeCard from "@/components/anime-card";
import { Anime } from "@/types";
import { useEffect, useState } from "react";

export default function Bookmarks() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const getAnime = (): Anime[] => {
    return localStorage.getItem("ANIME_BOOKMARK")
      ? JSON.parse(localStorage.getItem("ANIME_BOOKMARK") ?? "[]")
      : [];
  };

  useEffect(() => {
    if (typeof window !== "undefined") setAnimes(getAnime());
  }, []);

  const onRemove = () => {
    setAnimes(getAnime());
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex gap-2 py-8 my-20">
        <h1 className="text-2xl font-bold text-center antialiased">
          Your Bookmarks
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 mb-40">
        {animes.length > 0
          ? animes?.map((anime, i) => (
              <AnimeCard anime={anime} key={i} onBookmarkClick={onRemove} />
            ))
          : ""}
      </div>
    </div>
  );
}
