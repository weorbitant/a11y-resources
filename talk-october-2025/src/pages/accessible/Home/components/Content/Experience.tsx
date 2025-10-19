import EXPERIENCE from '../../../../../data/experience';
import Section from '../Section';

export default function Experience() {
  return (
    <Section title="Experience">
      {EXPERIENCE.map((experience) => (
        <section
          key={experience.company}
          className="flex flex-col gap-1 mb-4 last:mb-0"
        >
          <h3 className="font-semibold">
            {experience.company} ·{' '}
            {experience.role}
          </h3>
          <h4>
            {experience.startDate} -{' '}
            {experience.endDate}
          </h4>
        </section>
      ))}
    </Section>
  );
}
