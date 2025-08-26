import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

//import gif1 from "../assets/Design/Diseño/gif-oci.webp";
//import bannerPre from "../assets/Design/Diseño/bannerPre.webp";
import bannerT from "../assets/Design/Diseño/bannerTr.webp";
import gifT from "../assets/Design/Diseño/gif-t.webp";
//import gifInt from "../assets/Design/Diseño/gif-int.webp";
import bannerInf1 from "../assets/Design/Diseño/banner-inf-1.webp";
import bannerInf2 from "../assets/Design/Diseño/banner-inf-2.webp";
import posterCopa from "../assets/Design/Diseño/PosterCOPA.webp";
//import postercvo1 from '../assets/Design/Diseño/PosterCVO-1.webp';
import postercvo2 from "../assets/Design/Diseño/PosterCVO-2.webp";
import thewarning from "../assets/Design/Diseño/TWarning.webp";

import "../Styles/_carousel.scss";

const DEFAULT_ITEMS = [
  {
    title: "Diseño",
    description: "Banner de promoción al Diplomado Tránsitos 33.",
    id: 1,
    icon: <img src={bannerInf1} alt="banner" loading="lazy" />,
  },
  {
    title: "Diseño",
    description: "Banner de promoción al Diplomado Tránsitos 33.",
    id: 2,
    icon: <img src={bannerInf2} alt="banner" loading="lazy" />,
  },
  {
    title: "Diseño",
    description: "Banner de promoción al Diplomado Tránsitos 33.",
    id: 3,
    icon: <img src={bannerT} alt="banner Tránsitos" loading="lazy" />,
  },
  {
    title: "Diseño",
    description: "Gif de actividades realizadas en los cursos Tránsitos",
    id: 4,
    icon: <img src={gifT} alt="Gif Tránsitos" loading="lazy" />,
  },
  {
    title: "Diseño",
    description: "Poster Deportivo, Copa NOTIAUTO México",
    id: 5,
    icon: (
      <img
        src={posterCopa}
        alt="Poster deportivo, de la Copa NOTIAUTO en el Autodromo Hermanos Rodriguez"
        loading="lazy"
      />
    ),
  },
  {
    title: "Diseño",
    description: "Poster para Óptica",
    id: 6,
    icon: (
      <img
        src={postercvo2}
        alt="Propuesta de Poster para óptica"
        loading="lazy"
        className="poster-img" //Imagen vertical
      />
    ),
  },
  {
    title: "Diseño",
    description: "Poster de la banda The Warning, estilo brutalismo",
    id: 7,
    icon: (
      <img
        src={thewarning}
        alt="Poster de la Banda The Warning en estilo brutalismo"
        loading="lazy"
        className="poster-img" //Imagen vertical
      />
    ),
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function CarouselDes({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? "round" : ""}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`carousel-item-header ${round ? "round" : ""}`}>
                <span className="carousel-icon-container-horiz">
                  {item.icon}
                </span>
              </div>
              <div className="carousel-item-content">
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${
                currentIndex % items.length === index ? "active" : "inactive"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
