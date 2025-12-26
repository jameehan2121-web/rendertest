import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Heart,
  Target,
  ChevronLeft,
  ChevronRight,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CAL_BOOKING_URL = "https://cal.com/james-rxcvpp";

export default function Services() {
  const [pianoSlide, setPianoSlide] = useState(0);

  const nextPianoSlide = () => setPianoSlide(1);
  const prevPianoSlide = () => setPianoSlide(0);

  return (
    <section id="piano" className="py-24 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        {/* Intro / Philosophy */}
        <div id="studio-widmung" className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>Heart-Centered Education</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-foreground">
            Studio Widmung
          </h2>

          <p className="text-xl text-muted-foreground font-light italic mb-8">
            "Dedication"
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Inspired by Robert Schumann's song to his wife Clara, Celeste refers
            to her studio as <strong>Studio Widmung</strong>. Parallel to
            Schumann's declaration of love, Celeste is dedicated to her life's
            purpose of igniting creativity, awakening artistic spirits, and
            empowering people through music.
          </p>
        </div>

        {/* Piano Coaching */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl md:text-4xl mb-6">
              Private Piano Coaching
            </h3>

            <div className="relative min-h-[420px]">
              <AnimatePresence mode="wait">
                {pianoSlide === 0 ? (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="prose prose-lg text-muted-foreground mb-6">
                      <p>
                        Dr. Celeste Chiam believes that{" "}
                        <strong>
                          all students possess musical potential
                        </strong>
                        . Lessons are customized to each individual's pace and
                        capacity.
                      </p>
                      <p>
                        Her warm engagement and structured methodology produce
                        optimal growth with a thoughtful balance of challenge
                        and encouragement.
                      </p>
                    </div>

                    <div className="bg-card border border-border p-6 rounded-xl mb-8">
                      <h4 className="font-serif text-xl mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        The Curriculum
                      </h4>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Keyboard Technique
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Music Theory & History
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Musicality
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Aural Training
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm italic text-muted-foreground">
                      Private lessons are offered by referral only as
                      short-term, goal-driven intensives.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="offerings"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="bg-card border border-border p-6 rounded-xl mb-8">
                      <h4 className="font-serif text-xl mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Focused Offerings
                      </h4>

                      <ul className="space-y-4 text-sm">
                        <li>
                          <strong>Performance Coaching</strong> — $150/hr
                        </li>
                        <li>
                          <strong>Technique Mastery</strong> — $180/hr
                        </li>
                        <li>
                          <strong>Small Group Masterclasses</strong> — $90/hr
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <a
                        href="#contact?type=lesson"
                        className="px-4 py-2 bg-foreground text-background rounded-full text-xs uppercase tracking-wider flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Inquire
                      </a>

                      <a
                        href="https://share.google/b9ScORPM3nPhuRQHG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border rounded-full text-xs uppercase tracking-wider flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        Recommended Book
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prevPianoSlide}
                  disabled={pianoSlide === 0}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={nextPianoSlide}
                  disabled={pianoSlide === 1}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/assets/IMG_0731_1766432484455-lBM7VaGt.jpeg"
                alt="Piano Keys Artistic"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-8 left-8 text-cyan-100">
                <p className="font-serif italic mb-2">
                  "To send light into the darkness of men's hearts — such is the
                  duty of the artist."
                </p>
                <p className="text-xs uppercase tracking-widest">
                  — Robert Schumann
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
