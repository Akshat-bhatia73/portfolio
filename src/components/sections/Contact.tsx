import { personal } from "@/data/resume";
import { sectionVariants } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  Copy,
  CopyCheck,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const reduceMotion = useReducedMotion();
  const links = [
    { label: personal.email, href: `mailto:${personal.email}`, icon: Mail },
    { label: "Book a Call", href: personal.bookCallUrl, icon: Calendar },
    { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
    { label: "GitHub", href: personal.github, icon: Github },
  ];

  const handleCopy = async () => {
    if (copied) return;
    const res = await fetch("/llms.txt");
    const text = await res.text();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="shine-surface glass-shell interactive-card rounded-2xl p-6 sm:p-10">
        <p className="font-mono text-xs uppercase text-[var(--color-muted)]">
          05 / Contact
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none">
          Contact
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted-strong)]">
          {personal.location}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              className="mechanical-button"
              href={href}
              key={href}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              target={href.startsWith("http") ? "_blank" : undefined}
            >
              <Icon size={16} strokeWidth={1.6} /> {label}
            </a>
          ))}
          <button
            className="mechanical-button cursor-pointer"
            onClick={() => {
              void handleCopy();
            }}
          >
            {copied ? (
              <>
                <CopyCheck size={16} strokeWidth={1.6} /> Copied!
              </>
            ) : (
              <>
                <Copy size={16} strokeWidth={1.6} /> Copy Markdown
              </>
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
