import { OrbitingCircles } from "./OrbitingCircles"

export function Frameworks() {
  const skills = [
    "c",
    "cplusplus",
    "css3",
    "figma",
    "git",
    "haskell",
    "html5",
    "java",
    "javascript",
    "laravel",
    "neovim",
    "php",
    "prolog",
    "python",
    "react",
    "sqlite",
    "tailwindcss",
    "visualstudiocode"
  ]
  return (
    <div className="relative flex h-60 w-full flex-col 
    items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({src}) => (
  <img src={src} className="duration-200 rounded-sm
  hover:scale-110"/>
)
