import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto darkviolet-gradient`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-11'>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#7938d1]`}>
            Mikayel <span className=' text-[#6938d1]'>Gyogchyan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-violet-200`}>
            I develop web pages, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
        <div className="hero-bars-gradient-right-balls">
          <div className='w-4 h-4 rounded-full violet-gradient' />
          <div className='w-4 h-4 rounded-full violet-gradient' />
          <div className='w-4 h-4 rounded-full violet-gradient' />
          <div className='w-4 h-4 rounded-full violet-gradient' />
          
        </div>
        <div className="hero-bars-gradient-right-bars">
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
          <div className='w-1 sm:h-40 h-40 violet-gradient' />
          <div className='w-1 sm:h-20 h-40 violet-gradient' />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[74px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 39, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>  )
}

export default Hero
