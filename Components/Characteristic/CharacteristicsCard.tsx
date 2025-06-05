import Image from "next/image";
import Link from "next/link";

interface CardProps {
  cardTitle: string;
  cardMedia: string;
  cardText: string;
  imageCredits?: string;
  cardStyles?: Object;
  cardLink?: string;
}

const CharacteriscticsCard = ({
  cardMedia,
  cardText,
  cardTitle,
  cardStyles,
  cardLink,
}: CardProps) => {
  const cardStylesWithTailwind = cardStyles ? "h-[340px]" : "min-h-[490px]";

  return (
    <div className="max-w-sm w-full">
      <h5 className="bg-[#000823] px-4 py-3 text-white rounded-lg text-center text-lg font-bold relative top-[20px] lg:top-0 left-0 lg:left-0 z-10 mx-4 lg:mx-0">
        {cardTitle}
      </h5>
      <div
        className={`${cardStylesWithTailwind} w-full relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${
          cardStyles ? "flex flex-col justify-end" : ""
        }`}
      >
        <div className="relative h-48 w-full">
          <Image
            src={cardMedia}
            alt={cardTitle}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base leading-relaxed">{cardText}</p>
        </div>
        {cardLink && (
          <div className="p-6 pt-0 text-right">
            <Link
              href={`/${cardLink}`}
              className="text-[#000823] hover:text-[#001660] font-semibold text-base transition-colors duration-200 hover:underline"
            >
              Ver más...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacteriscticsCard;
