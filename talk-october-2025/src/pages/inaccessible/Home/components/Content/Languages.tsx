import LANGUAGES from '../../../../../data/languages';
import { Badge } from '../Badge';
import Section from '../Section';

export default function Languages() {
  return (
    <Section title="Languages">
      <div className="flex flex-wrap gap-1">
        {LANGUAGES.map((language) => (
          <Badge
            key={language.name}
            content={
              <>
                <img
                  className="mr-1"
                  src={language.imagePath}
                  width={25}
                  height={25}
                />
                <span>
                  {language.name} ({language.level})
                </span>
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
}
