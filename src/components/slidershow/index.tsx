'use client';
import { useState, useRef } from "react";
import Image from "next/image";

type Props = {
  imagesPath: string[];
}

function SliderShow({ imagesPath }: Props) {
  const currentSlideElement = useRef<HTMLDivElement | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  function scrollSlide(e: React.UIEvent<HTMLDivElement>) {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      const target = e.target as HTMLDivElement;
      const itemWidth = target.scrollWidth / imagesPath.length;
      const currentItem = Math.round(target.scrollLeft / itemWidth);

      target.scrollTo(currentItem * itemWidth, 0);
      setCurrentSlide(currentItem);
    }, 150);
  }

  function setCurrentSlideByIndex(index: number) {
    const target = currentSlideElement.current as HTMLDivElement;
    const itemWidth = target.scrollWidth / imagesPath.length;
    target.scrollTo(index * itemWidth, 0);
    setCurrentSlide(index);
  }

  return (
    <div
      className={
        `
        w-full
        ${!fullScreen ? 'h-72' : 'h-screen top-0 left-0 fixed z-50 bg-bg2'}
        flex flex-col 
        `
      }
    >
      <div
        className={
          `          
          w-full h-full
          flex 
          overflow-x-scroll scroll-smooth 
          `
        }
        ref={currentSlideElement}
        onScroll={scrollSlide}
      >
        {imagesPath.map((path, index) => (
          <button
            key={index}
            className={
              `
              w-full h-full
              flex justify-center items-center flex-shrink-0
              relative
              `
            }
            onClick={() => setFullScreen(!fullScreen)}
          >
            <Image
              src={path}
              fill
              alt={`Imagem ${index + 1}`}
              style={{objectFit: "contain"}}
            />
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center gap-1">
        {imagesPath.map((_, index) => (
          <span
            className={`
              w-6 h-6 
              flex items-center justify-center 
              rounded-full 
              border-2 border-secondary
              cursor-pointer
              ${currentSlide === index ? "bg-secondary" : "bg-bg"}
            `}
            onClick={() => setCurrentSlideByIndex(index)}
            key={index}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SliderShow;