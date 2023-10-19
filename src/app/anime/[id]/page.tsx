import BookmarkButton from "@/components/bookmark-btn";
import { Separator } from "@/components/ui/separator";
import { getClient } from "@/lib/urql-get-client";
import { getRatingColor, getRatingEmoji } from "@/lib/utils";
import AnimeDetailQuery from "@/queries/AnimeDetailQuery";
import { Anime, AnimeDetail } from "@/types";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  // fetch data
  const { data } = await getClient().query<AnimeDetail>(
    AnimeDetailQuery(id),
    {}
  );

  return {
    title: data?.Media.title.userPreferred,
    description: data?.Media.description,
  };
}
export default async function AnimeDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = await getClient().query<AnimeDetail>(
    AnimeDetailQuery(id),
    {}
  );

  return (
    <div className="pb-40">
      <Head>
        <title>{data?.Media.title?.userPreferred}</title>
      </Head>
      <div className="w-full">
        <div className="w-full aspect-[19/4] relative">
          <Image src={data?.Media.bannerImage ?? ""} fill alt="banner" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row max-w-6xl mx-auto">
        <div className="relative left-8 bottom-20">
          <div className="aspect-[460/649] flex-shrink-0 w-[200px] rounded-lg overflow-hidden">
            <div className="h-full relative">
              <Image
                src={data?.Media.coverImage?.large ?? ""}
                fill
                className="object-cover"
                alt={data?.Media.title?.userPreferred ?? "anime"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="p-4 h-full flex-grow flex flex-col sm:ml-12">
            <div className="w-full flex items-center gap-4 mb-6">
              <div className="mr-auto">
                <h3 className="text-2xl font-bold mb-2">
                  {data?.Media.title?.userPreferred}
                </h3>
                <h3 className="text-lg">{data?.Media.title?.romaji}</h3>
                <h3 className="text-lg">{data?.Media.title?.english}</h3>
              </div>

              <div className="flex flex-col items-center">
                {getRatingEmoji(data?.Media.averageScore ?? 0)}
                <p
                  className="text-md font-bold"
                  style={{
                    color: getRatingColor(data?.Media.averageScore ?? 0),
                  }}
                >
                  {data?.Media.averageScore}
                </p>
              </div>
            </div>

            <p className="mb-4 text-md">
              <span
                style={{ color: data?.Media.coverImage.color }}
                className="font-bold mb-2 text-md brightness-75"
              >
                {data?.Media.studios?.edges[0]?.node?.name} (
                {data?.Media.seasonYear || "-"})
              </span>{" "}
              • {data?.Media.format}
              {data?.Media.episodes && ` • ${data?.Media.episodes} Episodes`}
            </p>
            <div className="flex pt-2 justify-end gap-2 flex-wrap">
              <BookmarkButton anime={data?.Media as Anime} />
            </div>
            <Separator className="my-8" />
            <p
              className="text-md mb-6"
              dangerouslySetInnerHTML={{
                __html: data?.Media.description ?? "",
              }}
            ></p>
            <div className="flex gap-2 flex-wrap mt-auto">
              {data?.Media.genres?.map((genre, j) => (
                <div
                  className="px-4 py-1 rounded-full border brightness-75"
                  key={j}
                  style={{ borderColor: data?.Media.coverImage.color }}
                >
                  <p
                    className="text-md"
                    style={{ color: data?.Media.coverImage.color }}
                  >
                    {genre}
                  </p>
                </div>
              ))}
            </div>
            <Separator className="my-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
