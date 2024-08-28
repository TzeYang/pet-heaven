import { useState } from "react";

function PetReleaseForm() {
  const [formData, setFormData] = useState({
    petName: "",
    petAge: "",
    petBreed: "",
    reasonForRelease: "",
    ownerName: "",
    ownerContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to server or API
    console.log(formData);
  };

  return (
    <div>
      <div className="">
        <div className="bg-[url('https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960')] text-white bg-no-repeat bg-cover relative -mt-[98px] lg:-mt-[117px] pt-[98px] lg:pt-[117px]">
          <div className="bg-black absolute inset-0 opacity-50"></div>

          <section className="container pt-10 pb-28 z-[9999] relative">
            <h1 className="md:leading-[60px] leading-[50px] text-[50px] md:text-[60px] font-bold flex flex-col">
              Release Pet
            </h1>
          </section>
        </div>
      </div>

      <div className="container"></div>

      <section class="bg-[#F5E8DC] py-10">
        <div class="container ">
          <div class="bg-white px-4 py-4 rounded-[16px]">
            <div class="flex flex-col gap-2 bg-white px-[21px] py-[16px] rounded-[16px] custom-shadow h-full">
              <span class="font-bold text-[20px] mb-[18px]">Release</span>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Pet Name"
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  class="bg-[#FAFAFA] rounded-lg p-3"
                />
                <input
                  placeholder="Pet Age"
                  type="email"
                  name="petAge"
                  value={formData.petAge}
                  onChange={handleChange}
                  class="bg-[#FAFAFA] rounded-lg p-3"
                />
                <input
                  placeholder="Breed"
                  type="text"
                  name="petBreed"
                  value={formData.petBreed}
                  onChange={handleChange}
                  class="bg-[#FAFAFA] rounded-lg p-3"
                />
                <input
                  placeholder="Reason For Release"
                  type="text"
                  name="reasonForRelease"
                  value={formData.reasonForRelease}
                  onChange={handleChange}
                  class="bg-[#FAFAFA] rounded-lg p-3"
                />

                <input
                  placeholder="Owner Name"
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  class="bg-[#FAFAFA] rounded-lg p-3"
                />
                <input
                  placeholder="Owner Contact"
                  type="text"
                  name="ownerContact"
                  value={formData.ownerContact}
                  onChange={handleChange}
                  class="bg-[#FAFAFA] rounded-lg p-3"
                />
                <button type="submit" class="btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PetReleaseForm;
