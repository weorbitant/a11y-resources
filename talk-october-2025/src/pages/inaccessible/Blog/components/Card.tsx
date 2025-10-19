interface CardProps {
  title: string;
  description: string;
  url: string;
}

export default function Card({ title, description, url }: CardProps) {
  return (
    <div className="bg-white rounded overflow-hidden w-full">
      <div className="h-40 w-full overflow-hidden">
        <img src={url} alt={url} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <div className="text-xl text-black font-bold">{title}</div>
        <p className="text-gray-600">{description}</p>
        <a href="blog-post-1-url" className="text-blue-500 mt-2">Read More</a>
      </div>
    </div>
  );
}
