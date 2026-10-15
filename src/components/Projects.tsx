import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder, Github } from "lucide-react";
import { personalInfo, projects } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Featured Projects
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Solutions built across web, mobile, and backend platforms.
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Compact Header */}
                <div className="border-b border-border bg-slate-950/40 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Folder className="text-primary" size={18} />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Github size={15} />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                {/* Compact Content */}
                <div className="space-y-3 p-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-5 text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Button variant="outline" size="default" asChild>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={16} />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
