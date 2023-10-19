"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function GenreSelect({
  genres,
  searchParams,
}: {
  genres: string[];
  searchParams: string;
}) {
  const router = useRouter();
  return (
    <div>
      <Select
        onValueChange={(genre) => {
          if (genre === "All") router.push("/", { scroll: false });
          else router.push(`/?genre=${genre}`, { scroll: false });
        }}
        defaultValue={searchParams}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="max-h-[300px]">
            <SelectItem value="All" className="capitalize">
              All item
            </SelectItem>
            {genres.map((genre, i) => (
              <SelectItem key={i} value={genre} className="capitalize">
                {genre}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
