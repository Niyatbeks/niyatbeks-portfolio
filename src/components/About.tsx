import aboutImage from "@/assets/about-illustration.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a frontend development student learning HTML, CSS, JavaScript, and React. 
              I love turning creative ideas into responsive and user-friendly web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently exploring the world of web development, focusing on creating 
              beautiful interfaces and seamless user experiences. Every project is an 
              opportunity to learn something new and push my skills further.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card rounded-3xl p-2 shadow-elegant">
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
