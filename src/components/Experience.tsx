import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { experience } from "@/data/portfolioData";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Professional Experience</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A focused, product-minded development journey.</h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative space-y-6">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

              {experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}
                >
                  <div className="absolute left-3 h-3 w-3 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-2 text-primary">
                      <BriefcaseBusiness size={18} />
                      <span className="text-sm font-semibold uppercase tracking-[0.18em]">{exp.company}</span>
                    </div>

                    <h3 className="mb-3 text-2xl font-semibold">{exp.role}</h3>

                    <div className="mb-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2"><CalendarDays size={15} /> {exp.duration}</span>
                      <span className="inline-flex items-center gap-2"><MapPin size={15} /> {exp.location}</span>
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
