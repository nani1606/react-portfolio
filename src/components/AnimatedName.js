import React, { useEffect, useState } from 'react';

export default function AnimatedName() {
  const [nameChars, setNameChars] = useState([]);

  useEffect(() => {
    const name = 'Krishna Reddy Syamala.';
    const chars = name.split('');
    setNameChars(chars);
  }, []);

  return (
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
      Hi,{' '}
      {nameChars.map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * 10 }s`,
            animation: 'fade-in 1s ease-in-out forwards', 
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}
