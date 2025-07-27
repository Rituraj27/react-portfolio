// src/data/projectData.js

const projectData = {
  notescafe: {
    title: 'Notes Café',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
    description:
      'Notes Café is a web app that allows users to browse, preview, and download academic notes.',
    features: [
      'Categorized subjects',
      'Preview before download',
      'Responsive UI',
    ],
    image: '/assets/notescafe.png',
  },
  duostudio: {
    title: 'Duo Studio',
    techStack: ['HTML', 'CSS', 'JS', 'LocomotiveJs', 'Gsap'],
    description:
      'his is a clone of the Duo Studio website — an internationally recognized, Awwwards-nominated digital agency site. The clone replicates the original’s sleek UI/UX, immersive animations, and high-performance experience using modern web technologies.',
    features: [
      'Smooth page transitions with GSAP and ScrollTrigger',
      'Custom cursor & interactive hover states',
      'Seamless animations that mimic the original design language',
      'Fully modular structure for easy scalability',
    ],
    image: '/assets/sportsbuddy.png',
  },
  // Add more here
};

export default projectData;
