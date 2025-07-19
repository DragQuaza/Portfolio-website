import React from 'react';
import styled from 'styled-components';
import Skillsdata from '../data/Skillsdata';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary || '#F2F3F4'};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card || '#171721'};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary || '#b1b2b3'};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary || '#F2F3F4'};
  border: 1px solid #565656;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <SkillsContainer>
          {Skillsdata.map((category, index) => (
            <Skill key={index}>
              <SkillTitle>{category.title}</SkillTitle>
              <SkillList>
                {category.skills.map((skill, i) => (
                  <SkillItem key={i}>
                    <SkillImage src={skill.image} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
// import React from 'react';
// import styled from 'styled-components';
// import Skillsdata from '../data/Skillsdata';

// // Import images from src/logo
// import html5Icon from '../logo/html5.png';
// import reactjsIcon from '../logo/reactjs.png';
// import tailwindcssIcon from '../logo/Tailwindcss.png';
// import javascriptIcon from '../logo/javascript.png';
// import nodejsIcon from '../logo/Node.js.png';
// import expressIcon from '../logo/Express.png';
// import mongodbIcon from '../logo/MongoDB.png';
// import pythonIcon from '../logo/Python.png';
// import pytorchIcon from '../logo/PyTorch.png';
// import tensorflowIcon from '../logo/TensorFlow.png';
// import scikitlearnIcon from '../logo/scikit-learn.png';
// import numpyIcon from '../logo/NumPy.png';
// import gitIcon from '../logo/Git.png';
// import githubIcon from '../logo/GitHub.png';
// import vscodeIcon from '../logo/vscode.png';
// import postmanIcon from '../logo/Postman.png';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
//   padding: 40px 0;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
// `;

// const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary || '#F2F3F4'};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 30px;
//   justify-content: center;
// `;

// const Skill = styled.div`
//   width: 100%;
//   max-width: 500px;
//   background: ${({ theme }) => theme.card || '#171721'};
//   border: 0.1px solid #854CE6;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
// `;

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary || '#b1b2b3'};
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center; 
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary || '#F2F3F4'};
//   border: 1px solid #565656;
//   border-radius: 12px;
//   padding: 12px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `;

// const SkillImage = styled.img`
//   width: 24px;
//   height: 24px;
// `;

// const Skills = () => {
//   const skillsDataWithImages = [
//     {
//       title: 'Frontend Development',
//       skills: [
//         { name: 'HTML5', image: html5Icon },  
//         { name: 'React JS', image: reactjsIcon },
//         { name: 'Tailwind CSS', image: tailwindcssIcon },
//         { name: 'JavaScript', image: javascriptIcon },
//       ],
//     },
//     {
//       title: 'Backend Development',
//       skills: [
//         { name: 'Node.js', image: nodejsIcon },
//         { name: 'Express', image: expressIcon },
//         { name: 'MongoDB', image: mongodbIcon },
//       ],
//     },
//     {
//       title: 'AI/ML',
//       skills: [
//         { name: 'Python', image: pythonIcon },
//         { name: 'PyTorch', image: pytorchIcon },
//         { name: 'TensorFlow', image: tensorflowIcon },
//         { name: 'Scikit-Learn', image: scikitlearnIcon },
//         { name: 'NumPy', image: numpyIcon },
//       ],
//     },
//     {
//       title: 'Others',
//       skills: [
//         { name: 'Git', image: gitIcon },
//         { name: 'GitHub', image: githubIcon },
//         { name: 'VS Code', image: vscodeIcon },
//         { name: 'Postman', image: postmanIcon },
//       ],
//     },
//   ];

//   return (
//     <Container id="skills">
//       <Wrapper>
//         <Title>Skills</Title>
//         <SkillsContainer>
//           {skillsDataWithImages.map((category, index) => (
//             <Skill key={index}>
//               <SkillTitle>{category.title}</SkillTitle>
//               <SkillList>
//                 {category.skills.map((skill, i) => (
//                   <SkillItem key={i}>
//                     <SkillImage src={skill.image} alt={skill.name} />
//                     {skill.name}
//                   </SkillItem>
//                 ))}
//               </SkillList>
//             </Skill>
//           ))}
//         </SkillsContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Skills;
