import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <div className="relative">
        {/* Banner */}
        <Banner></Banner>
        <div className="absolute top-3/4">
          <BannerImg></BannerImg>
        </div>
      </div>

      <div className="mt-96">
        <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      </div>

      {/* products */}
      <div className="grid md:grid-cols-4 gap-14 md:gap-4 mt-24">
        <div className="md:col-span-1">
          <Categories></Categories>
        </div>
        <div className="md:col-span-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
