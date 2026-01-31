import Footer from "../components/Footer";
import GreenPawPass from "../components/GreenPawPass";
import BlackPawPass from "../components/BlackPawPass";
import RedPawPass from "../components/RedPawPass";
import PassHero from "../components/PassHero";
import GoldPawPass from "../components/GoldPawPass";
import AlphaPawPass from "../components/AlphaPawPass";
import Passes from "../components/Passes";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col  dark:bg-black w-full  bg-cover">
      <PassHero />
      <Passes/>
      <GreenPawPass  />
      <BlackPawPass  />
      <RedPawPass  />
      <GoldPawPass  />
      <AlphaPawPass  />
      <Footer/>
    </div>
  );
}
