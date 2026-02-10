const Footer = () => {
  return (
    <footer className="relative py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="text-primary font-display font-bold text-xl">C</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">CurrHub</span>
          </div>
          <nav className="flex gap-8 text-sm font-medium">
            {["Home", "Generator", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CurrHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
