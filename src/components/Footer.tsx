import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 text-sm">
            © 2025 Niyatbek | Built with 
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> 
            and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
