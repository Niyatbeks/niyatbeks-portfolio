import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const currentSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 }
  ];

  const learningSkills = ["TypeScript", "Next.js", "UI/UX Design", "Tailwind CSS"];
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.skills.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Skills */}
          <Card className="glass-card border-0 shadow-elegant animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">💻</span>
                {t.skills.currentSkills}
              </h3>
              <div className="space-y-6">
                {currentSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-secondary via-primary to-accent transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Learning Goals */}
          <Card className="glass-card border-0 shadow-elegant animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                {t.skills.learningGoals}
              </h3>
              <div className="flex flex-wrap gap-3">
                {learningSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-gradient-to-r from-secondary/20 to-primary/20 hover:from-secondary/30 hover:to-primary/30 border border-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Future Focus:</span> Building full-stack applications and mastering modern web development practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
