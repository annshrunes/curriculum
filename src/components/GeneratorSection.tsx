import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import CurriculumResults from "./CurriculumResults";

export interface Course {
  name: string;
  code: string;
  credits: number;
  hoursPerWeek: string;
  description: string;
  topics: string[];
}

export interface Semester {
  semester: number;
  courses: Course[];
}

export interface Curriculum {
  skill: string;
  level: string;
  weeklyHours: string;
  industryFocus: string;
  semesters: Semester[];
  capstoneProject: string;
}

const educationLevels = ["Diploma", "BTech", "Masters", "Certification"];
const semesterOptions = [2, 4, 6, 8];

const GeneratorSection = () => {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [semesters, setSemesters] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");
  const [industryFocus, setIndustryFocus] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Curriculum | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skill || !level || !semesters) return;

    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("generate-curriculum", {
        body: { skill, level, semesters: parseInt(semesters), weeklyHours, industryFocus },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setResult({
        skill,
        level,
        weeklyHours: weeklyHours || "20-25",
        industryFocus: industryFocus || "General Tech",
        semesters: data.semesters || [],
        capstoneProject: data.capstoneProject || `Complete ${skill} Capstone Project`,
      });
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "Failed to generate curriculum. Please try again.";
      toast.error(errorMessage);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setSkill("");
    setLevel("");
    setSemesters("");
    setWeeklyHours("");
    setIndustryFocus("");
    setResult(null);
  };

  return (
    <section id="generator" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-foreground/90">Curriculum Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Design Your <span className="bg-clip-text text-transparent bg-gradient-text">Learning Path</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Customize every aspect of your curriculum with our AI-powered engine
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleGenerate}
          className="max-w-3xl mx-auto glass-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-primary/20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Skill */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Skill / Topic *</label>
              <input
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="e.g., Quantum Computing, Digital Marketing"
                required
                className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/70"
              />
            </div>

            {/* Education Level */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Education Level *</label>
              <div className="relative">
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                  className="w-full appearance-none rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:bg-secondary/70"
                >
                  <option value="" className="bg-background">Select Level</option>
                  {educationLevels.map((l) => (
                    <option key={l} value={l} className="bg-background">{l}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Semesters */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Duration *</label>
              <div className="relative">
                <select
                  value={semesters}
                  onChange={(e) => setSemesters(e.target.value)}
                  required
                  className="w-full appearance-none rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:bg-secondary/70"
                >
                  <option value="" className="bg-background">Select Semesters</option>
                  {semesterOptions.map((s) => (
                    <option key={s} value={s} className="bg-background">
                      {s} Semesters ({s / 2} {s / 2 === 1 ? "year" : "years"})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Weekly Hours */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Weekly Hours <span className="text-muted-foreground font-normal">(Optional)</span></label>
              <input
                type="text"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(e.target.value)}
                placeholder="e.g., 20-25"
                className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all hover:bg-secondary/70"
              />
            </div>

            {/* Industry Focus */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Industry Focus <span className="text-muted-foreground font-normal">(Optional)</span></label>
              <input
                type="text"
                value={industryFocus}
                onChange={(e) => setIndustryFocus(e.target.value)}
                placeholder="e.g., AI, Healthcare"
                className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all hover:bg-secondary/70"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? "Generating Curriculum..." : "Generate Syllabus"}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-8 py-4 rounded-xl border border-border bg-secondary/30 text-foreground font-semibold hover:bg-secondary/80 transition-colors"
            >
              Clear
            </button>
          </div>
        </motion.form>

        {result && <CurriculumResults curriculum={result} />}
      </div>
    </section>

  );
};

export default GeneratorSection;
