import SocialButtons from "@/components/ui/SocialButtons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>© {currentYear} - Crafted with ☕ by Jorge Araya</div>
          <div>
            <SocialButtons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
