import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const ProjectItem: React.FC<Project> = ({
  title,
  image,
  link,
  technologies,
  description,
}) => {
  return (
    <div className="bg-slate-800/60 rounded-xl overflow-hidden shadow-lg relative group">
      <Image
        className="w-full min-h-[200px] object-cover"
        src={image}
        alt={title}
        width={300}
        height={300}
      ></Image>
      <div className="opacity-0 group-hover:opacity-100 absolute top-0 bottom-0 w-full backdrop-blur-sm bg-slate-900/90 border-2 border-teal-400 rounded-xl flex flex-col items-start justify-between gap-3 px-6 py-6 z-10 transition-opacity duration-200">
        <div>
          <h3 className="font-lexend font-bold text-xl md:text-2xl">{title}</h3>
          {/*<p className="hidden md:block">{description}</p>*/}
          {technologies && (
            <div className="flex flex-wrap gap-2 mt-3">
              {technologies.map((tech, index) => (
                <span
                  className="inline-flex items-center rounded-md bg-teal-600/20 px-3 py-1 text-xs md:text-sm font-medium text-teal-400 ring-1 ring-inset ring-teal-500/10"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <Link
            href={link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-sm md:text-lg text-teal-400 font-bold font-lexend underline"
          >
            View website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
