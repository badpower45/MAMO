import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function MeetTheFounder() {
  const journey = [
    { year: '2009', title: 'The Beginning', description: 'Started his Brazilian Jiu-Jitsu journey as a player' },
    { year: '2013 - 2022', title: 'Competitive Excellence', description: "Won double gold medals consistently, competing in over 150 fights across Egypt's top BJJ competitions" },
    { year: '2017', title: 'Coaching Path', description: 'Began training career as assistant coach, sharing knowledge and experience' },
    { year: '2021', title: 'Team Founder', description: "Founded Team Momen Tarek, building one of Egypt's most successful athletic programs" },
    { year: '2023', title: 'International Success', description: 'Won AJP championships in both Gi and No-Gi divisions, plus SSBJJ victory' }
  ];

  const expertise = [
    'Elite Training Expertise',
    'Strategic Vision',
    'Team Builder',
    'Passionate Mentor'
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 px-2">
            MEET THE <span className="text-red-600">FOUNDER</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg px-4">
            The visionary leader behind Team Momen Tarek
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-10 md:mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
              <ImageWithFallback
                src="https://i.postimg.cc/W4CKQ8kL/Whats_App_Image_2025_11_20_at_12_48_53_PM.jpg"
                alt="Coach Momen Tarek in training facility"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                <div className="text-xs md:text-sm text-red-400 mb-1 md:mb-2">FOUNDER & HEAD COACH</div>
                <h3 className="text-2xl md:text-4xl mb-1 md:mb-2">Coach Momen Tarek</h3>
                <p className="text-gray-300 text-sm md:text-base">Master Trainer & Champion Builder</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-6 md:mb-8 px-2">Career Journey</h3>
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {journey.map((item, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-4 md:pl-6 pb-4 md:pb-6">
                  <div className="text-red-600 mb-1 md:mb-2 text-sm md:text-base">{item.year} - {item.title}</div>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white p-5 md:p-8 rounded-xl md:rounded-2xl mb-6 md:mb-8">
              <h4 className="text-xl md:text-2xl mb-3 md:mb-4">Championship Legacy</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Over 200 medals won, 300+ athletes trained, 40+ champions developed including 10+ international athletes and Egypt's #1 ranked champion. This is just a brief overview of his Jiu-Jitsu career.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {expertise.map((skill, index) => (
                <div key={index} className="bg-red-600 text-white text-center py-3 px-3 md:py-4 md:px-6 rounded-lg text-sm md:text-base">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="relative bg-black text-white p-6 md:p-12 rounded-xl md:rounded-2xl text-center max-w-4xl mx-auto">
          <Quote className="absolute top-4 left-4 md:top-8 md:left-8 h-8 w-8 md:h-12 md:w-12 text-red-600 opacity-50" />
          <p className="text-lg md:text-3xl mb-4 md:mb-6 italic px-4 md:px-0">
            "Champions are not born, they are made through dedication, discipline, and the relentless pursuit of excellence."
          </p>
          <p className="text-red-400 text-sm md:text-base">- Coach Momen Tarek</p>
        </div>
      </div>
    </section>
  );
}