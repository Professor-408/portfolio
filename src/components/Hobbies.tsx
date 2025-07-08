import React from 'react';
import { ChevronRight as ChessKnight, Film, Tv, Music, BookOpen, Camera } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Playing Chess',
      icon: <ChessKnight className="w-8 h-8" />,
      description: 'Strategic thinking and problem-solving through chess',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Watching Movies',
      icon: <Film className="w-8 h-8" />,
      description: 'Exploring different genres and cinematic experiences',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Web Series',
      icon: <Tv className="w-8 h-8" />,
      description: 'Following engaging storylines and character development',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Reading Tech Blogs',
      icon: <BookOpen className="w-8 h-8" />,
      description: 'Staying updated with latest technology trends',
      color: 'from-green-500 to-green-600'
    }
  ];

  const hobbyImages = [
    '/chess.jpg',
    '/movie.jpg',
    '/web_series.jpg',
    '/blog.jpg'
  ];

  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  return (
    <section id="hobbies" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 group relative overflow-hidden">
            <span className="beyond-gradient group-hover:scale-110 transition-transform duration-500 inline-block">
              Beyond <span className="beyond-gradient-text">Code</span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interests and activities that fuel creativity and provide balance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`flip-card-3d${flippedIndex === index ? ' flipped' : ''}`}
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
              onTouchStart={() => setFlippedIndex(flippedIndex === index ? null : index)}
              style={{ height: '16rem' }}
            >
              <div className="flip-card-inner w-full h-full">
                {/* Front Side */}
                <div className="flip-card-front bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-r ${hobby.color} bg-opacity-20 w-fit`}>
                    <div className="text-white">
                      {hobby.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
                {/* Back Side */}
                <div className="flip-card-back flex items-center justify-center">
                  <img
                    src={hobbyImages[index]}
                    alt={hobby.name}
                    className="object-cover w-full h-full"
                    style={{ borderRadius: '1rem' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;