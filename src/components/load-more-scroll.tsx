"use client";

import delay from "@/lib/delay";
import { getClient } from "@/lib/urql-get-client";
import AnimesQuery from "@/queries/AnimesQuery";
import { Anime, AnimeList } from "@/types";
import { Loader2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./anime-card";

export default function LoadMoreScroll() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const fetchNextData = useCallback(async () => {
    setLoading(true);
    await delay(1000); // prevent rate limiting
    const nextPage = page + 1;
    const { data } = await getClient().query<AnimeList>(
      AnimesQuery(nextPage),
      {}
    );
    setAnimes((prev: Anime[]) => [...prev, ...(data?.Page.media ?? [])]);
    setPage(nextPage);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (inView) fetchNextData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  console.log(animes);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-6">
        {animes.map((anime, i) => (
          <AnimeCard anime={anime} key={i} />
        ))}
      </div>
      {/* Infinite scroll buffer */}
      <div className="py-8 flex justify-center" ref={ref}>
        {loading && <Loader2 size={40} className="animate-spin" />}
      </div>
    </>
  );
}
