export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-bold border-b-2 border-slate-600 leading-8 mb-4">
        {title}
      </h2>
      {children ?? <></>}
    </section>
  );
}
