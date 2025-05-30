"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const pricingData = [
  {
    title: 'Gold Plan',
    description: 'Level up with more power and enhanced features.',
    originalPrice: '12.99',
    discountedPrice: '3.99',
    savePercent: '75%',
    term: '48-month term',
    additionalSave: '+15% save on all Safionix services and products',
    features: [
      { name: '15% save development & products', included: true },
      { name: '15% OFF', included: true },
      { name: 'Unlimited Monthly Insights', included: true },
      { name: 'Basic support', included: true },
      { name: 'Resource Library', included: true },
      { name: 'Early Bird Alerts', included: true },
      { name: 'Personalized Recommendations', included: false },
      { name: 'Priority support', included: false },
    ],
    isPopular: false,
  },
  {
    title: 'VIP Plan',
    description: 'For the discerning individuals who demand more value and exclusivity.',
    originalPrice: '14.99',
    discountedPrice: '4.99',
    savePercent: '71%',
    term: '48-month term',
    additionalSave: '+20% save on all Safionix services and products',
    features: [
      { name: '20% save for all services', included: true },
      { name: '20% OFF', included: true },
      { name: 'Unlimited Monthly Insights', included: true },
      { name: 'Advanced support', included: true },
      { name: 'Resource Library', included: true },
      { name: 'Early Bird Alerts', included: true },
      { name: 'Personalized Recommendations', included: true },
      { name: 'Priority support', included: false },
    ],
    isPopular: true,
  },
  {
    title: 'Elite Plan',
    description: 'Ideal for large, diverse teams requiring top-tier capabilities.',
    originalPrice: '29.99',
    discountedPrice: '8.99',
    savePercent: '71%',
    term: '48-month term',
    additionalSave: '+35% save on all Safionix services and products',
    features: [
      { name: '35% save for all services', included: true },
      { name: '35% OFF', included: true },
      { name: 'Unlimited Monthly Insights', included: true },
      { name: '24/7 Premium support', included: true },
      { name: 'Resource Library', included: true },
      { name: 'Early Bird Alerts', included: true },
      { name: 'Custom Solutions', included: true },
      { name: 'Priority support', included: true },
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="bg-white py-10 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          {pricingData.map((plan, index) => (
            <div key={index} className={`${plan.isPopular ? '' : 'pt-10'}`}>
              <div
                className={`relative ${
                  plan.isPopular
                    ? 'border rounded-2xl rounded-t-none mt-10 sm:mt-10'
                    : 'border border-gray-200 rounded-2xl mt-6 sm:mt-0'
                } bg-gray-50 hover:shadow-md transition`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-10 left-0 sm:left-1/2 w-full sm:w-[369px] -translate-x-0 sm:-translate-x-1/2 text-center bg-[#606E80] tracking-wide text-white text-base font-bold py-2 rounded-t-2xl rounded-b-none">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-xl tracking-wide text-gray-800 mb-1">{plan.title}</h3>
                  <p className="text-sm text-gray-500 tracking-wider mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 tracking-wide line-through">
                        US${plan.originalPrice}
                      </span>
                      <span className="bg-purple-100 text-black text-xs font-semibold p-2 tracking-wider rounded-2xl">
                        SAVE {plan.savePercent}
                      </span>
                    </div>
                    <div className="flex items-baseline mt-2">
                      <span className="text-sm text-gray-500 ml-1 mr-2">US$</span>
                      <span className="text-5xl sm:text-6xl mt-2 font-semibold text-gray-800">
                        {plan.discountedPrice}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">/mo</span>
                    </div>
                    <p className="text-base sm:text-[18px] text-gray-500 mt-2 tracking-wide">
                      For {plan.term}
                    </p>
                    <p className="text-lg sm:text-xl tracking-wide font-semibold text-purple-600 mt-2">
                      {plan.additionalSave}
                    </p>
                  </div>
                  <button
                    className={`w-full group bg-black border ${
                      plan.isPopular
                        ? 'text-white'
                        : 'bg-white border-black text-black hover:bg-gray-200'
                    } font-semibold text-sm py-2 px-4 rounded-xl mb-6`}
                  >
                    Choose plan
                    <span>
                      <Image
                        className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        src={
                          plan.isPopular
                            ? '/assets/chevron-right.svg'
                            : '/assets/chevron-right-white.svg'
                        }
                        alt="chevron right"
                        width={6}
                        height={6}
                      />
                    </span>
                  </button>
                  <div className="h-[2px] w-full bg-[#8F7FF4]"></div>
                  <ul className="space-y-2 mt-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="relative w-4 h-4 flex-shrink-0">
                          <Image
                            src={feature.included ? '/assets/GreenTick.png' : '/assets/vector.png'}
                            fill
                            style={{ objectFit: 'contain' }}
                            alt={feature.included ? 'check' : 'vector'}
                          />
                        </div>
                        <span
                          className={`text-sm border-b tracking-wide border-dashed mt-1 ${
                            feature.included
                              ? 'text-[#606E80] border-gray-600'
                              : 'text-gray-400 border-gray-400'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="sm:hidden flex justify-center mb-6 space-x-4">
          {pricingData.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border border-purple-400 ${
                activeIndex === index ? 'bg-purple-400' : 'bg-white'
              }`}
            />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="sm:hidden relative">
        <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={16}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {pricingData.map((plan, index) => (
              <SwiperSlide key={index}>
                {/* Card content */}
                <div className={`${plan.isPopular ? '' : ''}`}>
                  <div
                    className={`relative ${
                      plan.isPopular
                        ? 'border rounded-2xl rounded-t-none mt-10'
                        : 'border border-gray-200 rounded-2xl'
                    } bg-gray-50 hover:shadow-md transition`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-10 left-0 w-full text-center bg-[#606E80] tracking-wide text-white text-base font-bold py-2 rounded-t-2xl rounded-b-none">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-xl tracking-wide text-gray-800 mb-1">{plan.title}</h3>
                      <p className="text-sm text-gray-500 tracking-wider mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500 tracking-wide line-through">
                            US${plan.originalPrice}
                          </span>
                          <span className="bg-purple-100 text-black text-xs font-semibold p-2 tracking-wider rounded-2xl">
                            SAVE {plan.savePercent}
                          </span>
                        </div>
                        <div className="flex items-baseline mt-2">
                          <span className="text-sm text-gray-500 ml-1 mr-2">US$</span>
                          <span className="text-5xl mt-2 font-semibold text-gray-800">
                            {plan.discountedPrice}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">/mo</span>
                        </div>
                        <p className="text-base text-gray-500 mt-2 tracking-wide">
                          For {plan.term}
                        </p>
                        <p className="text-lg tracking-wide font-semibold text-purple-600 mt-2">
                          {plan.additionalSave}
                        </p>
                      </div>
                      <button
                        className={`w-full group bg-black border ${
                          plan.isPopular
                            ? 'text-white'
                            : 'bg-white border-black text-black hover:bg-gray-200'
                        } font-semibold text-sm py-2 px-4 rounded-xl mb-6`}
                      >
                        Choose plan
                        <span>
                          <Image
                            className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            src={
                              plan.isPopular
                                ? '/assets/chevron-right.svg'
                                : '/assets/chevron-right-white.svg'
                            }
                            alt="chevron right"
                            width={6}
                            height={6}
                          />
                        </span>
                      </button>
                      <div className="h-[2px] w-full bg-[#8F7FF4]"></div>
                      <ul className="space-y-2 mt-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="relative w-4 h-4 flex-shrink-0">
                              <Image
                                src={feature.included ? '/assets/GreenTick.png' : '/assets/vector.png'}
                                fill
                                style={{ objectFit: 'contain' }}
                                alt={feature.included ? 'check' : 'vector'}
                              />
                            </div>
                            <span
                              className={`text-sm border-b tracking-wide border-dashed mt-1 ${
                                feature.included
                                  ? 'text-[#606E80] border-gray-600'
                                  : 'text-gray-400 border-gray-400'
                              }`}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="swiper-button-prev absolute top-1/3 left-0 rounded-full -translate-y-1/2 bg-white border shadow-xl hover:bg-gray-200 p-4 z-10 ">
              <Image src="/assets/chevron-left.png" alt="chevronleft" width={40} height={40} />
            </button>
            <button className="swiper-button-next absolute top-1/3 right-0 rounded-full -translate-y-1/2 bg-white border shadow-xl hover:bg-gray-200 p-4 z-10 ">
              <Image src="/assets/chevron-right.png" alt="chevronright" width={40} height={40} />
            </button>


        </div>
      </div>
    </section>
  );
}