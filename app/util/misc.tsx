"use client"
import { motion, AnimatePresence, useInView } from "framer-motion";

  export function TextOn({text, num}: {text?: string; num?: number;}) {

    const full:any = [];
    const newText = (text!).split('');
    // for (const i in newText) {
    //     const curr:any = <AnimatePresence key={`text-${i}`}><motion.span key={`${text}-toolLetter-${i}`} initial={{ opacity: 0 }}  exit={{ opacity: 0 }} transition={{ease:'easeOut',duration:0.03}} className="toolLetter" style={{animationDelay:`${ Number(i)*.10 + num!}s`}}>{newText[i]}</motion.span></AnimatePresence>;
    //     full.push(curr)
    //   }

      return (full)
  }

  