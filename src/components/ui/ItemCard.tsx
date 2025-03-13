import type { DevtoPost } from "@/types/types";
import CtaButton from "./CtaButton";

const ItemCard: React.FC<DevtoPost> = ({
  title,
  description,
  date,
  image,
  url,
  tags,
}) => {
  return (
    <div className="bg-slate-800/60 rounded-xl overflow-hidden shadow-lg">
      <a href={url} target="_blank">
        <img className="w-full min-h-[200px] object-cover object-custom-center" src={image} />
      </a>
      <div className="flex flex-col items-start gap-3 px-6 py-6">
        <span className="font-lexend">{date}</span>
        {tags && (
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span
                className="inline-flex items-center rounded-md bg-teal-600/20 px-2 py-1 text-xs font-medium text-teal-400 ring-1 ring-inset ring-teal-500/10"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a href={url} target="_blank">
          <h3 className="font-lexend font-bold text-xl hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
        </a>
        <p className="text-white text-base">{description}</p>
        <CtaButton
          href={url}
          title={title}
          text="Read more"
          className="font-normal shrink-0 w-auto inline-flex"
        />
      </div>
    </div>
  );
};

export default ItemCard;
