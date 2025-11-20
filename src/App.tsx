import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { OurHistory } from './components/OurHistory';
import { ChampionshipGlory } from './components/ChampionshipGlory';
import { MeetTheFounder } from './components/MeetTheFounder';
import { OurJourney } from './components/OurJourney';
import { JoinTheTeam } from './components/JoinTheTeam';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhoWeAre />
      <OurHistory />
      <ChampionshipGlory />
      <MeetTheFounder />
      <OurJourney />
      <JoinTheTeam />
      <Footer />
    </div>
  );
}
