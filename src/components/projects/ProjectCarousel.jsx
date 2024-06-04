import FlaskIcon from "../icons/FlaskIcon";
import Project from "./Project";
import projectData from "../../data/projects";

const ProjectCarousel = () => {
  return (
    <>
      <div className="carousel w-full">
        {projectData.map((project, index) => {
          return (
            <div key={project.name} id={`item${index + 1}`} className="carousel-item w-full">
              <Project
                projectLogo={project.logo}
                projectName={project.name}
                description={project.description}
                tagLine={project.tagLine}
                taglineDescription={project.tagLineDescription}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center w-full py-2 gap-2">
        {projectData.map((project, index) => {
          return (
            <a
              key={project.name}
              href={`#item${index + 1}`}
              className="btn btn-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12">
                  {project.logo}
                </div>
                <span className="text-xl font-bold">{project.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCarousel;
