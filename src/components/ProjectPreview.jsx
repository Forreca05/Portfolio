import { AnimatePresence, motion } from "motion/react"
import { ACCENTS } from "./Project"

// Desktop-only companion to the project index: a tall, poster-style panel
// that crossfades between whichever project is hovered/focused in the list.
// It's wrapped in its own natural-height sticky layer (not the grid item
// itself) so it can actually pin to the viewport while the taller index
// scrolls past it — the grid item stretches full height, the inner layer
// sticks within that space.
const ProjectPreview = ({ project }) => {
  if (!project) return null

  const { id, title, description, image, tags } = project
  const accent = ACCENTS[(id - 1) % ACCENTS.length]
  const images = Array.isArray(image) ? image.filter(Boolean) : (image ? [image] : [])
  const preview = images[0]
  const isVideo = Boolean(preview) && preview.endsWith(".mp4")

  return (
    <div className="hidden lg:block">
      <div className="sticky top-24">
        <div className="relative h-[60vh] max-h-152 min-h-104
        overflow-hidden rounded-2xl border border-white/5
        bg-linear-to-b from-storm to-indigo">
          {/* One quiet rim light instead of two competing blobs. */}
          <div
            className={`pointer-events-none absolute -top-16 left-1/2 h-40 w-40
            -translate-x-1/2 rounded-full opacity-25 blur-[80px]
            transition-colors duration-500 ${accent.glowA}`}
          />

          {/* Orbit dial — this project's position marked the way the rest of
          the site marks orbit (see OrbitingCircles in the skills section),
          not a giant faded numeral standing in for a hero image. */}
          <div className="absolute left-4 top-4 z-10 flex size-12 items-center
          justify-center rounded-full border border-white/15 bg-primary/70 backdrop-blur-sm">
            <span className={`font-mono text-sm font-bold transition-colors duration-500 ${accent.text}`}>
              {String(id).padStart(2, "0")}
            </span>
            <span
              style={{ "--radius": 22, "--angle": 0 }}
              className={`absolute flex size-1.5 animate-orbit items-center justify-center
              rounded-full transition-colors duration-500 ${accent.glowA}`}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {preview ? (
                <motion.div
                  className="h-full w-full"
                  animate={{ scale: [1, 1.07] }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                >
                  {isVideo ? (
                    <video
                      src={preview}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img src={preview} alt={title} className="h-full w-full object-cover" />
                  )}
                </motion.div>
              ) : (
                <div className="relative flex h-full w-full items-center justify-center">
                  <span className="select-none text-6xl font-black text-white/5">
                    {title.trim().charAt(0).toUpperCase()}
                  </span>
                </div>
              )}

              {/* Scrim + overlaid title, poster-style */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t
              from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-3xl font-bold text-white md:text-4xl">
                  {title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={`absolute inset-x-0 bottom-0 h-1 bg-linear-to-r ${accent.bar}`} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-5"
          >
            <p className="line-clamp-3 text-sm text-neutral-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className={`inline-flex items-center gap-1 rounded-full
                  border bg-white/3 px-2 py-0.5 text-xs text-neutral-300 ${accent.tag}`}
                >
                  <img src={tag.path} alt="" className="size-3" />
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProjectPreview
