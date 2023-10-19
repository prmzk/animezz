import { type ClassValue, clsx } from "clsx";
import { Frown, Meh, Smile } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getRatingColor = (score: number) => {
  if (score >= 85) return "green";
  if (score >= 70) return "orange";
  return "red";
};

export const getRatingEmoji = (score: number) => {
  if (score >= 85) return <Smile color="green" size={20} />;
  if (score >= 70) return <Meh color="orange" size={20} />;
  return <Frown color="red" size={20} />;
};
