"use client"
import HeroSection from './Hero/page';
import PriceSection from './PriceSection/page';
import Gallery from './Gallery';
import ContactPage from './ContactUs/page';
import Review from "./Review"

export default function Home() {
  return (
    <div>
      <HeroSection/>
    <div id = "price">
    <PriceSection/>
    <Gallery></Gallery>
    </div>
    <div className='bg-slate-900'>
      <Review></Review>
    </div>
    <section>
      <ContactPage></ContactPage>
    </section>
    

    </div>
  );
}
