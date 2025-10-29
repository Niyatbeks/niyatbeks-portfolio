import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 text-sm">
            © 2025 Niyatbek | {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
