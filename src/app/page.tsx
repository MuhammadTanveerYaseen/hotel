"use client"
import HeroSection from './Hero/page';
import PriceSection from './PriceSection/page';
import AddressWithMap from "./AdressWithMap/page";
import Review from "./Review"

export default function Home() {
  return (
    <div>
      <HeroSection/>
    <div id = "price">
    <PriceSection/>
    </div>
    <div>
      <Review></Review>
    </div>
    <section  id="location" className="bg-cover bg-center flex justify-center items-center h-4/5 " style={{ backgroundImage: "url('/bed.jpg')" }}>
        <AddressWithMap></AddressWithMap>
      </section>

    </div>
  );
}
