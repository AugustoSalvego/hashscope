import type { HashMode } from "@/types/hash";
import type { Language } from "@/types/language";

export const TABLE_SIZE = 10;
export const DEFAULT_LANGUAGE: Language = "pt";
export const DEFAULT_MODE: HashMode = "separate-chaining";
export const HASH_FORMULA = "hash(key) = Math.abs(key) % 10";

export const MEMORY_ADDRESSES = Array.from(
  { length: TABLE_SIZE },
  (_, index) => `ADDR 0x${index.toString(16).padStart(2, "0").toUpperCase()}`,
);
