import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "uz" as const, flag: "🇺🇿", label: "O'zbek" },
    { code: "ru" as const, flag: "🇷🇺", label: "Русский" },
    { code: "en" as const, flag: "🇬🇧", label: "English" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold gradient-text">Niyatbek</div>
        
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-muted rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === lang.code
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
