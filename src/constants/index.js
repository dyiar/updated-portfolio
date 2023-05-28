import { j } from 'maath/dist/misc-7d870b3c.esm'
import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tv,
  champselector,
  moodbot,
  story
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'OTT Application Developer',
    icon: tv,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'OTT Application Lead Engineer',
    company_name: 'Baytech Consulting',
    icon: "https://media.licdn.com/dms/image/C4E0BAQEmkTmZ8x8E7A/company-logo_100_100/0/1539897002635?e=1693440000&v=beta&t=6sjuj7MH0rR6JzeGHBvML_TWiMe9lOyUPPoKFYkVoxo",
    iconBg: '#383E56',
    date: 'May 2020 - Sept 2022',
    points: [
      'Lead small remote team through architecture, design and implementation of four OTT applications through entire development cycle.',
      'Implemented various tools to account for different OS (LG, Roku, Amazon Fire, Samsung) requirements for functions such as video playback, payment processing, and infinite playback.',
      'Created and maintained clear documentation for all steps of the OTT development process to serve as the playbook for the future.',
    ],
  },
  {
    title: 'iOS / Android Mobile Engineer',
    company_name: 'Baytech Consulting',
    icon: "https://media.licdn.com/dms/image/C4E0BAQEmkTmZ8x8E7A/company-logo_100_100/0/1539897002635?e=1693440000&v=beta&t=6sjuj7MH0rR6JzeGHBvML_TWiMe9lOyUPPoKFYkVoxo",
    iconBg: '#E6DEDD',
    date: 'May 2020 - Sept 2022',
    points: [
      'Collaborated on small remote teams to create mobile apps for cross platform devices.',
      'Co-head extensive overhaul on social media app being built for client, resulting in 80% reduction in load time and exceeding customer expectations.',
      'Created and maintained mobile app used to seamlessly synchronize new and existing user generated content with the OTT applications above.',
    ],
  },
  {
    title: 'Full-Stack Engineer',
    company_name: 'Baytech Consulting',
    icon: "https://media.licdn.com/dms/image/C4E0BAQEmkTmZ8x8E7A/company-logo_100_100/0/1539897002635?e=1693440000&v=beta&t=6sjuj7MH0rR6JzeGHBvML_TWiMe9lOyUPPoKFYkVoxo",
    iconBg: '#383E56',
    date: 'May 2020 - Spet 2022',
    points: [
      'Developed CRM web app for mortgage company client which increased lead tracking from 20% to 99% and generated $3 million in profits each month at the peak of the market.',
      'Created proof of concepts with new technologies to achieve development goals, resulting in saved development time.',
      'Designed mocks for existing UI overhauls and new product implementation using Figma.',
    ],
  },
  {
    title: 'Teaching Assitant',
    company_name: 'BloomTech - FKA Lambda School',
    icon: "https://media.licdn.com/dms/image/C560BAQHfs34E829YUQ/company-logo_100_100/0/1637088036250?e=1693440000&v=beta&t=XJAHJhkmJO8_m7vxTsU6S0RuIp05Jf8xzV29gXqXxPs",
    iconBg: '#E6DEDD',
    date: 'May 2019 - Aug 2019',
    points: [
      'Provided daily feedback and issue resolution of all curriculum through slack help channel or code review.',
      'Delivered one-on-one feedback and code review on a weekly basis.',
      'Led a team of eight students that emulates a real work environment using the agile methodology.',
    ],
  },
]

const testimonials = [
  {
    testimonial: `Austin is one of the kindest, warm, and humane people I've ever had the pleasure of working with. Whenever we worked on a project in the same group, I was never worried about being criticized when I asked for some help; Austin always came through and patiently worked with me until we got the problem solved.

      He is also one of the most clever problem solvers I have had the chance to observe, as he is never one to give up on a challenging puzzle. That ability, along with his incredible personality, will make him one of the greatest assets his future company will possess. `,
    name: 'Kai Lovingfoss',
    designation: 'Site Reliability and Platform Engineering',
    company: 'Yahoo',
    image:
      'https://media.licdn.com/dms/image/C5603AQExWe0sed1zAA/profile-displayphoto-shrink_100_100/0/1558398562052?e=1691020800&v=beta&t=joDoOOobhA2elTufANBDOp3VOifCkwT2q0wZyzzBeKM',
  },
  {
    testimonial: `Austin routinely displays qualities of being a self-starter, able to find motivation despite disheartening, confusing, or contradictory circumstances, to produce solutions on his own and under great pressure. He is also able to do this for a team, providing direction, leadership, and motivation for others in equally trying circumstances--while fiercely defending them. He is a straight shooter--calling it like like he sees it--and is unafraid to seek help when his assessment puts him in the deficit. He is a model developer. I would choose to work with Austin in all situations.`,
    name: 'Stephen Bondor',
    designation: 'Full Stack Engineer',
    company: 'GMV',
    image:
      'https://media.licdn.com/dms/image/D5603AQF_tEfeUD0aqg/profile-displayphoto-shrink_100_100/0/1665446995055?e=1691020800&v=beta&t=waCvHIBcHOH0HrSrYOuYHW2OfVTlltLwbX5lnsWt_y8',
  },
  {
    testimonial:
      'Austin is a fantastic person to work with and is not only a multi-skilled and insightful developer, but also an inspiring strategist with strong problem-solving skills. Austin is an asset to any company.',
    name: 'Thomas Claydon',
    designation: 'Software Engineer',
    company: 'C-Hear, Inc',
    image:
      'https://media.licdn.com/dms/image/D4D35AQGLX5-ajVjiAw/profile-framedphoto-shrink_400_400/0/1623260658513?e=1685916000&v=beta&t=_YSWdgQG_g0HZ67YXQr1tFaCgj3lMwOg8u9UvHNQ3ts',
  },
]

const projects = [
  {
    name: 'MOOD',
    description:
    "A Slack sentiment bot that allows managers to gain insight on team members feelings with customizable survey questions and responses. I was involved in building all parts of this project.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgres',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'pink-text-gradient',
      },
    ],
    image: moodbot,
    source_code_link: 'https://github.com/dyiar',
  },
  {
    name: 'Remarkable Story',
    description:
    "Website created to inspire local non-profit foundation who were undergoing website renovation. I built the backend for this project.",
    tags: [
      {
        name: 'node',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'sql',
        color: 'pink-text-gradient',
      },
    ],
    image: story,
    source_code_link: 'https://github.com/dyiar',
  },
  {
    name: 'Champ Selector',
    description:
    "Backend portion of personal project to create statistical reasoning behind which champions to pick while playing League of Legends.    ",
    tags: [
      {
        name: 'node',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgres',
        color: 'green-text-gradient',
      },
      {
        name: 'sql',
        color: 'pink-text-gradient',
      },
    ],
    image: champselector,
    source_code_link: 'https://github.com/dyiar',
  },
]

export { services, technologies, experiences, testimonials, projects }
