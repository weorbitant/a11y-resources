export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xl font-bold border-b-2 border-slate-600 leading-8 mb-4">
        {title}
      </div>
      {children ?? <></>}
    </div>
  );
}
