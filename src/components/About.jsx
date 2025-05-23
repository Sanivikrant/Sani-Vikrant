import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About =() => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me <span className="text-neutral-500"></span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
           <div className="flex item-center justify-center">
            <img className="rounded-2xl w-96 h-auto" src="./images/portfolioimage.JPG" alt="about" />
           </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
           <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify text-neutral-300 text-lg leading-relaxed">{ABOUT_TEXT}</p>
           </div>
           </motion.div>
      </div>
    </div>
  )
}

export default About
