import logo from "../assets/Logo.png";
const HomeHeader = () => {
  return (
    <div>
      <header>
        <img className="w-[176px] h-8 mt-8 mx-auto " src={logo} />
      </header>
      <section className="mt-40 text-center">
        <h1 className="font-[Nunito] font-bold text-gray md:text-[32px] text-[20px]">
          Welcome to <span className="md:text-bluelight">Weather App</span>
        </h1>
        <p className="text-BaseGray mb-10 text-[14px]">
          Chose a location to see weather Forcast
        </p>
      </section>
    </div>
  );
};

export default HomeHeader;
