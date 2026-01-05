import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GreetingScreenProps {
  onBegin: () => void;
}

export default function GreetingScreen({ onBegin }: GreetingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-25 to-amber-100 text-amber-900 flex items-center justify-center px-4" style={{
      backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(217, 119, 6, 0.03) 2px, rgba(217, 119, 6, 0.03) 4px),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(217, 119, 6, 0.03) 2px, rgba(217, 119, 6, 0.03) 4px)
      `
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        {/* Decorative element */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-8 inline-block"
        >
          <div className="w-16 h-16 border-2 border-transparent border-t-amber-700 border-r-amber-700 rounded-full opacity-40"></div>
        </motion.div>

        {/* Main content */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Hi Lyanne
        </h1>

        <p className="text-xl md:text-2xl text-amber-800 mb-6 leading-relaxed">
          I've got a few options for adventuring this weekend, but I need your help with deciding what to lock into.
        </p>

        <p className="text-lg text-amber-700 mb-12">
          In honor of your Stranger Things marathon...
        </p>

        <p className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-12">
          Welcome to Hellfire Club
        </p>

        {/* Call to action */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onBegin}
            size="lg"
            className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white text-lg px-8 inline-flex items-center"
          >
            Let's decide <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Subtle hint */}
        <p className="text-amber-700 text-sm mt-12">
          Two quick choices
        </p>
      </motion.div>
    </div>
  );
}
