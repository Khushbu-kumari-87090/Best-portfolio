import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 40px;
  background-color: #fff;
  text-align: center;
`;

const Skill = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <div>
        <Skill>Java</Skill>
        <Skill>React</Skill>
        <Skill>Node.js</Skill>
        <Skill>Spring Boot</Skill>
        <Skill>SQL</Skill>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
