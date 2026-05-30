import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/data/resume";
import { sectionVariants } from "@/lib/motion";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const links = [
    { label: personal.email, href: `mailto:${personal.email}`, icon: Mail },
    { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
    { label: "GitHub", href: personal.github, icon: Github },
  ];

  return (
    <motion.section id="contact" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-10 [border-radius:18px]">
        <h2 className="text-[clamp(2.25rem,6vw,4.625rem)] font-black leading-[0.9]">Contact</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted-strong)]">{personal.location}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <motion.a
              whileHover={{ y: -2 }}
              className="inline-flex min-h-12 items-center gap-2 rounded-[0_18px_18px_18px] border border-[var(--color-line)] bg-[rgba(242,234,215,0.06)] px-5 font-black text-[var(--color-ink)]"
              href={href}
              key={href}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              target={href.startsWith("http") ? "_blank" : undefined}
            >
              <Icon size={18} /> {label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
