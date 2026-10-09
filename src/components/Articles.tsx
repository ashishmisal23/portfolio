import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "@/data/portfolioData";

const Articles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resources" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Articles & Resources</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Learning resources and technical content.</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <BookOpen className="text-primary" size={18} />
                  </div>
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-secondary-foreground">
                    {article.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{article.description}</p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Visit resource
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
