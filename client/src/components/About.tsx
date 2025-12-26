import { motion } from "framer-motion";
import { Award, GraduationCap, Music, Heart, Brain, Sparkles, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import your image from src/assets
import yellowDress from "@/assets/00345243-26E2-42DD-B766-3E0D6252ABC7_4_5005_c_1764024477904.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="aspect-[3/4] max-w-md w-full bg-muted overflow-hidden rounded-2xl border-4 border-purple-300/50 relative z-10">
              <img
                src={yellowDress} // ✅ imported image
                alt="Celeste Chiam Portrait"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs defaultValue="biography" className="w-full">
              {/* ...TabsList and TabsContent stay unchanged */}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
