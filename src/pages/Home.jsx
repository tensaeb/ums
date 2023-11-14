import { Outlet } from "react-router-dom";
import Header from "../components/Common/Header";
import HeroSection from "../components/Home/HeroSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Outlet />
    </>
  );
};

export default Home;
