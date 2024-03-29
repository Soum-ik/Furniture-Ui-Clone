import Navbar from "../src/Navbar/index";
import Hero from "../src/Hero/index";
import Benefit from "./Benefit";
import Exlucive from "./Exclusive";
import Categories from "./Categories";
import ProfChair from "./Prof";
import Review from "./review";
import Footer from "./Footer";
 
export default function App() {
  return (
    <div className="  min-h-screen">
      <Navbar />
      <Hero />
      <Benefit />
      <Exlucive/>
      <Categories/>
      <ProfChair/>
      <Review/>
      <Footer/>
    </div>
  );
}
