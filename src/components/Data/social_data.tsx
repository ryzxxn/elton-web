import { IconType } from 'react-icons';
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
// import { FaSteam } from "react-icons/fa";


interface SocialItem {
  name: string;
  link: string;
  text: string;
  color: string;
  icon: IconType;
}

export const socialData: SocialItem[] = [
  {
    name: 'Github',
    link: 'https://github.com/ryzxxn',
    icon: FaGithubSquare,
    text: '',
    color: ''
  },
  {
    name: 'Resume',
    link: 'https://raw.githubusercontent.com/ryzxxn/elton-web/main/resume/EltonCosta.pdf',
    icon: IoIosDocument,
    text: 'Download',
    color: ''
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/elton-costa-ab8500219/',
    icon: FaLinkedin,
    text: '',
    color: ''
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCaezFkINkWciXDTwrkABDhw',
    icon: FaYoutube,
    text: '',
    color: ''
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/eltoncosta_45/',
    icon: FaSquareInstagram,
    text: '',
    color: ''
  },
  // {
  //   name: 'Steam',
  //   link: 'https://steamcommunity.com/id/ryzxxn',
  //   icon: FaSteam,
  //   text: '',
  //   color: ''
  // }
];
