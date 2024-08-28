function AboutUs() {
  return (
    <div className="">
      <div className="bg-[url('https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960')] text-white bg-no-repeat bg-cover relative -mt-[98px] lg:-mt-[117px] pt-[98px] lg:pt-[117px]">
        <div className="bg-black absolute inset-0 opacity-50"></div>

        <section className="container pt-10 pb-60 z-[9999] relative">
          <h1 className="md:leading-[60px] leading-[50px] text-[50px] md:text-[60px] font-bold flex flex-col">
            About Us
          </h1>
        </section>
      </div>

      <section class="container z-[9999] relative -mt-[200px]">
        <section class="grid grid-cols-1 lg:grid-cols-[461px_auto] gap-[43px] mb-[76px]  bg-white rounded-[24px] overflow-hidden custom-shadow">
          <img
            src="https://i0.wp.com/www.grownxtdigital.in/wp-content/uploads/2023/06/persian-cat.jpg?fit=1200%2C801&ssl=1"
            alt="img"
            class="w-full h-full object-cover"
          />
          <div class="pt-[40px] px-6 lg:px-0 lg:pr-[132px] pb-4">
            <h3 class="section-title mb-[22px] text-black">
              About Our Pet Adoption Center
            </h3>
            <p class="mb-[22px]">
              At our Pet Adoption Center, we are dedicated to finding loving
              homes for abandoned pets. We operate in many cities across the
              country and collaborate with international partners to ensure that
              every pet has a chance for a better life.
            </p>
            <p class="mb-[22px]">
              We are committed to the well-being of every pet and adhere to the
              highest standards of care.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
export default AboutUs;
