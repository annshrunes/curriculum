import { motion } from "framer-motion";
import { Brain, Zap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-foreground/90">Our Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Revolutionizing <span className="bg-clip-text text-transparent bg-gradient-text">Education Design</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            CurrHub uses advanced AI to bridge the gap between industry skills and academic curricula.
            We empower educators to create structured, relevant, and comprehensive learning paths in minutes, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Brain, title: "AI Intelligence", desc: "Large Language Models analyzed thousands of course structures to optimize learning flows." },
            { icon: Zap, title: "Instant Generation", desc: "Create full semester-wise syllabi with learning outcomes and topics in seconds." },
            { icon: Target, title: "Precision Tailoring", desc: "Customize for any education level, duration, or specific industry focus." },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto mt-20 glass-card rounded-3xl p-8 sm:p-12 border border-primary/20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Zap size={100} />
          </div>

          <h3 className="font-display font-bold text-2xl mb-8 text-center">Why Educators Choose CurrHub</h3>
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex gap-4 items-start">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              <div>
                <strong className="block text-foreground mb-1">Time Efficiency</strong>
                <p className="text-sm text-muted-foreground">Reduce curriculum planning time by 95%</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
              <div>
                <strong className="block text-foreground mb-1">Industry Relevance</strong>
                <p className="text-sm text-muted-foreground">Keep pace with rapidly evolving tech landscape</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div>
                <strong className="block text-foreground mb-1">Standardization</strong>
                <p className="text-sm text-muted-foreground">Ensure consistent quality across courses</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <div>
                <strong className="block text-foreground mb-1">Full Ownership</strong>
                <p className="text-sm text-muted-foreground">Export as JSON/PDF and edit as needed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
