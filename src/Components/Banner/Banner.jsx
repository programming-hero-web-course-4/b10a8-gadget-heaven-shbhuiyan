import FloatingBanner from "./FloatingBanner";

const Banner = () => {


  return (
    <div className="hero rounded-b-xl pt-6 pb-20 md:pb-64 relative text-white bg-gradient-to-t from-purple-700 to-purple-500 md:px-10 mb-64">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold md:leading-normal">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <a href="#home"  className="bg-white text-purple-500 text-2xl font-semibold px-5 py-2 rounded-3xl duration-500 hover:scale-105">Shop Now</a>
        </div>
      </div>
      <FloatingBanner></FloatingBanner>
    </div>
  );
};

export default Banner;