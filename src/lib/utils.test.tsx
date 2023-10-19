import { cva } from "class-variance-authority";
import { cn, getRatingColor } from "./utils";

describe("Test: Rating coloring", () => {
  test("Good rating", () => {
    const color = getRatingColor(99);

    expect(color).toBe("green");
  });

  test("Bad rating", () => {
    const color = getRatingColor(40);

    expect(color).toBe("red");
  });
});

describe("Test: Tailwind class naming", () => {
  const variants = cva("text-lg", {
    variants: {
      variant: {
        default: "default-variant",
        variant1: "variant1",
      },
      size: {
        default: "default-size",
        big: "size-big",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  test("Defaults", () => {
    const finalClass = cn(variants({ variant: "default", size: "default" }));
    expect(finalClass).toBe("text-lg default-variant default-size");
  });

  test("Variants", () => {
    const finalClass = cn(
      variants({
        variant: "variant1",
        size: "big",
        className: "addition-classname lule",
      })
    );
    expect(finalClass).toBe(
      "text-lg variant1 size-big addition-classname lule"
    );
  });

  test("Unspecified", () => {
    const finalClass = cn(variants({}));
    expect(finalClass).toBe("text-lg default-variant default-size");
  });
});
