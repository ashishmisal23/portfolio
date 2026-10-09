import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolioData";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Achievements</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Proof of execution across product and engineering work.</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={item?.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Trophy className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item?.title}</h3>
                  <p className="mt-1 text-base leading-7 text-muted-foreground">
                    {item?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
