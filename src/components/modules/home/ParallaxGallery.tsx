'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

import { cn } from '@utils/cn';

function Column({ className, y }: ColumnProps) {
  const columnClasses = 'bg-gray-400 hover:bg-primary-500 transition-colors w-full min-h-[40vh]';

  return (
    <motion.div
      className={cn('relative w-1/4 min-w-[250px] h-full flex flex-col gap-[2vw]', className)}
      style={{ y }}
    >
      <div className={cn(columnClasses, 'mb-4')}></div>
      <div className={cn(columnClasses, 'mb-4')}></div>
      <div className={cn(columnClasses, 'mb-4')}></div>
      <div className={cn(columnClasses)}></div>
    </motion.div>
  );
}

type ColumnProps = {
  className?: string;
  y: MotionValue<number>;
};

export function ParallaxGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 0.25]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.75]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={gallery}
      className="relative flex gap-[2vw] h-[75vh] px-12 bg-white overflow-hidden"
    >
      <Column
        y={y1}
        className="-top-[45%]"
      />
      <Column
        y={y2}
        className="-top-[95%]"
      />
      <Column
        y={y3}
        className="-top-[65%]"
      />
      <Column
        y={y4}
        className="-top-[75%]"
      />
    </div>
  );
}
