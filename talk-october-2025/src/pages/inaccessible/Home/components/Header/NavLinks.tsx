import NAV_LINKS from '../../../../../data/nav-links';

export default function NavLinks() {
  return (
    <div className="flex justify-center gap-4 mt-4 opacity-60">
      {NAV_LINKS.map((link) => (
        <a key={link.name} href={link.url} target="_blank">
          <img src={link.imagePath} width={40} height={40} />
        </a>
      ))}
    </div>
  );
}
