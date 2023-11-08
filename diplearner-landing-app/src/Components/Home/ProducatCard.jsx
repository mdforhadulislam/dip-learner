import Image from "next/image";

const ProducatCard = () => {
  return (
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
        <Image
          src="/book-1.png"
          class="object-cover w-full h-full"
          alt="Book"
          width={300}
          height={300}
        />
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-2">
          <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            Apple AirPods
          </p>
          <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            $95.00
          </p>
        </div>
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
      </div>
      <div class="p-6 pt-0">
        <button
          class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProducatCard;
