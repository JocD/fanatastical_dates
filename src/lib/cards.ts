/**
 * Card definitions for the Adventure Date selector
 */

export type CardDef = {
  id: string;
  title: string;
  subtext: string;
  kind: "journey" | "mode" | "moment" | "transition";
};

export const JOURNEY: CardDef[] = [
  {
    id: "journey_city",
    title: "CITY",
    subtext: "We only have a few hours — let's keep this adventure local",
    kind: "journey",
  },
  {
    id: "journey_outskirts",
    title: "OUTSKIRTS",
    subtext:
      "We can venture outside the city limits — let's see what adventure we can find near the edges of civilization",
    kind: "journey",
  },
  {
    id: "journey_wilds",
    title: "THE WILDS",
    subtext: "Gear up. This adventure isn't for the faint of heart",
    kind: "journey",
  },
];

export const MODE: CardDef[] = [
  {
    id: "mode_kinetic",
    title: "KINETIC",
    subtext: "We should train — keep our skills sharp",
    kind: "mode",
  },
  {
    id: "mode_witnessing",
    title: "WITNESSING",
    subtext: "Let's kick back and find some entertainment in this town",
    kind: "mode",
  },
  {
    id: "mode_creative",
    title: "CREATIVE",
    subtext: "We need to craft some items for the journey ahead",
    kind: "mode",
  },
  {
    id: "mode_problem_solving",
    title: "PROBLEM SOLVING",
    subtext: "We should review our plans and battle strategies",
    kind: "mode",
  },
];

export const MOMENTS: CardDef[] = [
  {
    id: "moment_change_pace",
    title: "Change the Pace",
    subtext: "Faster or slower — decide together.",
    kind: "moment",
  },
  {
    id: "moment_commit_ten",
    title: "Commit for Ten",
    subtext: "Ten more minutes. Then reassess.",
    kind: "moment",
  },
  {
    id: "moment_notice_without_fixing",
    title: "Notice Without Fixing",
    subtext: "Each of us points out one thing we notice. No commentary.",
    kind: "moment",
  },
  {
    id: "moment_third_object",
    title: "Third Object",
    subtext: "Choose something nearby. Talk about that, not us.",
    kind: "moment",
  },
  {
    id: "moment_switch_roles",
    title: "Switch Roles",
    subtext: "The follower leads. The leader follows.",
    kind: "moment",
  },
  {
    id: "moment_add_constraint",
    title: "Add a Constraint",
    subtext: "Pick one modifier for the next 10–15 minutes.",
    kind: "moment",
  },
];

export const TRANSITIONS: CardDef[] = [
  {
    id: "transition_short_rest",
    title: "Short Rest",
    subtext: "Let's take a breather (aka: let's go eat).",
    kind: "transition",
  },
  {
    id: "transition_long_rest",
    title: "Long Rest",
    subtext: "That was a nice day of adventuring. Let's return to camp",
    kind: "transition",
  },
  {
    id: "transition_scroll_gtfo",
    title: "Scroll of GTFO",
    subtext: "We need to get out of here. NOW",
    kind: "transition",
  },
];
