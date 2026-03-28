import Image from "next/image";

function PropertyCard({
  image,
  title,
  setOpen,
  possessionDesktop,
  possessionMobile,
  areaMobile,
  areaDesktop,
}) {
  return (
    <div className="bg-white rounded-[23px] overflow-hidden w-full duration-300 ease-out transform origin-bottom hover:scale-105 shadow-[#A786551A] shadow-lg">
      {/* Property Image */}
      <div className="relative h-[272px] w-full">
        <Image src={image} alt={title} fill className="object-fill" />
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="md:text-xl text-[20px] font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        {/* Possession */}
        {areaDesktop && (
          <p className="hidden md:block text-gray-600 font-semibold text-[16px] mb-2">
            {areaDesktop}
          </p>
        )}
        {areaMobile && (
          <p className="md:hidden text-gray-600 font-semibold text-[16px] mb-2">
            {areaMobile}
          </p>
        )}

        {possessionDesktop && (
          <p className="hidden md:block text-gray-500 text-[14px] mb-4 ">
            {possessionDesktop}
          </p>
        )}

        {possessionMobile && (
          <p className="md:hidden text-gray-500 text-[14px] mb-4 ">
            {possessionMobile}
          </p>
        )}

        {/* CTA Button */}
        <button
          onClick={() => setOpen(true)}
          className="w-full btn-primary text-white font-medium py-3 px-4 rounded-[17px] transition-colors duration-200 text-[18px]"
        >
          Get Latest Price Now
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
