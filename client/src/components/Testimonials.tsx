import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "A. B.",
    date: "over 2 years ago",
    rating: 5,
    text:
      "Celeste has been my older child's piano teacher for the last 6.5 years as well as the teacher for my younger child the last 2 years. Both of my kids started learning the piano at age 5 with her. Celeste is a very patient teacher and instills in her students the love of music, besides teaching technique, piano theory and artistry. She is also very familiar with the ABRSM requirements. She is a very dedicated teacher who focuses on making sure the student is progressing well and at the same time enjoying the learning process. We are very fortunate to have found her to teach our children!",
  },
  {
    id: 2,
    name: "Irene T.",
    date: "9 months ago",
    rating: 5,
    text:
      "My daughter has been taking piano lessons with Miss Celeste for the past year to prepare for her ABRSM grade 8 piano exam. Celeste is such an amazing teacher!!! She is extremely talented, patient and encouraging. My daughter loves learning from Celeste. My daughter had originally learned from another teacher and had taken the exam. Unfortunately the results were not satisfactory. We were really fortunate to have gotten to know Celeste through a referral. She helped my daughter correct her technical skills and taught music theory knowledge. My daughter ended up getting a Distinction on her exam. We are truly grateful and highly recommend her!!",
  },
  {
    id: 3,
    name: "Lin C.",
    date: "1 year ago",
    rating: 5,
    text:
      "I have worked with Ms. Chiam for over 6 years now, and she has not only become my piano teacher, but also almost a life mentor for me. Some days when I am feeling overwhelmed or stressed, being able to play piano and learn music with her makes me feel comfortable and grounded. With her, I've learned to not only enjoy but appreciate all sorts of music. I've gotten to learn that music is more than just about playing, but equally about appreciating, listening, and feeling.",
  },
  {
    id: 4,
    name: "Grace S.",
    date: "1 month ago",
    rating: 5,
    text:
      "My 6 year old daughter has been taking piano lessons from Celeste the last year and a half. I have been amazed at my daughter's progress. While Celeste demands excellence and pushes my daughter to be the best she can be, she is also incredibly patient and kind.",
  },
  {
    id: 5,
    name: "Liping G.",
    date: "12/20/20",
    rating: 5,
    text:
      "I attended my son's piano virtual recital today organized by his piano teacher Celeste Chiam. It was amazing to see the progress each of her students made over the years. Celeste has been teaching my son piano for about 6 years and I'm very grateful for her dedication to his music education.",
  },
  {
    id: 6,
    name: "Hannah C.",
    date: "1/4/2023",
    rating: 5,
    text:
      "Celeste demands excellence from her students but she is eternally patient and always kind. She nurtures creativity, resilience, openness to feedback, and discipline. My daughter never leaves a lesson without a smile on her face.",
  },
];

const studentVideoIds = ["J3i4DZYbaMw", "fxGFS-Cr__Y", "TZxsg9K9nYw"];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Student Stories & Highlights
          </h2>
          <p className="text-muted-foreground">
            Voices and Performances from the Studio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Testimonials Carousel */}
          <div className="relative">
            <Quote className="absolute -top-6 -left-6 w-24 h-24 text-primary/10" />

            <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-sm min-h-[420px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {Array.from({ length: testimonials[currentIndex].rating }).map(
                      (_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      )
                    )}
                  </div>

                  <p className="font-serif text-xl md:text-2xl italic mb-8 leading-relaxed">
                    “{testimonials[currentIndex].text}”
                  </p>

                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].date}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                size="icon"
                variant="outline"
                onClick={prev}
                aria-label="Previous testimonial"
                className="rounded-full w-12 h-12"
              >
                <ChevronLeft />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={next}
                aria-label="Next testimonial"
                className="rounded-full w-12 h-12"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          {/* Student Performances */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl flex items-center gap-4">
              Student Performances
              <span className="flex-1 h-px bg-border" />
            </h3>

            {studentVideoIds.map((id) => (
              <div
                key={id}
                className="aspect-video rounded-xl overflow-hidden border bg-black relative"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Student performance"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
