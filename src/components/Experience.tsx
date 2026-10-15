import { motion, useInView } from "framer-motion";
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
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Professional Experience
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              A focused, product-minded development journey.
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-4">
              {/* Timeline */}
              <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

              {experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -25 : 25,
                  }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative pl-10 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-[calc(50%+1.5rem)]"
                      : "md:pl-[calc(50%+1.5rem)]"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[11px] top-5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

                  {/* Compact Experience Card */}
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <BriefcaseBusiness size={15} />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold leading-snug">
                      {exp.role}
                    </h3>

                    <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {exp.duration}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs leading-5 text-muted-foreground">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
