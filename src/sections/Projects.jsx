import { useState } from "react"
import Project from "../components/Project"
import ProjectPreview from "../components/ProjectPreview"
import { myProjects } from "../constants"

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative c-space section-spacing">
        <h2 className="text-heading">My Selected Projects</h2>
        <div className="bg-linear-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-px w-full"></div>

        <div className="mt-4 grid grid-cols-1 gap-x-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <ol className="min-w-0">
            {myProjects.map((project, index) => (
                <Project
                  key={project.id}
                  index={index}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                  {...project}
                />
            ))}
          </ol>
          <ProjectPreview project={myProjects[activeIndex]} total={myProjects.length} />
        </div>
    </section>
  )
}

export default Projects
