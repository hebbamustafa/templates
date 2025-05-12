// import { motion } from 'framer-motion'

// import { styles } from '../styles'
// import { ComputersCanvas } from './canvas'

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div className={`${styles.paddingX} absolute inset-0 top-[130px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
//         <div className='flex flex-col justify-center item-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#ec6ab4]' />
//           <div className='w-1 sm:h-80 h-40 ml-2 bg-[#c2257e]' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#ec6ab4]'>Hebba</span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I'm a sister from <span className='text-[#ec6ab4]'>Sisters of Syntax</span>.<br className="sm:hidden block"/> I'm here to help you with cool HTML and CSS templates. Follow us to make creative web designs. 
//           </p>
//         </div>
//       </div>
      
//       <ComputersCanvas />

//       {/* Add margin-top to the following div */}
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href="#about">
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start mt-56'>
//             <motion.dev 
//               animate={{
//                 y: [0, 24, 0]
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "loop"
//               }}
//               className="h-4 w-4 rounded-full bg-secondary m-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero



import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[130px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center item-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ec6ab4]' />
          <div className='w-1 sm:h-80 h-40 ml-2 bg-[#c2257e]' />
        </div>

        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#ec6ab4]'>Hebba</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a sister from <span className='text-[#ec6ab4]'>Sisters of Syntax</span>.<br className="sm:hidden block"/> I'm here to help you with cool HTML and CSS templates.
            </p>
        </div>
     </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='h-[64px] w-[32px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;