'use client';

import { AnimateText } from '@modules/home/AnimateText';
import { MaskText } from '@modules/home/MaskText';
import { ParallaxGallery } from '@modules/home/ParallaxGallery';

function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-white px-4 pt-10">
        <div className="relative flex items-center justify-center h-full w-full rounded-3xl bg-yellow-500">
          <MaskText />
          <AnimateText
            phrases={[
              'Hét productiebedrijf waar kameraadschap en',
              'hard werken met plezier centraal staat.',
            ]}
          />
        </div>
      </div>
      <ParallaxGallery />
      <div className="h-[70vh] bg-white px-4 pb-4">
        <div className="h-full w-full rounded-3xl bg-black"></div>
      </div>
      <div className="h-screen bg-white text-black flex items-center justify-center">
        <AnimateText
          phrases={[
            'Bureau Beun stimuleert jong talent zich verder',
            'te ontwikkelen in de evenementenbranche',
            'onder begeleiding van ervaren professionals.',
          ]}
        />
      </div>
    </>
  );
}

export default Home;
