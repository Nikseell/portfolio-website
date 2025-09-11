import { expertiseData } from '../../data/expertise'

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="text-white h-fit"
    >
      <div className="flex items-center justify-between pb-8">
        <div className="section-header">Expertise</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className="border border-[#333333] bg-[#191919] rounded-xl p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                <h2 className="text-xl font-semibold text-[#DFDFDF]">{expertise.title}</h2>
              </div>
              <p className="text-[#BFBFBF] leading-relaxed">{expertise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise
