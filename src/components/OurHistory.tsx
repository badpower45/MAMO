import { Calendar } from 'lucide-react';

export function OurHistory() {
  const milestones = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'Team Momen Tarek was founded with a vision to create champions and inspire excellence in athletic performance.',
      position: 'left'
    },
    {
      year: '2022',
      title: 'Building Champions',
      description: 'Rapid growth with athletes winning medals in local and regional competitions. Our training methods prove successful.',
      position: 'right'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Breaking into international competitions with athletes representing Egypt on the world stage. Training over 200 people.',
      position: 'left'
    },
    {
      year: '2024',
      title: 'Elite Status',
      description: "Over 200 medals won, 10+ international athletes, 30+ local champions. Training 300+ people with Egypt's #1 ranked champion.",
      position: 'right'
    },
    {
      year: '2025',
      title: 'Championship Glory',
      description: 'Dominating the competition with victories at AJP and National Championships. Our athletes continue to set new standards of excellence.',
      position: 'left'
    }
  ];

  return (
    <section id="history" className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="bg-red-600 rounded-xl md:rounded-2xl p-3 md:p-4">
              <Calendar className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 px-2">
            OUR <span className="text-red-600">HISTORY</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg px-4">
            From humble beginnings to championship glory - the journey of Team Momen Tarek
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600" />
          {/* Mobile Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-red-600" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-start md:items-center ${milestone.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${milestone.position === 'right' ? 'md:pl-12' : 'md:pr-12'} pl-10 md:pl-0`}>
                  <div className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                    <div className="inline-block bg-red-600 text-white px-2.5 py-1 md:px-4 md:py-2 rounded-full mb-2 md:mb-4 text-xs md:text-base">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg md:text-2xl mb-2 md:mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg" />
                
                {/* Timeline Dot - Mobile */}
                <div className="md:hidden absolute left-4 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-lg" />

                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
