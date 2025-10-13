"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

const ActivityZone = () => {
    const activities = [
        { title: "Makerspace", des: "Where tiny hands build big ideas through creativity and innovation.", src: "/photo/1.jpg" },
        { title: "Art Studio", des: "A colorful world where imagination comes to life with every brushstroke.", src: "/photo/7.jpg" },
        { title: "Outdoor Play Space", des: "Adventure awaits with climbing, running, and nature exploration.", src: "/photo/18.jpg" },
        { title: "Home rooms", des: "A cozy, nurturing space where learning feels like a second home.", src: "/photo/27.jpg" },
        { title: "Movement Studio", des: "Stretch, dance, and grow—where little bodies stay active and joyful.", src: "/photo/22.jpg" },
        { title: "Library & Reading Books", des: "Storytime magic that sparks curiosity and a love for books.", src: "/photo/14.jpg" },
        { title: "Construction Area", des: "Future architects at work, stacking, designing, and problem-solving.", src: "/photo/34.jpg" },
        { title: "Changing Room", des: "A tidy, organized space for quick transitions and independence.", src: "/photo/2.jpg" },
        { title: "Dining Area", des: "Fueling young minds with healthy meals and happy conversations.", src: "/photo/11.jpg" },
        { title: "Montessori Zone", des: "Hands-on learning that fosters confidence and self-discovery.", src: "/photo/42.jpg" },
        { title: "Nap Room", des: "A peaceful retreat for sweet dreams and recharging little energies.", src: "/photo/27.jpg" },
        { title: "Music Room", des: "Where giggles, rhythm, and melodies create the soundtrack of childhood.", src: "/photo/32.jpg" },
    ]

    return (
        <section className="relative flex items-center justify-center">
            <div className="md:w-[90%] container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-purple mb-6">
                        12 different activity zones
                    </h2>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={900}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 180,
                        modifier: 1.3,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper pb-12"
                >
                    {activities.map((activity, index) => (
                        <SwiperSlide key={index} className="max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]">
                            <div className="rounded-xl shadow-xl overflow-hidden bg-white transition-transform duration-500">
                                <div className="h-48">
                                    <img
                                        src={activity.src}
                                        alt={activity.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 text-start">
                                    <h3 className="text-lg font-bold text-purple mb-2">{activity.title}</h3>
                                    <p className="text-purple text-sm leading-relaxed">{activity.des}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom styles for navigation & pagination */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        background: #d1d5db;
                        opacity: 2;
                        transition: all 0. 2s ease;
                    }
                    .swiper-pagination-bullet-active {
                        background: #9769A5;
                        transform: scale(1.3);
                        box-shadow: 0 0 10px 2px #9769A5;
                    }
                    .swiper-pagination {
                        bottom: 0 !important;
                        margin-top: 20px;
                        position: relative;
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: white !important;
                        background-color: #9769A5 !important;
                        border-radius: 9999px;
                        width: 44px;
                        height: 44px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 16px rgba(151,105,165,0.25);
                        transition: all 0.2s ease;
                        padding: 12px;
                    }
                    .swiper-button-next:hover,
                    .swiper-button-prev:hover {
                        background-color: #7c4d94 !important;
                        box-shadow: 0 0 20px 4px #9769A5;
                    }
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 18px !important;
                        font-weight: bold;
                    }
                `}</style>
            </div>
        </section>
    )
}

export default ActivityZone