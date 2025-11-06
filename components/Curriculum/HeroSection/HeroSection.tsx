// React + Framer Motion — Fixed JSX structure, image corner placement, and animations
'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const topCards = [
  { id: "infants", title: "Infants", subtitle: "3 months babies onwards", color: "#AE7EBC", img: "./curStar.png", paragraph: "The earliest months are precious. Here, we create a warm, sensory-rich environment that helps babies feel safe, loved, and connected. Through soft music, soothing routines, responsive care, and gentle sensory play, infants begin building trust, early communication, and emotional security." },
  { id: "toddler", title: "Toddler", subtitle: "1-2 years", color: "#EBAA35", img: "./fallingstar.svg", paragraph: "We use meaningful play to channel the energy and curiosity of toddlers as they start to begin taking their first steps. Language skills improve, motor skills get stronger, and social relationships start to form. Imaginative play, movement games, and music are all fun ways to learn and express yourself." },
];

const bottomCards = [
  { id: "playgroup", title: "Play group", subtitle: "2-3 years", color: "#58BAC6", img: "./bluesunvector.svg", paragraph: "Begin to explore their surroundings with curiosity and growing independence. Our program supports early speech, movement, and social interaction through imaginative play and simple learning activities." },
  { id: "nursery", title: "Nursery", subtitle: "3-4 years", color: "#F9839D", img: "./starspark.svg", paragraph: "Introduces basic concepts like numbers, shapes, and letters through storytelling, rhymes, and hands-on play. This stage lays the foundation for school readiness in a joyful, pressure-free environment." },
  { id: "prep1", title: "Prep-1", subtitle: "4-5 years", color: "#69CEE9", img: "./heartvector.svg", paragraph: "Deepens learning through structured yet flexible activities. Children build on literacy and numeracy skills, engage in group projects, and learn to express thoughts confidently while developing teamwork and emotional awareness." },
  { id: "prep2", title: "Prep-2", subtitle: "5-6 years", color: "#F37D97", img: "./ThunderVector.svg", paragraph: "Prepares children for formal schooling. Children practice reading, writing, and arithmetic, explore science and culture, and develop problem-solving skills—all while continuing to grow creatively and socially through project-based learning and collaborative play." },
];

export default function HeroSection() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const hoveredCard = [...topCards, ...bottomCards].find((c) => c.id === hoveredCardId) || null;

  // Crisp corner scale-in variant
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -6 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 220, damping: 18, duration: 0.35 }
    }
  };

  return (
    <section className="relative h-max">
      <div className="w-full h-[80vh] curriculum-hero-bg bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L40,282.7C80,277,160,267,240,250.7C320,235,400,213,480,218.7C560,224,640,256,720,266.7C800,277,880,267,960,240C1040,213,1120,171,1200,176C1280,181,1360,235,1400,261.3L1440,288L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="w-full h-max bg-white flex items-center justify-center pt-8">
        <div className="w-full px-4 md:px-0 md:w-[60vw] flex flex-col gap-8">
          <h2 className="font-ohno font-extrabold text-3xl md:text-7xl text-[#4AA6B1] text-center">Our thoughtfully designed curriculum</h2>
          <p className="font-ohno text-[18px] font-medium text-center text-[#4AA6B1]">
            In this period of STEM learning and rushing milestones, we have designed our programs to celebrate children's journey toward learning and discovering their passion.
            Our curriculum is designed to grow with your child, gently and intentionally supporting their development at every stage.
          </p>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto relative" onMouseLeave={() => setHoveredCardId(null)}>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 lg:gap-6 gap-6">
            {/* Infants (large) */}
            <motion.div
              layoutId="infants"
              onMouseEnter={() => setHoveredCardId('infants')}
              className="md:col-start-1 md:col-span-9 lg:col-start-1 lg:col-span-9 border rounded-3xl p-8 md:p-10 overflow-hidden shadow-lg cursor-pointer relative h-[280px] "
              style={{ borderColor: '#AE7EBC' }}
            >
              <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                <h2 className="font-ohno text-purple font-extrabold text-xl md:text-2xl mb-2" style={{ color: '#AE7EBC' }}>Infants</h2>
                <p className="font-ohno text-purple text-2xl md:text-4xl font-extrabold" style={{ color: '#AE7EBC' }}>3 months babies onwards</p>
              </div>
              <motion.img layout="position" src={topCards[0].img} alt="Infants vector" className="absolute top-0 right-0 h-20 md:h-28" />
            </motion.div>

            {/* Toddler (small) */}
            <motion.div
              layoutId="toddler"
              onMouseEnter={() => setHoveredCardId('toddler')}
              className="md:col-start-10 md:col-span-3 lg:col-start-10 lg:col-span-3 border rounded-3xl p-8 md:p-10 overflow-hidden shadow-lg cursor-pointer relative h-[280px]"
              style={{ borderColor: '#EBAA35' }}
            >
              <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                <h2 className="font-ohno text-[#EBAA35] font-extrabold text-xl md:text-2xl mb-2">Toddler</h2>
                <p className="text-[#EBAA35] text-2xl md:text-4xl font-extrabold">1-2 years</p>
              </div>
              <motion.img layout="position" src={topCards[1].img} alt="Toddler vector" className="absolute right-0 top-0 h-20 md:h-28" />
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 mt-6">
            {bottomCards.map((card) => (
              <motion.div
                key={card.id}
                layoutId={card.id}
                onMouseEnter={() => setHoveredCardId(card.id)}
                className="border rounded-3xl p-8 md:p-10 overflow-hidden shadow-lg relative md:col-span-3 lg:col-span-3 cursor-pointer h-[280px]"
                style={{ borderColor: card.color }}
              >
                <div className="relative z-10 flex flex-col gap-12">
                  <h3 className="font-ohno font-extrabold text-lg md:text-xl mb-2" style={{ color: card.color }}>{card.title}</h3>
                  <p className="font-ohno text-xl md:text-2xl font-extrabold" style={{ color: card.color }}>{card.subtitle}</p>
                </div>
                <motion.img layout="position" src={card.img} alt={card.title} className="absolute right-0 top-0" />
              </motion.div>
            ))}
          </div>

          {/* Hover Overlay */}
          <AnimatePresence>
            {hoveredCard && (
              <motion.div
                key={hoveredCard.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="absolute inset-0 m-0 w-full h-full rounded-3xl p-6 md:p-12 shadow-2xl bg-white z-30 border-2"
                style={{ borderColor: hoveredCard.color }}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <div className="h-full overflow-hidden relative">

                  {/* Image placed exactly in top-right corner */}
                  <motion.div
                    className="absolute right-0 top-0 pointer-events-none"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    
                    style={{ transformOrigin: 'top right' }}
                  >
                    <motion.img
                      src={hoveredCard.img}
                      alt={hoveredCard.title}
                      className="h-20 md:h-36 w-auto block"
                      style={{ display: 'block' }}
                      draggable={false}
                    />
                  </motion.div>

                  <h2 className="font-ohno font-extrabold text-3xl md:text-5xl" style={{ color: hoveredCard.color }}>{hoveredCard.title}</h2>

                  <p className="font-bold text-xl md:text-3xl mt-4" style={{ color: hoveredCard.color }}>{hoveredCard.subtitle}</p>

                  <p className="font-ohno text-[30px] font-bold mt-30" style={{ color: hoveredCard.color }}>
                    {hoveredCard.paragraph}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
