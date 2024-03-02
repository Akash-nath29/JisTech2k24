import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cnanimation(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
