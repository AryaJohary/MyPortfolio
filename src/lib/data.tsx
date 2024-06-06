import { Github, Twitter, LinkedinIcon } from 'lucide-react';

import LogoJavascript from '../../public/images/logos/icon-javascript.svg';
import LogoReact from '../../public/images/logos/icon-react.svg';
import LogoNodejs from '../../public/images/logos/icon-nodejs.svg';
import LogoCPP from '../../public/images/logos/icons8-c++.svg';
import LogoTailwindcss from '../../public/images/logos/icon-tailwindcss.svg';
import LogoGit from '../../public/images/logos/icon-git.svg';
import LogoJava from '../../public/images/logos/icons8-java-64.svg';
import LogoPython from '../../public/images/logos/icons8-python-64.svg';
import LogoAICTE from '../../public/images/logos/AICTE Logo Vector.svg';

import ProjectPM from '../../public/images/projects/pm.png';
import ProjectEMS from '../../public/images/projects/ems.png';
import ProjectLDC from '../../public/images/projects/ldc.png';
import ProjectPC from '../../public/images/projects/pc.png';
import ProjectZR from '../../public/images/projects/zr.png';
import ProjectM from '../../public/images/projects/mousey.png';

import ProgrammingInJava from '../../public/images/certificates/ProgrammingInJava.jpg';
import IntroToC from '../../public/images/certificates/IntroToC.jpg';
import ProblemSolvingC from '../../public/images/certificates/ProblemSolvinginC.jpg';
import SoftwareTesting from '../../public/images/certificates/SoftwareTesting.jpg';
import TheJoyOfPython from '../../public/images/certificates/TheJoyofPython.jpg';


import {
  CertificationDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/aryajohary',
  GITHUB_REPO: 'https://github.com/aryajohary',
  TWITTER: 'https://twitter.com/aryajohary',
  LINKEDIN: 'https://linkedin.com/in/aryajohary',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Certifications',
    href: '#certifications',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/aryajohary',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/aryajohary',
  },
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/aryajohary',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/en/',
  },
  {
    label: 'C++',
    logo: LogoCPP,
    url: 'https://cplusplus.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAICTE,
    logoAlt: 'Aicte Logo',
    position: 'Data Analytics Process Automation',
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 7),
    currentlyWorkHere: false,
    summary: [
      'A virtual internship',
      'Used Alteryx Designer Software to automate various Data Analysis Methods. Did various assignments and learned how to apply Data Analysis Automation in real-life projects.',
    ],
    url:'https://drive.google.com/file/d/19W943mbRQ9x6uzzR35chI0XVkZP9YdCd/view?usp=sharing',
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Employee Management System',
    description:
      'An interactive Employee Management System made using HTML and CSS with Java as its backend and SQL as Database. Provides user the facility of Login, Adding new Employees, Updating Employee Details and Deleting existing employee records. All data being saved on SQL server.',
    url: 'https://github.com/AryaJohary/Employee_Management_System',
    previewImage: ProjectEMS,
    technologies: [
      'Java',
      'JSP',
      'MySQL',
      'Servlet',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Password Manager Java',
    description:
      'The Password Manager is a robust and user-friendly Java-based application designed to manage and secure passwords efficiently. Utilizing a combination of Java technologies, AES encryption, and MySQL, this project ensures the secure handling of user credentials.',
    url: 'https://github.com/AryaJohary/PasswordManagerJava',
    previewImage: ProjectPM,
    technologies: [
      'Java',
      'Java Swing',
      'AES',
      'MySQL',
    ],
  },
  {
    name: 'Plagiarism Checker',
    description:
      'A plagiarism checker program that uses a combination of TF-IDF vectorizer and cosine similarity to compare text documents and identify potential plagiarism. Has a minimalist interface where user can select multiple text files at once and get the level of similarity between them. Is scalable to handle large datasets and has fast response time.',
    url: 'https://github.com/AryaJohary/Plagiarism_Checker',
    previewImage: ProjectPC,
    technologies: [
      'Python',
      'TF-IDF',
      'Text Analysis',
      'Tkinter',
    ],
  },
  {
    name: 'Leaf Disease Classification Model Using CNN',
    description:
      'A machine learning model implemented in Python which uses CNN to identify various diseases in plants using an image of its leaf. Supports various diseases from plants like Potato, Tomato and Pepper. User can give a picture of leaf of any of these and will get information about possible disease or healthiness of plant.',
    url: 'https://github.com/AryaJohary/Leaf_Disease_Classification_using_CNN',
    previewImage: ProjectLDC,
    technologies: [
      'Machine Learning',
      'Convolutional Neural Networks',
      'Python',
      'Image Classification',
      'Keras',
      'Tensorflow',
    ],
  },
  {
    name: 'Zombie Runner',
    description:
      'Dynamic 3D zombie survival: swap, shoot and survive. Delve into a meticulously crafted 3D saga as players combat relentless zombie hordes. Seamlessly swap between a variety of weapons while meticulously scavenging for ammunition to survive the unfolding undead apocalypse.',
    url: 'https://github.com/AryaJohary/Zombie_Runner',
    previewImage: ProjectZR,
    technologies: [
      'C#',
      'Unity3D',
      'Game Developement',
      'Game Design',
      'Front Person Shooter',
    ],
  },
  {
    name: 'Mousey',
    description:
      'This is a simple 3D platformer game made using Unity 3D. Jump around the 3D space and platforms. Collect coins and reach the final gate.',
    url: 'https://github.com/AryaJohary/Mousey',
    previewImage: ProjectM,
    technologies: [
      'C#',
      'Unity3D',
      'Game Developement',
      'Game Design',
    ],
  },
];

export const CERTIFICATIONS: CertificationDetails[] = [
  {
    organisationName: 'NPTEL',
    organisationAvatar: LogoAICTE,
    certification: 'Programming in Java',
    issueDate: 'July 2023',
    certificatePic: ProgrammingInJava,
    url: 'https://drive.google.com/file/d/1fDTl3Lk_EkjRgBBIN2fKmoHUtAwUimcS/view?usp=sharing',
  },
  {
    organisationName: 'NPTEL',
    organisationAvatar: LogoAICTE,
    certification: 'Introduction To Programming in C',
    issueDate: 'July 2023',
    certificatePic: IntroToC,
    url: 'https://drive.google.com/file/d/1lM7XVL9BfZtW5mJs_yMtxmyuxl7-APh6/view?usp=sharing',
  },
  {
    organisationName: 'NPTEL',
    organisationAvatar: LogoAICTE,
    certification: 'Problem Solving Through Programming in C',
    issueDate: 'July 2023',
    certificatePic: ProblemSolvingC,
    url: 'https://drive.google.com/file/d/12MyTr1_Vho98J4m3Nhq7mYCd9hHWSAUb/view?usp=sharing',
  },
  {
    organisationName: 'NPTEL',
    organisationAvatar: LogoAICTE,
    certification: 'Software Testing',
    issueDate: 'July 2023',
    certificatePic: SoftwareTesting,
    url: 'https://drive.google.com/file/d/1L7-hXJ4hwwYJ6uE4kFS-JMhxNSDmlVOs/view?usp=sharing',
  },
  {
    organisationName: 'NPTEL',
    organisationAvatar: LogoAICTE,
    certification: 'The Joy of Computing using Python',
    issueDate: 'July 2023',
    certificatePic: TheJoyOfPython,
    url: 'https://drive.google.com/file/d/151h6yCJQP2cHQoBaW6c8UtUY9VYTFi5v/view?usp=sharing',
  },
];
