import Blog1 from '../../../../assets/blog/blog-1.webp';
import Blog2 from '../../../../assets/blog/blog-2.webp';
import Blog3 from '../../../../assets/blog/blog-3.webp';
import Blog4 from '../../../../assets/blog/blog-4.webp';
import Card from "./Card";

export default function Content() {
  return (
    <main className="p-4 md:p-0">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none">
        <li>
          <Card
            title="Introduction GPT4"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            url={Blog1}
            alt="Monitor with OpenAI GPT4 website"
            link="/blog/gpt4-introduction"
          />
        </li>
        <li>
          <Card
            title="2024 goals"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            url={Blog2}
            alt="Notebook one pencil and one tablet"
            link="/blog/2024-goals"
          />
        </li>
        <li>
          <Card
            title="Apple VoiceOver"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            url={Blog3}
            alt="An iphone with VoiceOver enabled"
            link="/blog/apple-voiceover"
          />
        </li>
        <li>
          <Card
            title="Best figma plugins"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            url={Blog4}
            alt="A laptop with Figma opened"
            link="/blog/best-figma-plugins"
          />
        </li>
      </ul>
    </main>
  );
}
