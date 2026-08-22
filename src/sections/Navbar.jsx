import { useState } from "react"
import { motion } from "motion/react"
function Navigation({ onLinkClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onLinkClick}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onLinkClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work" onClick={onLinkClick}>
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onLinkClick}>
          Contact
        </a>
      </li>
    </ul>
  )
}

// Animated hamburger <-> close icon built from three plain bars (the
// standard translate+rotate-about-center recipe), not an SVG with a manual
// transform-origin — Motion treats SVG originX/originY as fractions of that
// element's own bounding box, not pixel coordinates, which was rotating the
// bars around the wrong point instead of crossing into an X.
function MenuToggle({ isOpen }) {
  const bar = "block h-0.5 w-6 rounded-full bg-current"
  return (
    <div className="relative flex h-4 w-6 flex-col justify-between pointer-events-none">
      <motion.span
        className={bar}
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className={bar}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className={bar}
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </div>
  )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="fixed inset-x-0 top-0 z-20
    w-full backdrop-blur-lg bg-primary/40 border-b border-white/5 shadow-lg shadow-black/10">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="#home" className="text-xl font-bold
                 transition-colors text-neutral-400 hover:text-white">
                        João Ferreira
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="flex cursor-pointer text-neutral-400
                  hover:text-white focus:outline-none sm:hidden">
                        <MenuToggle isOpen={isOpen} />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
              <motion.div
                className="block overflow-hidden text-center sm:hidden"
                initial={{opacity:0}}
                animate={{opacity:1}}
                style={{maxHeight:"100vh"}}
                transition={{duration:0.25}}
              >
                <nav className="pb-5">
                    <Navigation onLinkClick={() => setIsOpen(false)} />
                </nav>
              </motion.div>
            )}
        </div>
    )
}

export default Navbar