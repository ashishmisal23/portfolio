import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Code2, Database, Layers3, Server, Wrench } from "lucide-react";
import { skills } from "@/data/portfolioData";

const skillCategories = [
  { title: "Programming Languages", icon: Code2, items: skills.programming },
  { title: "Frontend Development", icon: Layers3, items: skills.frontend },
  { title: "Backend Development", icon: Server, items: skills.backend },
  { title: "Databases", icon: Database, items: skills.databases },
  { title: "Architecture", icon: Layers3, items: skills.architecture },
  { title: "Cloud & DevOps", icon: Cloud, items: skills.cloudAndDevOps },
  { title: "Development Tools", icon: Wrench, items: skills.tools },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">Technical Skills</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Tools and technologies I use to ship reliable products.</h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <category.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.08 + skillIndex * 0.04 }}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
