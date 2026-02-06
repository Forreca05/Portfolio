import React from 'react'

const ProjectDetails = ({title, description, subDescription, href, image, tags }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center
    justify-center w-full h-full overflow-hidden
    backdrop-blur-sm">
        <div className="relative nax-w-2xl border shadow-sm
        rounded-2xl bg-gradient-to-l from-midnight to-navy
        border-white/10">
            <button className="absolute p-2 rounded-sm top-5 right-5
            bg-midnight hover:bg-gray-500">
                <img src="assets/close.svg" className="w-6 h-6" />
            </button>
            <img src={image} alt={title} className="w-full
            rounded-t-2xl" />
            <div>
                <h5>{title}</h5>
                <p>{description}</p>
                {subDescription.map((sub, index) => (
                    <p key={index}>{sub}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails