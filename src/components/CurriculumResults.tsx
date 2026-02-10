import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Target } from "lucide-react";
import type { Curriculum } from "./GeneratorSection";

interface Props {
  curriculum: Curriculum;
}

const CurriculumResults = ({ curriculum }: Props) => {
  const [openSemester, setOpenSemester] = useState<number | null>(0);

  const toggleSemester = (idx: number) => {
    setOpenSemester(openSemester === idx ? null : idx);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(curriculum, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${curriculum.skill}_curriculum.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto mt-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Summary */}
      <div className="glass-card rounded-3xl p-8 mb-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-text">{curriculum.skill}</span> Learning Plan
          </h3>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md flex items-center gap-2">
              <span className="text-muted-foreground">Level:</span>
              <span className="font-semibold text-foreground">{curriculum.level}</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md flex items-center gap-2">
              <span className="text-muted-foreground">Weekly Hours:</span>
              <span className="font-semibold text-foreground">{curriculum.weeklyHours}</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md flex items-center gap-2">
              <span className="text-muted-foreground">Industry:</span>
              <span className="font-semibold text-foreground">{curriculum.industryFocus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Semesters */}
      <div className="space-y-4">
        {curriculum.semesters.map((sem, idx) => (
          <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-primary/30">
            <button
              onClick={() => toggleSemester(idx)}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {sem.semester}
                </div>
                <h4 className="font-display font-semibold text-xl text-foreground">
                  Semester {sem.semester}
                </h4>
                <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                  {sem.courses.length} Courses
                </span>
              </div>
              <ChevronDown
                className={`text-primary transition-transform duration-300 ${openSemester === idx ? "rotate-180" : ""
                  }`}
                size={24}
              />
            </button>

            <motion.div
              initial={false}
              animate={{ height: openSemester === idx ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 space-y-4">
                {sem.courses.map((course, ci) => (
                  <div
                    key={ci}
                    className="rounded-xl p-5 bg-secondary/30 border border-white/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-bold text-lg text-foreground">{course.name}</h5>
                          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {course.code}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full whitespace-nowrap">
                          {course.credits} Credits
                        </span>
                        <div className="text-xs text-muted-foreground mt-1">
                          {course.hoursPerWeek}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {course.topics.map((topic, ti) => (
                        <span
                          key={ti}
                          className="text-xs bg-background/50 text-foreground/80 px-2.5 py-1 rounded-md border border-white/5"
                        >
                          # {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Capstone */}
      <div className="glass-card rounded-2xl p-8 mt-8 border border-accent/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Target size={100} />
        </div>
        <h4 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
          <span className="text-2xl">🎓</span> Capstone Project
        </h4>
        <p className="text-lg text-muted-foreground/90 relative z-10 leading-relaxed">
          {curriculum.capstoneProject}
        </p>
      </div>

      {/* Download */}
      <div className="flex gap-4 justify-center mt-12">
        <button
          onClick={handleDownloadJSON}
          className="group flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all"
        >
          <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
          Download Curriculum JSON
        </button>
      </div>
    </motion.div>
  );
};

export default CurriculumResults;
