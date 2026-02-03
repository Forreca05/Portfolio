const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40
    md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className="text-4xl font-medium">Hi I'm João</h1>
            <div className="flex flex-col items-start">
                <p className="text-5xl font-medium 
                text-neutral-300">
                    An Informatics Enginner Student <br />
                    Eager to Grow
                </p>
                <div></div>
                <p className="text-4xl font-medium
                text-neutral-300">
                    And Learn Even More
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default HeroText