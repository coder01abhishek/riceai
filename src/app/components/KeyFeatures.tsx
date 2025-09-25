// components/KeyFeatures.tsx
export default function KeyFeatures() {
  const features = [
    {
      number: "01",
      title: "Decentralized Data Network",
      description: "Leverages blockchain and DePIN for real-time, global data sharing among robots, tackling data scarcity and accelerating AGI development."
    },
    {
      number: "02",
      title: "Omnimodal Perception and Action",
      description: "Processes vision, audio, text, tactile, and proprioception inputs/outputs in real-time for versatile robotic capabilities."
    },
    {
      number: "03",
      title: "Advanced Real-World Reasoning",
      description: "Employs neuro-symbolic integration for causal inference and dynamic, self-evolving world models via self-directed learning."
    },
    {
      number: "04",
      title: "Real-Time Responsiveness and Scalability",
      description: "Shifts to continuous active learning with knowledge editing, synthetic data scaling, and robust failure handling."
    },
    {
      number: "05",
      title: "Seamless Robot Integration",
      description: "Powers companion and service robots like Minibot M1 for tasks like scheduling and companionship with unified protocols."
    }
  ];

  return (
    <section className="py-12 bg-[#070707] mt-10" id="key-features">
      <div>
        {/* Mobile: Single column */}
        <div className="flex flex-col gap-6 lg:hidden">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border border-white/20 p-6 rounded-2xl"
            >
              <div className="text-blue-400 text-sm font-medium">{feature.number}</div>
              <p className="mt-8 mb-4 text-lg font-medium text-white leading-tight">{feature.title}</p>
              <p className=" text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Asymmetric grid */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
          {/* First row: Three equal columns */}
          <div className="col-span-4 border border-white/20 p-8 rounded-2xl">
            <div className="text-blue-400 text-lg font-medium">01</div>
            <p className="mt-12 mb-4 text-xl font-semibold text-white leading-tight">Decentralized Data Network</p>
            <p className=" text-base leading-relaxed">Leverages blockchain and DePIN for real-time, global data sharing among robots, tackling data scarcity and accelerating AGI development.</p>
          </div>
          
          <div className="col-span-4 border border-white/20 p-8 rounded-2xl">
            <div className="text-blue-400 text-lg font-medium">02</div>
            <p className="mt-12 mb-4 text-xl font-semibold text-white leading-tight">Omnimodal Perception and Action</p>
            <p className=" text-base leading-relaxed">Processes vision, audio, text, tactile, and proprioception inputs/outputs in real-time for versatile robotic capabilities.</p>
          </div>
          
          <div className="col-span-4 border border-white/20 p-8 rounded-2xl">
            <div className="text-blue-400 text-lg font-medium">03</div>
            <p className="mt-12 mb-4 text-xl font-semibold text-white leading-tight">Advanced Real-World Reasoning</p>
            <p className=" text-base leading-relaxed">Employs neuro-symbolic integration for causal inference and dynamic, self-evolving world models via self-directed learning.</p>
          </div>

          {/* Second row: Two columns - 5/7 split */}
          <div className="col-span-5 border border-white/20 p-8 rounded-2xl">
            <div className="text-blue-400 text-lg font-medium">04</div>
            <p className="mt-12 mb-4 text-xl font-semibold text-white leading-tight">Real-Time Responsiveness and Scalability</p>
            <p className=" text-base leading-relaxed">Shifts to continuous active learning with knowledge editing, synthetic data scaling, and robust failure handling.</p>
          </div>
          
          <div className="col-span-7 border border-white/20 p-8 rounded-2xl">
            <div className="text-blue-400 text-lg font-medium">05</div>
            <p className="mt-12 mb-4 text-xl font-semibold text-white leading-tight">Seamless Robot Integration</p>
            <p className="text-base leading-relaxed">Powers companion and service robots like Minibot M1 for tasks like scheduling and companionship with unified protocols.</p>
          </div>
        </div>
      </div>
    </section>
  );
}