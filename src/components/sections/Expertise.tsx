import SectionTitle from "../common/SectionTitle";
import { expertiseData } from "../../data/expertise";

const Expertise = () => {
  return (
    <section>
      <SectionTitle>Expertise</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {expertiseData.map((expertise, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-white text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {expertise.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              {expertise.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
