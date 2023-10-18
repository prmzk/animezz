import { AnimeList } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AnimesQuery from "../queries/AnimesQuery";
import { getClient } from "@/lib/urql-get-client";
import LoadMoreScroll from "@/components/load-more-scroll";
import { Frown, Meh, Smile } from "lucide-react";
import AnimeCard from "@/components/anime-card";
import { Separator } from "@/components/ui/separator";

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

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { data } = await getClient().query<AnimeList>(
    AnimesQuery(searchParams.page || 1),
    {}
  );
  return (
    <div>
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
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {data?.Page.media.map((anime, i) => (
          <AnimeCard anime={anime} key={i} />
        ))}
      </div>

      <LoadMoreScroll />
    </div>
  );
}
