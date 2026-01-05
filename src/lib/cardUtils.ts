import { CardDef } from "./cards";

/**
 * Utility to conditionally combine class names
 */
export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Fisher-Yates shuffle algorithm to deal N cards from a deck
 * Optionally exclude specific card IDs
 */
export function dealTwo(deck: CardDef[], excludeIds: string[] = []) {
  const pool = deck.filter((c) => !excludeIds.includes(c.id));
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 2);
}
