import { ArrowDown, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://i.postimg.cc/CKzXPXd9/2.jpg"
          alt="Team Momen Tarek"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-red-900/80" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Red accent lines */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-red-600 opacity-30 animate-pulse" />
      <div className="absolute top-0 right-1/4 w-1 h-full bg-red-600 opacity-30 animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-12">
        {/* Logo */}
        <div className="mb-8 md:mb-10 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-4 border-red-600 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <ImageWithFallback
                src="https://i.postimg.cc/VNpT3gbG/logo_of_team.jpg"
                alt="Team Momen Tarek Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-white">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider drop-shadow-2xl">TEAM MOMEN</span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-red-600 tracking-wider mt-2 md:mt-3 drop-shadow-2xl animate-pulse">TAREK</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-4 md:mb-6">
          <div className="inline-block bg-red-600/20 backdrop-blur-sm border border-red-600/50 rounded-full px-6 py-3 md:px-8 md:py-4">
            <p className="text-white text-sm sm:text-base md:text-xl tracking-wide">
              Elite Brazilian Jiu-Jitsu Training | Mixed Martial Arts Excellence
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-base sm:text-lg md:text-2xl mb-10 md:mb-14 px-2 tracking-wide">
          Champions Rise. Legends Are Made. Victory Is Ours.
        </p>

        {/* CTA Buttons - Fixed Layout */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-8">
          <Button 
            onClick={() => scrollToSection('history')}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
          >
            Our Legacy
          </Button>
          <Button 
            onClick={() => window.open('https://instagram.com/team_momen_tarek', '_blank')}
            size="lg"
            className="bg-black text-white hover:bg-gray-900 border-2 border-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow Us
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-red-600 h-8 w-8 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}