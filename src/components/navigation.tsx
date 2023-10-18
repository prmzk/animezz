import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark, Github } from "lucide-react";
import Tooltip from "./ui/tooltip";

export default function Navigation() {
  return (
    <nav>
      <div className="max-w-6xl mx-auto p-6 w-full flex justify-between">
        <Link href="/">
          <Image
            src="/animezz.webp"
            height={120 / 3}
            width={593 / 3}
            alt="animezz"
          />
        </Link>
        <div>
          <ul className="flex gap-2">
            <li>
              <Button variant="link" asChild>
                <Link href="/bookmarks">
                  Your Bookmarks <Bookmark className="ml-2 h-4 w-4" />
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
  );
}
