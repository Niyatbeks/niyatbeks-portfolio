import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t.contact.form.success,
      description: t.contact.form.successDescription,
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Telegram Card */}
          <Card className="bg-card border border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 md:col-span-2 animate-slide-up">
            <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-glow">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <Button 
                className="w-full bg-gradient-to-r from-secondary to-primary hover:shadow-glow transition-all duration-300 mt-4"
                onClick={() => window.open('https://t.me/niyatbeks', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.contact.telegram}
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card className="bg-card border border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 md:col-span-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input 
                    id="name"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-card-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-card-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea 
                    id="message"
                    placeholder={t.contact.form.message}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border-card-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary via-primary to-accent hover:shadow-glow transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
