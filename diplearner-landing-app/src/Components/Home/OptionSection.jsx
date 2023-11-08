import BookOptionCard from "./BookOptionCard";

const OptionSection = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1280px] h-auto m-auto py-8 px-4">
        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          <BookOptionCard />
          <BookOptionCard />
        </div>
      </div>
    </div>
  );
};

export default OptionSection;
