function HomePage() {
  return (
    <div className="">
      <div className="bg-[url('https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960')] text-white bg-no-repeat bg-cover relative -mt-[98px] lg:-mt-[117px] pt-[98px] lg:pt-[117px]">
        <div className="bg-black absolute inset-0 opacity-50"></div>

        <section className="container pt-10 lg:pt-[94px] pb-[431px] z-[9999] relative">
          <h1 className="md:leading-[60px] leading-[50px] text-[50px] md:text-[60px] font-bold flex flex-col">
            Adopt a Pet
            <span className="font-normal">
              give a home to <br />a loving companion
            </span>
          </h1>
          <div className="flex items-center gap-[14px] mt-[43px] flex-wrap">
            <a href="/pets" className="btn-primary flex items-center gap-2">
              Explore Our Pets
              <img src="assets/arrow.svg" alt="" />
            </a>
            <a href="/about" className="btn-secondary flex items-center gap-2">
              Learn About Adoption
              <img src="assets/arrow.svg" alt="" />
            </a>
          </div>
        </section>
      </div>

      <section class="container z-[9999] relative">
        <section class="grid grid-cols-1 lg:grid-cols-[461px_auto] gap-[43px] mb-[76px] mt-[-221px] bg-white rounded-[24px] overflow-hidden custom-shadow">
          <img
            src="https://thegracecat.com/wp-content/uploads/2023/03/Persian-cat-Chincilla.png"
            alt="img"
            class="w-full h-full object-cover"
          />
          <div class="pt-[40px] px-6 lg:px-0 lg:pr-[132px] pb-4">
            <h3 class="section-title mb-[22px] text-black">
              Our Vision and Mission
            </h3>
            <p class="mb-[22px]">
              Our vision is a world where every abandoned pet finds a loving and
              caring home. We strive to be a beacon of hope for pets in need,
              ensuring they receive the love and attention they deserve.
            </p>
            <p class="mb-[22px]">
              Our mission is to rescue, rehabilitate, and rehome abandoned
              animals. We are committed to promoting responsible pet ownership
              and raising awareness about the importance of adopting rather than
              purchasing pets.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
export default HomePage;
