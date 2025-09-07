import React, { useState, useEffect, useRef } from 'react';
import { Play, Star, Users, Trophy } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

// A new component for the animated background particles
const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, radius: number, vx: number, vy: number }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      
      particles = [];
      const numParticles = Math.floor(canvas.width / 50);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: Math.random() * 1 - 0.5,
          vy: Math.random() * 1 - 0.5
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};


export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes subtle-pan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
          background-size: 200% 200%;
          animation: subtle-pan 15s ease infinite;
        }
        @keyframes aurora-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .aurora::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 80, 220, 0.4), transparent);
          animation: aurora-sweep 8s linear infinite;
        }
      `}</style>
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden transition-colors duration-300 animated-gradient aurora">
        <Particles />
        
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            
            <h1 className={`text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight transition-all duration-[1200ms] ease-out
              ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms', textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
            >
              Can I Try This?
            </h1>
            
            <p className={`text-xl md:text-2xl text-purple-200 dark:text-purple-300 mb-4 max-w-3xl mx-auto transition-all duration-[1200ms] ease-out
              ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Real Challenges, Real Skills
            </p>
            
            <p className={`text-lg text-purple-300/80 dark:text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-[1200ms] ease-out
              ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '600ms' }}
            >
              A safe space to explore real-world challenges in design, development, writing, data, and more. 
              Level up by actually doing. No grades. No judgment. Just feedback & growth.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-[1200ms] ease-out
              ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <button 
                onClick={() => onNavigate('challenges')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold text-lg hover:bg-gray-100 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-400/30"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Exploring
              </button>
              <button 
                onClick={() => onNavigate('submit')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-300 text-purple-200 rounded-lg font-semibold text-lg hover:bg-purple-300/10 hover:text-white dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-400/20 dark:hover:text-white transition-all duration-300"
              >
                Submit Challenge
              </button>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-[1200ms] ease-out
              ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              {[
                { icon: Trophy, color: 'text-yellow-400', value: '500+', label: 'Challenges' },
                { icon: Users, color: 'text-green-400', value: '12K+', label: 'Learners' },
                { icon: Star, color: 'text-sky-400', value: '98%', label: 'Success Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/5 dark:bg-gray-800/20 backdrop-blur-md rounded-xl p-6 border border-white/10 dark:border-gray-700/30 transition-all duration-300 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-1">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-purple-200 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

