export default function ProjectCard({
  title,
  tags,
  imageAlt,
  imageSrc,
  description,
  link,
}) {
  return (
    <div className="group bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/30 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          data-alt={imageAlt}
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 border border-outline-variant/30 rounded font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-on-surface-variant text-sm line-clamp-2">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          class="mt-5 text-base font-bold flex items-center gap-2 hover:gap-4 transition-all"
        >
          View {title === "Financial Aid Platform" ? "Demo" : "Source Code"}{" "}
          <i
            class="fa-solid fa-arrow-up-right-from-square"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
}
