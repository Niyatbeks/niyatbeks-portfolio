import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@/assets/about-illustration.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t.about.description}
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-card-border rounded-3xl p-2 shadow-elegant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <img 
                src={aboutImage} 
                alt="Developer workspace" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
