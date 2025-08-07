import Hero from '@/components/Hero';
import FeaturedTracks from '@/components/FeaturedTracks';
import MusicCategories from '@/components/MusicCategories';
import LatestNews from '@/components/LatestNews';

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <FeaturedTracks />
      <MusicCategories />
      <LatestNews />
    </div>
  );
}