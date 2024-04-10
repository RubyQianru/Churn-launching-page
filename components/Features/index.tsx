import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Typography } from "@mui/material";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Features"
            paragraph=""
            center
          />
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 ">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} id={feature.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
