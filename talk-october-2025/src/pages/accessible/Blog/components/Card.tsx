interface CardProps {
  title: string;
  description: string;
  alt: string;
  link: string;
  url: string;
}

export default function Card({ title, description, url, alt, link }: CardProps) {
  const ariaLabel = `Read more about ${title}`;
  return (
    <div className="bg-white rounded overflow-hidden w-full">
      <div className="h-40 w-full overflow-hidden">
        <img src={url} alt={alt} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <div className="text-xl text-black font-bold">{title}</div>
        <p className="text-gray-600">{description}</p>
        <a href={link} className="text-blue-600 mt-2" aria-label={ariaLabel}>
          Read More
        </a>
      </div>
    </div>
  );
}
