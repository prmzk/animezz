import { Anime } from "@/types";
import { ArrowRight, Frown, Meh, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookmarkButton from "./bookmark-btn";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const getRatingColor = (score: number) => {
  if (score >= 85) return "green";
  if (score >= 70) return "orange";
  return "red";
};

const getRatingEmoji = (score: number) => {
  if (score >= 85) return <Smile color="green" size={20} />;
  if (score >= 70) return <Meh color="orange" size={20} />;
  return <Frown color="red" size={20} />;
};

export default function AnimeCard({
  anime,
  onBookmarkClick,
}: {
  anime: Anime;
  onBookmarkClick?: () => void;
}) {
  return (
    <div className="flex sm:flex-row flex-col rounded-lg shadow-md overflow-hidden sm:h-[324px]">
      <div className="sm:aspect-[460/649] aspect-[1.5/1] flex-shrink-0 md:min-w-[200px]">
        <div className="h-full relative">
          <Image
            src={anime.coverImage?.large}
            fill
            className="object-cover"
            alt={anime.title?.userPreferred}
          />
        </div>
      </div>

      <div className="p-4 h-full flex-grow flex flex-col">
        <div className="w-full flex items-center gap-4 h-12">
          <h3 className="text-sm font-bold mb-2 line-clamp-2 mr-auto">
            {anime.title?.userPreferred}
          </h3>
          <div className="flex flex-col items-center">
            {getRatingEmoji(anime.averageScore)}
            <p
              className="text-xs font-bold"
              style={{ color: getRatingColor(anime.averageScore) }}
            >
              {anime.averageScore}
            </p>
          </div>
        </div>

        <p className="mb-4 text-xs">
          <span
            style={{ color: anime.coverImage.color }}
            className="font-bold mb-2 text-xs brightness-75"
          >
            {anime.studios?.edges[0]?.node?.name} ({anime.seasonYear || "-"})
          </span>{" "}
          • {anime.format}
          {anime.episodes && ` • ${anime.episodes} Episodes`}
        </p>
        <Separator className="my-2" />
        <p
          className="line-clamp-5 text-xs mb-6"
          dangerouslySetInnerHTML={{
            __html: anime.description ?? "",
          }}
        ></p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {anime.genres?.map(
            (genre, j) =>
              j < 2 && (
                <div
                  className="px-4 py-1 rounded-full border brightness-75"
                  key={j}
                  style={{ borderColor: anime.coverImage.color }}
                >
                  <p
                    className="text-xs"
                    style={{ color: anime.coverImage.color }}
                  >
                    {genre}
                  </p>
                </div>
              )
          )}
        </div>
        <Separator className="mb-2 mt-4" />
        <div className="flex pt-2 justify-end gap-2 flex-wrap">
          <BookmarkButton anime={anime} onBookmarkClick={onBookmarkClick} />
          <Button className="text-xs h-6 px-2 group" asChild variant="link">
            <Link href={`/anime/${anime.id}`}>
              See Detail{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
