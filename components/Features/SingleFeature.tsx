import { Feature } from "@/types/feature";

const SingleFeature = ({ id, feature }: { id: number, feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const isOdd = id % 2 !== 0;

  return (
    <div className="w-full">
      <section
        className="wow fadeInUp flex flex-col lg:flex-row items-center justify-center lg:justify-between"
        data-wow-delay=".15s"
      >
        {isOdd && (
          <div className={`flex mb-[50px] h-[400px] w-[400px] lg:mb=0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary order-1 lg:order-none ${!isOdd && 'lg:order-last'}`}>
            {icon}
          </div>
        )}

        <div className="flex flex-col justify-center lg:w-[800px] px-4 md:px-0 order-2">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl md:text-3xl">
            {title}
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        </div>

        {!isOdd && (
          <div className={`flex mb-[50px] h-[400px] w-[400px] lg:mb-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary order-1 lg:order-last`}>
            {icon}
          </div>
        )}
      </section>
    </div>
  );
};

export default SingleFeature;
