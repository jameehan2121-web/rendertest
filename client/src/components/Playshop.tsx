import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/* ✅ IMPORT ASSET (Vite-safe) */
import playshopBg from "@/assets/generated_images/abstract_creative_workshop_background.png";

const CAL_BOOKING_URL = "https://cal.com/james-rxcvpp";

const quotes = [
  { text: "Odd how the creative power at once brings the whole universe to order.", author: "Virginia Woolf" },
  { text: "The true sign of intelligence is not knowledge, but imagination.", author: "Albert Einstein" },
  { text: "Creativity is the power to connect the seemingly unconnected.", author: "William Plomer" },
  { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
  { text: "Your mind, emotions, and body are instruments, and the way you align and tune them determines how well you play life.", author: "Harbhajan Singh / Yogi Bhajan" },
  { text: "Wellness is a state of mind, body, and spirit. When the three are in alignment, you feel balanced and energized.", author: "Donna Karan" },
];

export default function Playshop() {
  const [currentQuote, setCurrentQuote] = useState(0);

  return (
    <section id="playshop" className="relative py-32 overflow-hidden bg-secondary/10">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src={playshopBg}
          alt="Creative Playshop Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
            The Signature Experience
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground">
            Creative Rejuvenation Playshop
          </h2>
        </div>

        {/* ===== Description Card ===== */}
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-border shadow-sm mb-20 text-center">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />

          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium mb-6">
              Creativity and play connect us to ourselves; we flow and glow with vitality when body, mind & spirit are aligned.
            </p>

            <p className="mb-6">
              Creative Rejuvenation Playshop provides a fun immersive experience of life force activation,
              refreshing movements & dance, creative expressions & delightful live music, led by performing artists and coaches.
            </p>

            <p className="mb-8">
              Be it for wellness, relaxation, or productivity, this is an invitation to awaken creativity,
              integrate masculine and feminine energies, and feel galvanized by joyful artistic flow.
            </p>
          </div>

          {/* ===== Playshop Options ===== */}
          <div className="bg-secondary/20 rounded-xl p-6 mt-8">
            <h4 className="font-serif text-xl mb-4 text-foreground text-center">
              Customized Playshop Experiences
            </h4>

            <ul className="space-y-2 mb-6 max-w-md mx-auto">
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Small Session (1–2 hours)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Full Day Experience
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Full Day with Live Music
              </li>
            </ul>

            <div className="text-center">
              <a
                href="#contact?type=playshop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors uppercase tracking-wider text-xs"
              >
                <Mail className="w-4 h-4" />
                Email for Details & Booking
              </a>
            </div>
          </div>
        </div>

        {/* ===== Coaching Section ===== */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/20 p-8 md:p-12 rounded-2xl border border-primary/20 shadow-lg mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">
              Creativity Consultation & Coaching
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Creative Block Resolution
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Artistic Vision Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Mindfulness & Flow States
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Work-Life Creative Balance
            </li>
          </ul>
        </div>

        {/* ===== Quotes Carousel ===== */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-center mb-10 text-foreground">
            Words of Inspiration
          </h3>

          <div className="bg-background border border-primary/20 rounded-2xl p-10 shadow-lg relative text-center min-h-[250px]">
            <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  “{quotes[currentQuote].text}”
                </p>
                <p className="text-primary font-medium uppercase tracking-wider text-sm">
                  — {quotes[currentQuote].author}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-8 justify-center">
              <Button
                size="icon"
                onClick={() =>
                  setCurrentQuote((q) => (q - 1 + quotes.length) % quotes.length)
                }
              >
                <ChevronLeft />
              </Button>
              <Button
                size="icon"
                onClick={() =>
                  setCurrentQuote((q) => (q + 1) % quotes.length)
                }
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
