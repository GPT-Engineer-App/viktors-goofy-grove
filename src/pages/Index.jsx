import { useState } from 'react';
import { Pizza, Gamepad2, Racquet, Code } from 'lucide-react';

const Index = () => {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  const pizzaSlices = [
    { icon: <Pizza className="h-16 w-16" />, title: "Swedish Pizza Lover", description: "Viktor's fuel for coding: Great Swedish pizza!" },
    { icon: <Racquet className="h-16 w-16" />, title: "Badminton Pro", description: "Smashing shuttlecocks and bugs alike!" },
    { icon: <Gamepad2 className="h-16 w-16" />, title: "League Legend", description: "Crushing lanes and coding challenges!" },
    { icon: <Code className="h-16 w-16" />, title: "Coding Champion", description: "Turning caffeine into code since... well, a while ago!" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-red-600">Viktor Vatn: The Pizza-Powered Programmer</h1>
      <div className="relative w-80 h-80 md:w-96 md:h-96 bg-orange-300 rounded-full overflow-hidden shadow-lg">
        {pizzaSlices.map((slice, index) => (
          <div
            key={index}
            className={`absolute w-1/2 h-1/2 flex items-center justify-center transition-all duration-300 ${
              hoveredSlice === index ? 'scale-110 z-10' : ''
            }`}
            style={{
              top: index < 2 ? 0 : '50%',
              left: index % 2 === 0 ? 0 : '50%',
              backgroundColor: ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-purple-200'][index],
            }}
            onMouseEnter={() => setHoveredSlice(index)}
            onMouseLeave={() => setHoveredSlice(null)}
          >
            {slice.icon}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">
          {hoveredSlice !== null ? pizzaSlices[hoveredSlice].title : "Hover over a slice!"}
        </h2>
        <p className="text-lg">
          {hoveredSlice !== null ? pizzaSlices[hoveredSlice].description : "Discover Viktor's interests!"}
        </p>
      </div>
      <p className="mt-8 text-xl">Based in the pizza paradise of Västerås, Sweden</p>
    </div>
  );
};

export default Index;
