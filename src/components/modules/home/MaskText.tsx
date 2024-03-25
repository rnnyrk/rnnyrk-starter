'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { useMousePosition } from '@hooks/useMousePosition';

export function MaskText() {
  const [isHovered, setIsHovered] = useState(false);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const size = isHovered ? 700 : 40;

  return (
    <motion.div
      className="absolute inset-0 z-[100] w-full h-full pt-[18vw] px-[15vw] flex items-start justify-center text-center text-white text-[3vw] font-bold bg-black mask"
      animate={{
        WebkitMaskPosition: `${(mouseX ?? 0) - size / 2}px ${(mouseY ?? 0) - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.5,
      }}
    >
      <p
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        Bureau Beun produceert evenementen, levert de gewenste crew en denkt mee over de tofste
        concepten.
      </p>
    </motion.div>
  );
}
