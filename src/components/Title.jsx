import React from 'react';

const Title = ({ title, desc }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-500">{desc}</p>
    </div>
  );
};

export default Title;