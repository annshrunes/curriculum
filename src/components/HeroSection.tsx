import { motion } from "framer-motion";
import { Zap, Target, BookOpen } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Generate comprehensive syllabi in seconds with AI-powered intelligence",
  },
  {
    icon: Target,
    title: "Precision Focused",
    desc: "Create industry-aligned curricula tailored to your specific needs",
  },
  {
    icon: BookOpen,
    title: "Structured Learning",
    desc: "Semester-wise organization with courses, topics, and credits",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-background to-background" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-foreground/90">✨ AI-Powered Course Generation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 tracking-tight">
            Transform Skills into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-text drop-shadow-sm">
              Mastery
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate comprehensive, industry-aligned university curricula in seconds.
            Powered by advanced AI to structure learning paths from beginner to expert.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#generator"
              className="group relative inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-glow"
            >
              Start Generating
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 hover:bg-primary/5 text-foreground font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-8 text-center hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <f.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
