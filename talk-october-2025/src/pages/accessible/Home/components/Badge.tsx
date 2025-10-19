export function Badge({ content }: { content: string | React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm px-2 py-1 ring-1 ring-inset ring-slate-600">
      {content}
    </span>
  );
}
