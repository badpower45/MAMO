import { Medal, Trophy, Award, Users } from 'lucide-react';

export function ChampionshipGlory() {
  const stats = [
    {
      icon: Medal,
      number: '200+',
      label: 'Medals',
      description: 'Over 200 medals won in national and international competitions since 2021'
    },
    {
      icon: Trophy,
      number: '40+',
      label: 'Champions',
      description: '10+ international athletes and 30+ local champions trained to excellence'
    },
    {
      icon: Award,
      number: '#1',
      label: 'in Egypt',
      description: "Home to Egypt's top-ranked champion and one of the best in the Middle East"
    },
    {
      icon: Users,
      number: '300+',
      label: 'Athletes',
      description: 'Over 300 people trained with world-class coaching and programs'
    }
  ];

  const victories = [
    { year: '2024', title: 'National Championship', subtitle: '#1 Egypt' },
    { year: '2024', title: 'Middle East Competition', subtitle: 'Top Ranked' },
    { year: '2023', title: 'International Tournament', subtitle: 'Multiple Medals' },
    { year: '2022-2024', title: 'Total Achievements', subtitle: '200+ Medals' }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 px-2">
            CHAMPIONSHIP <span className="text-red-600">GLORY</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg px-4">
            A legacy built on victories, dedication, and unwavering pursuit of excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group px-2">
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className="bg-red-600 group-hover:scale-110 transition-transform duration-300 rounded-xl md:rounded-2xl p-3 md:p-6 inline-block">
                  <stat.icon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-5xl mb-1 md:mb-2 text-red-600">{stat.number}</div>
              <div className="text-lg md:text-2xl mb-2 md:mb-3">{stat.label}</div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Victories */}
        <div className="mt-12 md:mt-20">
          <h3 className="text-2xl md:text-3xl text-center mb-8 md:mb-12 px-2">Recent Victories</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {victories.map((victory, index) => (
              <div key={index} className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-4 md:p-6 rounded-xl border-2 border-red-600">
                <div className="text-red-600 mb-2 md:mb-3 text-sm md:text-base">{victory.year}</div>
                <h4 className="text-lg md:text-xl mb-1 md:mb-2">{victory.title}</h4>
                <p className="text-gray-400 text-sm md:text-base">{victory.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
