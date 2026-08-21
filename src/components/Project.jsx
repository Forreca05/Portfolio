import { useState } from 'react'
import ProjectDetails from './ProjectDetails'

// Each project sits at a different point along one continuous spectrum
// that sweeps through the whole theme palette and wraps back to its start —
// eight projects, eight wavelengths. Every entry pairs two adjacent hues
// (instead of one flat color) so the signal bar reads as a real gradient
// and the hover glow becomes two overlapping, colour-blended blobs (nebula
// instead of a single flat halo). Classes are written out in full (not
// built from a template string) so Tailwind's build can actually see and
// keep them.
const ACCENTS = [
  { bar: "from-mint to-aqua", glowA: "bg-mint", glowB: "bg-aqua", tag: "border-mint/30 text-mint" },
  { bar: "from-aqua to-royal", glowA: "bg-aqua", glowB: "bg-royal", tag: "border-aqua/30 text-aqua" },
  { bar: "from-royal to-lavender", glowA: "bg-royal", glowB: "bg-lavender", tag: "border-lavender/30 text-lavender" },
  { bar: "from-lavender to-fuchsia", glowA: "bg-lavender", glowB: "bg-fuchsia", tag: "border-fuchsia/30 text-fuchsia" },
  { bar: "from-fuchsia to-coral", glowA: "bg-fuchsia", glowB: "bg-coral", tag: "border-coral/30 text-coral" },
  { bar: "from-coral to-orange", glowA: "bg-coral", glowB: "bg-orange", tag: "border-orange/30 text-orange" },
  { bar: "from-orange to-sand", glowA: "bg-orange", glowB: "bg-sand", tag: "border-sand/30 text-sand" },
  { bar: "from-sand to-mint", glowA: "bg-sand", glowB: "bg-mint", tag: "border-mint/30 text-mint" },
]

const Project = ({id, title, description, subDescription, href, liveHref, image, tags}) => {
  const [isHidden, setIsHidden] = useState(false)
  const accent = ACCENTS[(id - 1) % ACCENTS.length]

  const images = Array.isArray(image) ? image.filter(Boolean) : (image ? [image] : [])
  const preview = images[0]
  const isVideo = Boolean(preview) && preview.endsWith(".mp4")

  const openDetails = () => setIsHidden(true)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      openDetails()
    }
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={openDetails}
        onKeyDown={handleKeyDown}
        aria-label={`View details for ${title}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl
        border border-white/5 bg-linear-to-b from-storm to-indigo cursor-pointer
        transition-transform duration-300 hover:-translate-y-1.5
        motion-reduce:transition-none motion-reduce:hover:translate-y-0
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      >
        {/* Signal bar — this project's two-tone wavelength on the spectrum */}
        <div className={`h-1 w-full shrink-0 bg-linear-to-r ${accent.bar}
        opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />

        {/* Preview */}
        <div className="relative aspect-video shrink-0 overflow-hidden bg-black/30">
          {/* Two colour blobs overlapping under mix-blend-screen — a small
          nebula unique to this project, only lit up on hover. */}
          <div
            className={`absolute -top-8 left-6 size-28 rounded-full
            opacity-0 blur-3xl mix-blend-screen transition-opacity duration-500
            group-hover:opacity-40 ${accent.glowA}`}
          />
          <div
            className={`absolute -top-8 right-6 size-28 rounded-full
            opacity-0 blur-3xl mix-blend-screen transition-opacity duration-500
            group-hover:opacity-40 ${accent.glowB}`}
          />

          {preview ? (
            isVideo ? (
              <video
                src={preview}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="relative h-full w-full object-cover
                transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <img
                src={preview}
                alt={title}
                loading="lazy"
                className="relative h-full w-full object-cover
                transition-transform duration-500 group-hover:scale-105"
              />
            )
          ) : (
            <div className="relative flex h-full w-full items-center justify-center">
              <span className="select-none text-6xl font-black text-white/5">
                {title.trim().charAt(0).toUpperCase()}
              </span>
              <div className="absolute flex items-center gap-2.5">
                {tags.slice(0, 3).map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt=""
                    className="size-8 rounded-lg bg-black/30 p-1.5"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-2.5 p-4">
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
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
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t
        border-white/5 px-4 py-2.5">
          <span className="flex items-center gap-1 text-sm font-medium
          text-neutral-300 transition-all duration-200 group-hover:gap-2 group-hover:text-white">
            Read More
            <img src="assets/arrow-right.svg" className="w-5" alt="" />
          </span>
        </div>
      </div>

      {isHidden && (
          <ProjectDetails
              title={title}
              description={description}
              subDescription={subDescription}
              href={href}
              liveHref={liveHref}
              image={image}
              tags={tags}
              closeModal={() => setIsHidden(false)}
          />
      )}
    </>
  )
}

export default Project
