import { useState, useEffect } from "react";
import axios from "axios";

const Resource = ({ path, render }) => {
  const initialState = {
    trans: [],
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initialState);

  //async execute task concurrently, multiple task run simultaneously
  //When you define an asynchronous arrow function, you're creating a function that returns a Promise. This Promise is resolved or rejected based on the execution of the function body.
  //A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
  //axios for making HTTP request, get to request the server retrive the data
  const getData = async () => {
    try {
      const result = await axios.get(path);

      console.log(" result ", result);

      const newData = {
        trans: result.data,
        loading: false,
        error: null,
      };

      setState(newData);
    } catch (error) {
      console.log("error in get data", error.message);
    }
  };

  //do something for me when its first loaded
  //getData -> setState(newData) -> data go to serState variable state -> render(state) state here is the data
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {render(state)}
    </div>
  );
};

const PetList = () => {
  const webURL =
    "https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC";

  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);
    //map fn take in a callback fn and return a new array with new values
    //cat -> current value -> can be diff name
    return data.trans.map((cat) => (
      <>
        <div class="relative bg-white py-[13px] px-[15px] rounded-[20px] custom-shadow">
          <img
            src={cat.url}
            alt="cat img"
            class="w-full  h-[218px] object-cover rounded-[13px]"
          />
        </div>
      </>
    ));
  };

  return (
    <div>
      <div className="">
        <div className="bg-[url('https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960')] text-white bg-no-repeat bg-cover relative -mt-[98px] lg:-mt-[117px] pt-[98px] lg:pt-[117px]">
          <div className="bg-black absolute inset-0 opacity-50"></div>

          <section className="container pt-10 pb-28 z-[9999] relative">
            <h1 className="md:leading-[60px] leading-[50px] text-[50px] md:text-[60px] font-bold flex flex-col">
              Pet List
            </h1>
          </section>
        </div>
      </div>
      <div className="container mt-6 pb-10">
        <Resource path={webURL} render={render} />
      </div>
    </div>
  );
};

export default PetList;
