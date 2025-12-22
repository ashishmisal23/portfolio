import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { education, certifications } from "@/data/portfolioData";

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
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2 text-center">
            <span className="text-primary">&lt;</span> Education <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">My academic background</p>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-mono font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-5 card-hover"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary text-sm font-mono mb-2">{edu.field}</p>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar size={12} />
                      <span>{edu.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-mono font-semibold mb-6 flex items-center gap-2">
                <Award className="text-primary" size={24} />
                Certifications
              </h3>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-lg p-5 card-hover"
              >
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={cert}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-muted-foreground">{cert}</span>
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
