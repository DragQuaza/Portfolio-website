// Dynamic base path for images
const getImagePath = (imageName) => {
  const basePath = process.env.PUBLIC_URL || '';
  return `${basePath}/logo/${imageName}`;
};

const Skillsdata = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', image: getImagePath('html5.png') },
      { name: 'Tailwind CSS', image: getImagePath('Tailwindcss.png') },  
      { name: 'React JS', image: getImagePath('reactjs.png') },
      { name: 'JavaScript', image: getImagePath('javascript.png') },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', image: getImagePath('Node.js.png') },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', image: getImagePath('C.png') },
      { name: 'C++', image: getImagePath('Cpp.png') },
      { name: 'Python', image: getImagePath('Python.png') },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Git', image: getImagePath('Git.png') },
      { name: 'GitHub', image: getImagePath('GitHub.png') }, 
      { name: 'VS Code', image: getImagePath('vscode.png') },
    ],
  },
];

export default Skillsdata;
