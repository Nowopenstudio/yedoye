'use client'
import { motion } from "framer-motion";

export default function Template({children}:any){
    return(
        <motion.div className="w-full z-[10] relative overflow-x-hidden"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:'easeInOut', duration:.75}}
        >
            {children}
        </motion.div>
    )
}

