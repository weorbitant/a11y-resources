import Blog1 from '../../../../assets/blog/blog-1.webp';
import Blog2 from '../../../../assets/blog/blog-2.webp';
import Blog3 from '../../../../assets/blog/blog-3.webp';
import Blog4 from '../../../../assets/blog/blog-4.webp';
import Card from "./Card";

export default function Content() {
  return (
    <main className="p-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Introduction GPT4"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          url={Blog1}
        />
        <Card
          title="2024 goals"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          url={Blog2}
        />
        <Card
          title="Apple VoiceOver"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          url={Blog3}
        />
        <Card
          title="Best figma plugins"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          url={Blog4}
        />
      </div>
    </main>
  );
}
