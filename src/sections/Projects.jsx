import Project from "../components/Project"
import { myProjects } from "../constants"

const Projects = () => {
  return (
    <section className="relative c-space section-spacing">
        <h2 className="text-heading">My Selected Projects</h2>
        <div className="bg-linear-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-px w-full"></div>
        <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project) => (
              <Project key={project.id} {...project}/>
          ))}
        </div>
    </section>
  )
}

export default Projects