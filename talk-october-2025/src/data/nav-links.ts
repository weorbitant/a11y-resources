import linkedIn from '../assets/RRSS/linkedin.svg';
import github from '../assets/RRSS/github.svg';
import medium from '../assets/RRSS/medium.svg';

const NAV_LINKS: {
  name: string;
  imagePath: string;
  url: string;
}[] = [
  {
    name: 'linkedin',
    imagePath: linkedIn,
    url: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Github',
    imagePath: github,
    url: 'https://github.com/kevinccbsg',
  },
  {
    name: 'Medium',
    imagePath: medium,
    url: 'https://medium.com/',
  },
];

export default NAV_LINKS;
