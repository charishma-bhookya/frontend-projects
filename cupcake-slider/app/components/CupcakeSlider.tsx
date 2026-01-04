'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Cupcake {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  color: string;
}

const cupcakes: Cupcake[] = [
  {
    id: 1,
    name: 'Vanilla Dream',
    description: 'Classic vanilla cupcake with creamy buttercream frosting',
    price: '$4.99',
    image: '🧁',
    color: 'from-yellow-100 to-yellow-300',
  },
  {
    id: 2,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cupcake topped with chocolate ganache',
    price: '$5.49',
    image: '🧁',
    color: 'from-amber-100 to-amber-300',
  },
  {
    id: 3,
    name: 'Strawberry Swirl',
    description: 'Fresh strawberry cupcake with pink vanilla frosting',
    price: '$5.99',
    image: '🧁',
    color: 'from-pink-100 to-pink-300',
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Luxurious red velvet with cream cheese frosting',
    price: '$6.49',
    image: '🧁',
    color: 'from-red-100 to-red-300',
  },
  {
    id: 5,
    name: 'Lemon Zest',
    description: 'Tangy lemon cupcake with lemon buttercream',
    price: '$5.49',
    image: '🧁',
    color: 'from-lime-100 to-lime-300',
  },
];

export default function CupcakeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cupcakes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cupcakes.length) % cupcakes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cupcakes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Main Slide */}
        <div className="relative w-full h-full">
          {cupcakes.map((cupcake, index) => (
            <div
              key={cupcake.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div
                className={`w-full h-full bg-linear-to-br ${cupcake.color} flex flex-col md:flex-row items-center justify-center p-8 md:p-12`}
              >
                {/* Cupcake Image/Icon */}
                <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
                  <div className="text-9xl md:text-[12rem] transform hover:scale-110 transition-transform duration-300">
                    {cupcake.image}
                  </div>
                </div>

                {/* Cupcake Info */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    {cupcake.name}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-md">
                    {cupcake.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">
                      {cupcake.price}
                    </span>
                    <button className="px-6 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Previous cupcake"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Next cupcake"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {cupcakes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-white'
                  : 'w-3 h-3 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex gap-4 justify-center overflow-x-auto pb-2">
        {cupcakes.map((cupcake, index) => (
          <button
            key={cupcake.id}
            onClick={() => goToSlide(index)}
            className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-gray-800 scale-110'
                : 'border-transparent hover:border-gray-400'
            }`}
          >
            <div
              className={`w-full h-full bg-linear-to-br ${cupcake.color} flex items-center justify-center text-3xl`}
            >
              {cupcake.image}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

