import React from "react";
import Project from "../components/Project";
import HeaderPage from "../components/HeaderPage";
import projectData from "../data/projectsData.json";

const ProjectPage = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="project">
      <HeaderPage title="My Project" description="View my work" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectPage;
