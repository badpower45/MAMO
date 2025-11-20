import { Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function JoinTheTeam() {
  const contacts = [
    {
      icon: Instagram,
      platform: 'Instagram',
      handle: '@team_momen_tarek',
      link: 'https://instagram.com/team_momen_tarek',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: MessageCircle,
      platform: 'TikTok',
      handle: '@team_c.momentarek',
      link: 'https://tiktok.com/@team_c.momentarek',
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: Facebook,
      platform: 'Facebook',
      handle: 'Team Momen Tarek',
      link: 'https://facebook.com/teammomen.tarek',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Phone,
      platform: 'WhatsApp',
      handle: '01282552381 / 01033663854',
      link: 'https://wa.me/201282552381',
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 px-2">
            JOIN THE <span className="text-red-600">TEAM</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg px-4">
            Ready to push your limits? Get in touch with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact Cards */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-6 md:mb-8 px-2">Connect With Us</h3>
            <div className="grid gap-3 md:gap-6">
              {contacts.map((contact, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-600 transition-colors duration-300">
                  <CardContent className="p-4 md:p-6">
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 md:gap-4 group"
                    >
                      <div className={`bg-gradient-to-r ${contact.color} p-3 md:p-4 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-400 text-xs md:text-sm">{contact.platform}</div>
                        <div className="text-white text-sm md:text-lg truncate">{contact.handle}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 md:p-12 rounded-xl md:rounded-2xl text-center">
            <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">Ready to Start?</h3>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-red-100 px-2">
              Join our community of dedicated athletes and take your training to the next level.
            </p>
            <Button 
              onClick={() => window.open('https://instagram.com/team_momen_tarek', '_blank')}
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto"
            >
              <Instagram className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Follow Us on Instagram
            </Button>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-red-500">
              <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl mb-1 md:mb-2">300+</div>
                  <div className="text-red-200 text-xs md:text-sm">Athletes</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl mb-1 md:mb-2">200+</div>
                  <div className="text-red-200 text-xs md:text-sm">Medals</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl mb-1 md:mb-2">#1</div>
                  <div className="text-red-200 text-xs md:text-sm">in Egypt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
