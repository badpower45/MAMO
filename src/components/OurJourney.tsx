import { ImageWithFallback } from './figma/ImageWithFallback';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function OurJourney() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 px-2">
            OUR <span className="text-red-600">JOURNEY</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg px-4">
            Follow us on Instagram to see our latest training sessions, achievements, and team moments.
          </p>
        </div>

        {/* Team Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 md:mb-12 group">
          <ImageWithFallback
            src="https://i.postimg.cc/CKzXPXd9/2.jpg"
            alt="Team Momen Tarek - Complete Team"
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <h3 className="text-2xl md:text-4xl mb-2 md:mb-4">Team Momen Tarek</h3>
              <p className="text-gray-300 text-sm md:text-lg max-w-3xl">
                United by passion, driven by excellence. Together we train, together we win, together we rise.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button 
            onClick={() => window.open('https://instagram.com/team_momen_tarek', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto"
          >
            <Instagram className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            View More on Instagram
            <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}