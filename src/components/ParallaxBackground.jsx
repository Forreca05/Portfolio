import {motion, useScroll, useSpring, useTransform} from "motion/react"

const ParallaxBackground = () => {
  const {scrollYProgress} = useScroll()
  const x = useSpring(scrollYProgress, { damping: 50 });
  const yPos = useTransform(x, [0,1], ["0%","50%"])
  return (
    <section className="min-h bg-black/40">
        <div className="h-screen overflow-y-hidden">
            {/* F1 Cars Image */}
            <div
                className="absolute inset-0 -z-40"
                style={{
                    backgroundImage: "url(/assets/f1-sky.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    </section>
  )
}

export default ParallaxBackground