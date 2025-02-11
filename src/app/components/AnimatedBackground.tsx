'use client';


const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Glow Effects */}
      <div className="absolute inset-0">

        {/* Dots Pattern */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0, 255, 255, 0.1) 1.5px, transparent 0),
              radial-gradient(circle at 3px 3px, rgba(255, 0, 255, 0.1) 1.2px, transparent 0),
              radial-gradient(circle at 2px 2px, rgba(255, 0, 128, 0.07) 1px, transparent 0)
            `,
            backgroundSize: '28px 28px, 42px 42px, 56px 56px'
          }}
        />

        {/* Glow lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-neon-magenta to-transparent" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
        </div>
      </div>
    </div>
  );

};

export default AnimatedBackground;