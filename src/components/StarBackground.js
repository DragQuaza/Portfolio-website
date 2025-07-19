import React from 'react';

const StarBackground = () => {
  // Generate different sizes and colors for more variety
  const generateStar = (i) => {
    const size = Math.random() * 3 + 1;
    const animationDuration = Math.random() * 4 + 2;
    const animationDelay = Math.random() * 2;
    const opacity = Math.random() * 0.8 + 0.2;
    
    return {
      width: size + 'px',
      height: size + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animation: `twinkle ${animationDuration}s linear infinite`,
      animationDelay: `${animationDelay}s`,
      opacity: opacity,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(150)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={generateStar(i)}
        />
      ))}
      {/* Add some larger, more prominent stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute bg-purple-300 rounded-full"
          style={{
            width: Math.random() * 2 + 2 + 'px',
            height: Math.random() * 2 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `twinkle ${Math.random() * 6 + 4}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.6 + 0.4,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
