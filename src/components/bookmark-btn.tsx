"use client";

import { Anime } from "@/types";
import { Bookmark, BookmarkMinus } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";

export default function BookmarkButton({
  anime,
  onBookmarkClick,
}: {
  anime: Anime;
  onBookmarkClick?: () => void;
}) {
  const [bookmarked, setBookmarked] = useState(false); //only for UI
  const onClick = () => {
    if (getAnimeIndex() < 0) {
      localStorage.setItem(
        "ANIME_BOOKMARK",
        JSON.stringify([...getAnime(), anime])
      );
      setBookmarked(true);
    } else {
      const newArr = [...getAnime()].filter(
        (animeArr) => animeArr.id !== anime.id
      );
      localStorage.setItem("ANIME_BOOKMARK", JSON.stringify(newArr));
      setBookmarked(false);
    }

    if (onBookmarkClick) onBookmarkClick();
  };

  const getAnime = (): Anime[] => {
    if (!localStorage) return [];
    return localStorage.getItem("ANIME_BOOKMARK")
      ? JSON.parse(localStorage.getItem("ANIME_BOOKMARK") ?? "")
      : [];
  };
  const getAnimeIndex = useCallback(() => {
    return getAnime().findIndex((animeLs) => animeLs.id === anime.id) ?? -1;
  }, [anime.id]);

  useEffect(() => {
    setBookmarked(getAnimeIndex() >= 0);
  }, [getAnimeIndex]);

  return (
    <Button className="text-xs h-6 px-2" onClick={onClick}>
      {bookmarked ? (
        <>
          Remove <BookmarkMinus className="ml-2 h-4 w-4" />
        </>
      ) : (
        <>
          Bookmark <Bookmark className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}
