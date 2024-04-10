import { Feature } from "@/types/feature";

const SingleFeature = ({ id, feature }: { id: number, feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const isOdd = id % 2 !== 0;

  return (
    <div className="w-full">
      <section className="wow fadeInUp lg:flex lg:justify-between" data-wow-delay=".15s">

        { isOdd && <div className="mb-10 flex h-[400px] w-[400px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>}

        <div className="flex flex-col justify-center lg:w-[800px]">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-3xl xl:text-3xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color lg:text-xl">
            {paragraph}
          </p>
        </div>

        { !isOdd && <div className="mb-10 flex h-[400px] w-[400px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>}

      </section>
    </div>
  );
};

export default SingleFeature;
