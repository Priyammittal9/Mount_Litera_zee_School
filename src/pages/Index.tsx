import Header from '../components/Header';
import Hero from '../components/Hero';
import Announcements from '../components/Announcements';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedCourses from '../components/FeaturedCourses';
import Activities from '../components/Activities';
import { Gallery } from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import LatestNews from '../components/LatestNews';
import ContactCTA from '../components/ContactCTA';
import EnrollCTA from '../components/EnrollCTA';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection'; // Make sure this file exists

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Announcements />
      <LatestNews />
      <WhyChooseUs />
      <FeaturedCourses />
      <Activities />
      <EnrollCTA />
      <Gallery />
      <Testimonials />
      <ContactCTA />
      <MapSection /> {/* Added Map section here */}
      <Footer />
    </div>
  );
};

export default Index;
