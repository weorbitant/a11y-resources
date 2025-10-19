import { SKILLS } from '../../../../../data/skills';
import { Badge } from '../Badge';
import Section from '../Section';

export default function Skills() {
  return (
    <Section title="Skills">
      {SKILLS.map((skill) => (
        <div key={skill.name} className="mt-4">
          <h3 className="font-semibold mb-2">{skill.name}</h3>
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {skill.technologies.map((tech) => (
              <Badge key={tech} content={tech} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
