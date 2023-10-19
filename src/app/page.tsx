import AnimeCard from "@/components/anime-card";
import GenreSelect from "@/components/genre-select";
import LoadMoreScroll from "@/components/load-more-scroll";
import { Separator } from "@/components/ui/separator";
import { getClient } from "@/lib/urql-get-client";
import GenresQuery from "@/queries/GenresQuery";
import { AnimeList, GenreList } from "@/types";
import Image from "next/image";
import AnimesQuery from "../queries/AnimesQuery";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { genre: genreParams } = searchParams;
  const { data: animes } = await getClient().query<AnimeList>(
    AnimesQuery(1, genreParams ?? ""),
    {}
  );

  const { data: genres } = await getClient().query<GenreList>(GenresQuery, {});

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex gap-2 py-8 md:mb-20 mb-10">
        <div className="flex flex-col justify-between w-full items-center lg:flex-row gap-10">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl font-bold text-center antialiased">
              Welcome to Animezz
            </h1>
            <p className="text-center">
              Discover your favorite anime and bookmark them!
            </p>
          </div>
          <Image
            className="flex-shrink-0"
            src="/luffy.webp"
            alt="luffy"
            height={250}
            width={500}
          />
        </div>
      </div>
      <Separator className="md:mb-20 mb-10" />
      <div className="flex justify-end">
        <GenreSelect
          genres={genres?.GenreCollection ?? []}
          searchParams={searchParams.genre}
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {animes?.Page.media.map((anime, i) => (
          <AnimeCard anime={anime} key={i} />
        ))}
      </div>

      <LoadMoreScroll />
    </div>
  );
}
