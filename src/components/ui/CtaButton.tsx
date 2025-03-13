interface ctaButtonProps {
  href: string;
  text: string;
  target?: "_blank" | "_self";
  title: string;
  className: string;
}

const CtaButton: React.FC<ctaButtonProps> = ({
  href,
  text,
  target = "_self",
  title,
  className = "",
}) => {
  return (
    <a
      className={`text-lg font-medium font-lexend rounded-xl text-black px-5 py-3 bg-teal-400 hover:bg-cyan-400 transition-colors duration-300 ${className}`}
      href={href}
      target={target}
      title={title}
    >
      {text}
    </a>
  );
};

export default CtaButton;
