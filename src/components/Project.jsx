import { useState } from 'react'
import ProjectDetails from './ProjectDetails'

// Each project sits at a different point along one continuous spectrum
// that sweeps through the whole theme palette and wraps back to its start —
// eight projects, eight wavelengths. Every entry pairs two adjacent hues
// (instead of one flat color) so the number/rule reads as a real gradient
// and the preview glow becomes two overlapping, colour-blended blobs (nebula
// instead of a single flat halo). Classes are written out in full (not
// built from a template string) so Tailwind's build can actually see and
// keep them.
export const ACCENTS = [
  { text: "text-mint", bar: "from-mint to-aqua", glowA: "bg-mint", glowB: "bg-aqua", tag: "border-mint/30 text-mint" },
  { text: "text-aqua", bar: "from-aqua to-royal", glowA: "bg-aqua", glowB: "bg-royal", tag: "border-aqua/30 text-aqua" },
  { text: "text-royal", bar: "from-royal to-lavender", glowA: "bg-royal", glowB: "bg-lavender", tag: "border-lavender/30 text-lavender" },
  { text: "text-lavender", bar: "from-lavender to-fuchsia", glowA: "bg-lavender", glowB: "bg-fuchsia", tag: "border-fuchsia/30 text-fuchsia" },
  { text: "text-fuchsia", bar: "from-fuchsia to-coral", glowA: "bg-fuchsia", glowB: "bg-coral", tag: "border-coral/30 text-coral" },
  { text: "text-coral", bar: "from-coral to-orange", glowA: "bg-coral", glowB: "bg-orange", tag: "border-orange/30 text-orange" },
  { text: "text-orange", bar: "from-orange to-sand", glowA: "bg-orange", glowB: "bg-sand", tag: "border-sand/30 text-sand" },
  { text: "text-sand", bar: "from-sand to-mint", glowA: "bg-sand", glowB: "bg-mint", tag: "border-mint/30 text-mint" },
]

// A single row in the project index. No thumbnail here — on wide screens
// the sticky panel next to the list carries the preview, so a row is just
// the entry: number, title, tags, and a rule that lights up on interaction.
const Project = ({ id, index, title, description, subDescription, href, liveHref, image, tags, isActive, onActivate }) => {
  const [isHidden, setIsHidden] = useState(false)
  const accent = ACCENTS[(id - 1) % ACCENTS.length]

  const openDetails = () => setIsHidden(true)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      openDetails()
    }
  }

  return (
    <>
      <li className="border-b border-white/5 first:border-t">
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={onActivate}
          onFocus={onActivate}
          onClick={openDetails}
          onKeyDown={handleKeyDown}
          aria-label={`View details for ${title}`}
          aria-current={isActive}
          className="group relative flex w-full cursor-pointer items-baseline
          gap-4 py-5 pl-1 pr-2 transition-colors duration-200
          hover:bg-white/3 focus-visible:outline-none
          focus-visible:bg-white/3 sm:gap-6 sm:py-6"
        >
          <span
            className={`w-8 shrink-0 font-mono text-sm tabular-nums
            text-neutral-600 transition-colors duration-200 sm:w-10 sm:text-base
            ${isActive ? accent.text : "group-hover:text-neutral-400"}`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0 flex-1">
            <p
              className={`truncate text-xl font-semibold transition-colors
              duration-200 sm:text-2xl md:text-3xl
              ${isActive ? "text-white" : "text-neutral-500 group-hover:text-white"}`}
            >
              {title}
            </p>
            <p className="mt-1.5 line-clamp-1 text-sm text-neutral-500 lg:hidden">
              {description}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5 lg:hidden">
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

          <img
            src="assets/arrow-right.svg"
            alt=""
            className={`w-5 shrink-0 transition-all duration-200
            ${isActive ? "translate-x-1 opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
        </div>
      </li>

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
