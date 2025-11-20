import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <div className="bg-black rounded-xl md:rounded-2xl p-3 md:p-4 border-2 border-red-600 inline-block">
              <ImageWithFallback
                src="https://i.postimg.cc/VNpT3gbG/logo_of_team.jpg"
                alt="Team Momen Tarek Logo"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
              />
            </div>
          </div>

          {/* Brand Name */}
          <h3 className="text-xl md:text-2xl mb-1 md:mb-2">TEAM MOMEN TAREK</h3>
          <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Mixed Martial Arts</p>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6 md:pt-8">
            <p className="text-gray-500 text-sm md:text-base px-4">
              © 2025 Team Momen Tarek. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}