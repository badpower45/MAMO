import { Target, Trophy, Users } from 'lucide-react';

export function WhoWeAre() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To inspire and empower athletes to reach their full potential through dedication, teamwork, and relentless pursuit of excellence.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in every training session, every competition, and every moment. Success is built on consistent effort.'
    },
    {
      icon: Users,
      title: 'Community',
      description: "More than a team, we're a family. We support, motivate, and push each other to become the best versions of ourselves."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 px-2">
            WHO <span className="underline decoration-red-600 decoration-4 underline-offset-8">WE ARE</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
            Team Momen Tarek is a community of dedicated athletes committed to pushing boundaries and achieving greatness together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group px-2">
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className="bg-gray-800 group-hover:bg-red-600 transition-colors duration-300 rounded-xl md:rounded-2xl p-4 md:p-6 inline-block">
                  <value.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
