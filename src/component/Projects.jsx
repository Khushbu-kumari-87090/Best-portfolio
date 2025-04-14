import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 40px;
  background-color: #fafafa;
`;

const ProjectCard = styled.div`
  display: inline-block;
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <div>
        <ProjectCard>
          <h3>Doracake Bakery App</h3>
          <p>A full-stack pizza delivery app built with React and Spring Boot.</p>
        </ProjectCard>
        <ProjectCard>
          <h3>Machine Learning for Epilepsy Detection</h3>
          <p>Using ML algorithms like SVM and KNN to detect epilepsy from EEG data.</p>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
