'use client';
import { motion, useReducedMotion } from 'motion/react';

export default function Portrait() {
  const reduceMotion = useReducedMotion();
  return <motion.img
    className="portrait"
    src="https://avatars.githubusercontent.com/u/4025649?v=4"
    alt="Oded Goldberg"
    width={78}
    height={78}
    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
  />;
}
