import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CardTile } from "@/components/CardTile";
import { JOURNEY, MODE, CardDef } from "@/lib/cards";
import { IMAGE_URLS } from "@/lib/config";

/**
 * Presentational component for Adventure Date Card Selector
 * All state management is handled by the parent (App.tsx)
 */

interface AdventureDateCardSelectorProps {
  steps: readonly string[];
  stepIdx: number;
  journey: CardDef | null;
  mode: CardDef | null;
  progress: number;
  canNext: boolean;
  onSetJourney: (card: CardDef) => void;
  onSetMode: (card: CardDef) => void;
  onNext: () => void;
  onPrev: () => void;
  onResetAll: () => void;
}

export default function AdventureDateCardSelector(props: AdventureDateCardSelectorProps) {
  const {
    steps,
    stepIdx,
    journey,
    mode,
    progress,
    canNext,
    onSetJourney,
    onSetMode,
    onNext,
    onPrev,
    onResetAll,
  } = props;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-amber-100 to-yellow-200" style={{
      backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(217, 119, 6, 0.04) 2px, rgba(217, 119, 6, 0.04) 4px),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(217, 119, 6, 0.04) 2px, rgba(217, 119, 6, 0.04) 4px)
      `
    }}>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-amber-900">
            Choose Your Own Adventure
          </h1>
        </header>

        {/* <div className="mb-8 flex flex-wrap justify-center gap-2">
          <div className="w-64">
            <Progress value={progress} />
          </div>
        </div> */}

          <AnimatePresence mode="wait">
            {stepIdx === 0 && (
              <motion.div
                key="step-journey"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-2xl bg-white px-12 py-8 shadow-lg text-center">
                  <h2 className="text-2xl font-serif font-bold text-amber-900">Journey</h2>
                  <p className="mt-2 text-amber-800">
                    How far are we ranging today?
                  </p>
                  <div className="mt-8 grid gap-8 md:grid-cols-3">
                    {JOURNEY.map((c) => (
                      <CardTile
                        key={c.id}
                        def={c}
                        selected={journey?.id === c.id}
                        onSelect={() => onSetJourney(c)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {stepIdx === 1 && (
              <motion.div
                key="step-mode"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-2xl bg-white px-12 py-8 shadow-lg text-center">
                  <h2 className="text-2xl font-serif font-bold text-amber-900">Modus</h2>
                  <p className="mt-2 text-amber-800">
                    What type of activity are we doing?
                  </p>
                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {MODE.map((c) => (
                      <CardTile
                        key={c.id}
                        def={c}
                        selected={mode?.id === c.id}
                        onSelect={() => onSetMode(c)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {stepIdx === 2 && (
              <motion.div
                key="step-summary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-2xl bg-white px-12 py-8 shadow-lg text-center">
                  <h2 className="text-2xl font-serif font-bold text-amber-900">Here's Your Adventure</h2>
                  <p className="mt-2 text-amber-800">
                    Your selections:
                  </p>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    {/* Journey Card */}
                    {journey && (
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={IMAGE_URLS[journey.id]}
                          alt={journey.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}

                    {/* Mode Card */}
                    {mode && (
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={IMAGE_URLS[mode.id]}
                          alt={mode.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-10 rounded-lg bg-amber-50 p-6 border border-amber-200 text-center">
                    <div className="text-lg font-semibold text-amber-900 mb-3">Next Step</div>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Screenshot this screen and send it to me, or just tell me what you chose:
                    </p>
                    <p className="text-sm text-amber-800 font-bold mt-3">
                      {journey ? journey.title : "Journey"} + {mode ? mode.title : "Mode"}
                    </p>
                    <p className="text-xs text-amber-700 mt-4 italic">
                      Once I hear back, we can lock it in and get started!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        <div className="mt-12 flex justify-center gap-3">
          <Button variant="secondary" onClick={onPrev} disabled={stepIdx === 0}>
            Back
          </Button>
          <Button onClick={onNext} disabled={!canNext}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
