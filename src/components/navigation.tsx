import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark, Github } from "lucide-react";
import Tooltip from "./ui/tooltip";

export default function Navigation() {
  return (
    <>
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto p-6 py-3 w-full flex justify-between items-center flex-wrap gap-2">
          <div className="flex-shrink-0 w-32 md:w-auto">
            <Link href="/">
              <Image
                src="/animezz.webp"
                height={120 / 3}
                width={593 / 3}
                alt="animezz"
              />
            </Link>
          </div>
          <div className="ml-auto">
            <ul className="flex">
              <li>
                <Button variant="link" asChild>
                  <Link href="/bookmarks" className="text-right">
                    Your Bookmarks{" "}
                    <Bookmark className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Link>
                </Button>
              </li>
              <li>
                <Tooltip tooltipChildren={<p>Visit GitHub</p>}>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/prmzk/animezz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-8"></div>
    </>
  );
}
