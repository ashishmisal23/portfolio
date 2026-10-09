import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Solutions built across web, mobile, and backend platforms.</h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="border-b border-border bg-slate-950/40 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Folder className="text-primary" size={22} />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`} className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-primary">
                          <Github size={17} />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-primary">
                          <ExternalLink size={17} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                </div>

                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
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
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={18} />
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
