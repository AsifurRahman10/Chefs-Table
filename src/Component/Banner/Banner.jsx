export const Banner = () => {
  return (
    <div className="mt-3">
      <div>
        <div className="bg-hero-pattern bg-no-repeat bg-center w-full bg-cover rounded-2xl">
          <div className="mx-1 lg:w-8/12 lg:mx-auto text-center py-20 md:py-56 text-white space-y-3 lg:space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h2>
            <p>
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="space-x-2">
              <button className="btn bg-[#0BE58A] border-none rounded-full w-[150px]">
                Explore Now
              </button>
              <button className="btn border-2 rounded-full w-[150px] bg-transparent text-white hover:text-black">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
