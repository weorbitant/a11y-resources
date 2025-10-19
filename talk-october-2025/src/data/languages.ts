import spain from '../assets/languages/spain.svg';
import germany from '../assets/languages/germany.svg';
import uk from '../assets/languages/uk.svg';

const LANGUAGES: {
  name: string;
  level: string;
  imagePath: string;
  code: string;
}[] = [
  {
    name: 'Spanish',
    level: 'Native',
    imagePath: spain,
    code: 'es',
  },
  {
    name: 'English',
    level: 'C1',
    imagePath: uk,
    code: 'en',
  },
  {
    name: 'German',
    level: 'A2',
    imagePath: germany,
    code: 'de',
  },
];

export default LANGUAGES;
