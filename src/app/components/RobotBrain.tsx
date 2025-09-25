// components/RobotBrain.tsx
export default function RobotBrain() {
  return (
    <section className="relative py-24 rounded-2xl lg:min-h-[90vh] flex items-center justify-center border border-white/20 overflow-hidden mt-10" id="robot-brain">
      {/* Background Video */}
      <video 
        src="/videos/particles.mp4" 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover scale-125"
      />
      
      {/* Content */}
      <div className="z-10 mx-auto px-10 max-w-7xl text-center">
        <p 
          className="text-gray-400 text-xs font-medium uppercase mb-4" 
          style={{ lineHeight: "16px", letterSpacing: "4px", fontFeatureSettings: "'ss11' on, 'liga' off, 'calt' off" }}
        >
          Strong. Fast. Simple.
        </p>
        <h2 className="text-2xl lg:text-7xl font-medium text-white leading-tight">
          A Single AI Model<br />
          Compatible for All <span className="text-white/40">Robots!</span>
        </h2>
      </div>
    </section>
  );
}