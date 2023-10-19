import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default async function FallbackPage() {
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
      <p>You are offline!</p>
    </div>
  );
}
