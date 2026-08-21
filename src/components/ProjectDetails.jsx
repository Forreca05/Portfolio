import { useState } from "react"
import { motion } from "motion/react"

const ProjectDetails = ({
  title,
  description,
  subDescription,
  href,
  liveHref,
  image,
  tags,
  closeModal
}) => {

  const images = Array.isArray(image) ? image.filter(Boolean) : (image ? [image] : [])
  const hasMedia = images.length > 0
  const hasMultiple = images.length > 1

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentImage = hasMedia ? images[currentIndex] : null
  const isVideo = hasMedia && currentImage.endsWith(".mp4")

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center
      w-full h-full overflow-y-auto backdrop-blur-sm p-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl
        bg-linear-to-l from-midnight to-navy border-white/10
        ${!hasMedia ? "pt-6" : ""}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-5 right-5
          bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        {/* Media (optional) */}
        {hasMedia && (
          <div className="relative">
            {isVideo ? (
              <video
                src={currentImage}
                controls
                className="mx-auto max-h-[40vh] w-full object-contain rounded-t-2xl"
              />
            ) : (
              <img
                src={currentImage}
                className="max-w-full max-h-[50vh] w-full object-contain mx-auto rounded-t-2xl"
              />
            )}

            {hasMultiple && (
              <>
                <button
                  onClick={goToPrevious}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full
                  bg-midnight/70 hover:bg-gray-500 cursor-pointer"
                >
                  <img
                    src="assets/arrow-right.svg"
                    className="w-4 rotate-180"
                  />
                </button>

                <button
                  onClick={goToNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full
                  bg-midnight/70 hover:bg-gray-500 cursor-pointer"
                >
                  <img src="assets/arrow-right.svg" className="w-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`size-2 rounded-full cursor-pointer transition-colors
                      ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-neutral-400">
            {description}
          </p>

          {subDescription.map((sub, index) => (
            <p
              key={index}
              className="mb-3 font-normal text-neutral-400"
            >
              {sub}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            <div className="flex items-center gap-5">
              {liveHref && (
                <a
                  href={liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1
                  font-medium cursor-pointer hover-animation"
                >
                  Live Demo
                  <img src="assets/arrow-up.svg" className="size-4" />
                </a>
              )}

              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1
                  font-medium cursor-pointer hover-animation"
                >
                  View Project
                  <img src="assets/arrow-up.svg" className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails
