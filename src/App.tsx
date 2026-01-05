import React, { useMemo, useState } from "react";
import AdventureDateCardSelector from "./adventure_date_card_selector";
import GreetingScreen from "./components/GreetingScreen";
import { CardDef } from "@/lib/cards";

export default function App() {
  const steps = ["Journey", "Mode", "Summary"] as const;
  const [showGreeting, setShowGreeting] = useState(true);
  const [stepIdx, setStepIdx] = useState(0);
  const [journey, setJourney] = useState<CardDef | null>(null);
  const [mode, setMode] = useState<CardDef | null>(null);

  const progress = useMemo(() => ((stepIdx + 1) / steps.length) * 100, [stepIdx]);

  const canNext =
    (stepIdx === 0 && !!journey) ||
    (stepIdx === 1 && !!mode) ||
    stepIdx === 2;

  const beginAdventure = () => {
    setShowGreeting(false);
  };

  const next = () => {
    if (!canNext) return;
    setStepIdx((s) => Math.min(steps.length - 1, s + 1));
  };

  const prev = () => setStepIdx((s) => Math.max(0, s - 1));

  const resetAll = () => {
    setStepIdx(0);
    setJourney(null);
    setMode(null);
  };

  if (showGreeting) {
    return <GreetingScreen onBegin={beginAdventure} />;
  }

  return (
    <AdventureDateCardSelector
      steps={steps}
      stepIdx={stepIdx}
      journey={journey}
      mode={mode}
      progress={progress}
      canNext={canNext}
      onSetJourney={setJourney}
      onSetMode={setMode}
      onNext={next}
      onPrev={prev}
      onResetAll={resetAll}
    />
  );
}