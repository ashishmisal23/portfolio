import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolioData";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Education & Certifications</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A foundation built on engineering and continuous learning.</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <GraduationCap className="text-primary" size={22} />
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <h4 className="mb-1 text-lg font-semibold">{edu.degree}</h4>
                    <p className="mb-2 text-sm text-primary">{edu.field}</p>
                    <p className="mb-3 text-sm text-muted-foreground">{edu.institution}</p>
                    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <span>{edu.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <Award className="text-primary" size={22} />
                Certifications
              </h3>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={cert}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 text-primary">✓</span>
                      <span>{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
