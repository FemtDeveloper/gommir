import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  cardTitle: string;
  cardMedia: string;
  cardText: string;
  imageCredits?: string;
  cardStyles?: Object;
  cardLink?: string;
  delay?: number;
}

const CharacteriscticsCard = ({
  cardMedia,
  cardText,
  cardTitle,
  cardStyles,
  cardLink,
  delay = 0,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStylesWithTailwind = cardStyles ? "h-[380px]" : "min-h-[520px]";

  return (
    <div
      className="max-w-sm w-full group perspective-1000"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Floating Title Badge */}
      <div className="relative mb-4">
        <div className="bg-gradient-to-r from-[#19466f] via-[#5bb792] to-[#19466f] px-6 py-3 text-white rounded-2xl text-center text-lg font-bold shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 border border-[#19466f]/70">
          <span className="relative z-10">{cardTitle}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#5bb792]/20 to-[#19466f]/20 rounded-2xl"></div>
        </div>
      </div>

      {/* Main Card */}
      <div
        className={`${cardStylesWithTailwind} w-full relative bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.02] ${
          cardStyles ? "flex flex-col justify-end" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5bb792]/5 to-[#19466f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={cardMedia}
            alt={cardTitle}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? "scale-110 brightness-110" : "scale-100"
            }`}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#5bb792] rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-[#19466f] rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 flex-1 flex flex-col">
          <p className="text-gray-700 text-base leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
            {cardText}
          </p>

          {cardLink && (
            <div className="mt-auto">
              <Link
                href={`/${cardLink}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base transition-all duration-300 group-hover:translate-x-1"
              >
                Ver más
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45"></div>
        <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default CharacteriscticsCard;
