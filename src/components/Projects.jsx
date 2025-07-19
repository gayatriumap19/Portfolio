import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center"
          >
            {/* Image */}
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="rounded"
              />
            </div>

            {/* Description */}
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <div className="mb-4 text-stone-400 projDes">{project.description}</div>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
