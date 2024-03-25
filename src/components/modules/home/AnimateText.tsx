'use client';

import { motion } from 'framer-motion';

export function AnimateText({ phrases }: AnimateTextProps) {
  const animation = {
    initial: {
      y: '100%',
    },
    enter: (index: number) => ({
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * index,
      },
    }),
  };

  return (
    <div className="flex flex-col items-center w-full h-full pt-[18vw] px-[15vw]">
      {phrases.map((phrase, index) => {
        return (
          <div
            key={index}
            className="overflow-hidden text-[3vw] font-bold"
          >
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              viewport={{ once: true }}
              whileInView="enter"
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

type AnimateTextProps = {
  phrases: string[];
};
