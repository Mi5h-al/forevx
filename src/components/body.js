import React, { useEffect } from "react";
import Animation from "./animation";
// import rocketdab from "../images/rocketdab.png";
// import rocketman from "../images/rocketmaan.png";
// import rocketride from "../images/rocketride.png";
// import rocketlaunch from "../images/rocketlaunch.png";
import car from "../images/car.gif";
import locations from "../images/locations.gif";
import plugged from "../images/plugged.gif";
import burger from "../images/burger.gif";
import coffee from "../images/coffee.gif";
import charging from "../images/charging.gif";
import playstore from "../images/googleplay.png";
import apple from "../images/apple.png";
import location from "../images/location.png";
import electriccar from "../images/electric-car.png";
import pizza from "../images/pizza.png";
import plug from "../images/plug.png";
import handshake from "../images/handshake.png";
import restaurant from "../images/restaurant.png";
import electricstation from "../images/electricstation.png";
import ev from "../images/ev.png";
const Body = (props) => {
  const images = [
    { image: locations, text: "locate" },
    { image: car, text: "get there" },
    { image: plugged, text: "plug in" },
    { image: charging, text: "recharge" },
    { image: burger, text: "order food" },
    { image: coffee, text: "relaax...." },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  let currentImageIndex = 0;

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slideshow").src = images[currentImageIndex]?.image;
    document.getElementById("description").textContent =
      images[currentImageIndex]?.text;
  }
  return (
    <main className="max-w-4xl mx-auto">
      <section
        id="hero"
        aria-label="hero"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-screen"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-6xl font-bold text-center sm:text-6xl sm:text-left text-slate-900 dark:text-white">
            <span
              id="description"
              className="leading-normal bg-cyan-400 dark:-text-indigo-300"
            >
              {" "}
              {images[0].text}
            </span>{" "}
          </h2>
          <p className="max-w-md  mt-10 text-center text-xl sm:text-xl sm:text-left text-slate-700 dark:text-slate-400">
            Ready for a whole new way to travel with your electric car?      
            <span className="text-cyan-500 dark:-text-cyan-300">
              {" "}
              <b>We help you plan entire journey, find charging station effortlessly and ensure you never get bored while charging.</b>
            </span>{" "}
            Its electric travel made simple and fun.😊
          </p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            ForEV{" "}
          </p>
        </article>

        {/* <img class="w-1/2" src={rocketdab} alt="rocket Dab" /> */}
        <div className="w-1/2 border-solid ">
          <img id="slideshow" className="rounded-3xl" src={images[0].image} />
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section
        id="technology"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white  ">
          Our Services
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className=" w-3/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={electriccar} alt="Explore" className="mb-6 w-1/2" />
            <h3 className="text-2xl text-center text-slate-900 dark:text-white">
              TRIP PLANNER.
            </h3>

            <p className="sm:hidden text-xl text-center mt-2 text-slate-900 dark:text-white">
              Plan your trip with ease using our app. Our app provides a route
              planner that shows you the charging stations and restaurants along
              the way.
            </p>
          </li>

          <li className=" w-3/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={location} alt="Gaganyan" className="mb-6 w-1/2" />
            <h3 className="text-2xl text-center text-slate-900 dark:text-white">
              CHARGIN STATION LOCATOR
            </h3>

            <p className="sm:hidden text-xl text-center mt-2 text-slate-900 dark:text-white">
              Discover the charging stations nearby on ForEV app.
            </p>
          </li>

          <li className=" w-3/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={pizza} alt="Voyager" className="mb-6 w-1/2" />
            <h3 className="text-2xl text-center text-slate-900 dark:text-white">
              RESTAURANT FINDER.
            </h3>
            <p className="sm:hidden text-xl text-center mt-2 text-slate-900 dark:text-white">
              Our app allows you to search for restaurants near charging
              stations. You can filter restaurants by cuisine type, rating, and
              distance from the charging station.
            </p>
          </li>
        </ul>
        <span className="dark:bg-[#1c75bc] bg-cyan-100 p-2 rounded-3xl">Learn More</span>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2 " />

      <section id="testimonials" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          What we offer
        </h2>

        <figure className="my-12">
          <blockquote className="bg-[#1c75bc] dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
            <p
              className="text-2xl sm:text-2xl text-left mt-2 text-white dark:text-slate-400 
            before:content-['\201C'] before:font-serif before:absolute before:top-0 
            before:left-0 before:text-9xl before:text-white before:opacity-25 
            before:transform before:translate-x-2 before:translate-y-2
            after:content-['\201D'] after:font-serif after:absolute after:-bottom-20
            after:right-0 after:text-9xl after:text-white after:opacity-25 
            after:transform after:-translate-x-2 after:-translate-y-2"
            >
              <p>WHY CHOOSE FOR EV?</p>
              <p>A Better Way to Plan Electric Vehicle Trip.</p>
              ForEV is dedicated to making electric vehicle travel easier and
              more enjoyable. Our app is designed to provide you with the best
              trip planning experience possible.
            </p>
          </blockquote>
        </figure>
      </section>

      <section id="downloads">
        <h2 className="text-2xl font-bold text-center sm:text-2xl text-slate-900 dark:text-white">
          Download the ForEv app Now
        </h2>
        <figure className="my-4 flex flex-row mx-auto ">
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40  border solid border-gray-500 rounded-3xl"
>
              <img
                src={playstore}
                alt="Download from playstore"
                className="w-10"
              />
              <h3 className="text-xl text-center text-slate-900 dark:text-white">
                Download from Playstore
              </h3>
            </li>
            <li className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40  border solid border-gray-500 rounded-3xl "
>
              <img
                src={apple}
                alt="Download from appstore"
                className="w-10"
              />
              <h3 className="text-xl text-center text-slate-900 dark:text-white">
                Download from Appstore
              </h3>
            </li> 
          </ul>
        </figure>
      </section>

      <section
        id="partners"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-3xl  text-center sm:text-3xl mb-6 text-slate-900 dark:text-white  ">
      Our Partners
        </h2>
        <h4 className="text-xl text-center sm:text-xl mb-6 text-slate-900 dark:text-white  ">
          We work with companies that are dedicated to making electric vehicle
          travel easier and more enjoyable. Our partners include manufacturers
          of electric vehicles, charging station providers, and restaurants.
        </h4>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={ev} alt="ev" className="mb-6 w-1/2" />
            <h3 className="text-xl text-center text-slate-900 dark:text-white">
              ELECTRIC VEHICLE MANUFACTURERS
            </h3>
          </li>

          <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img
              src={electricstation}
              alt="electricstation"
              className="mb-6 w-1/2"
            />
            <h3 className="text-xl text-center text-slate-900 dark:text-white">
              CHARGING STATION PROVIDERS
            </h3>
          </li>
          <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={restaurant} alt="restaurant" className="mb-6 w-1/2" />
            <h3 className="text-xl text-center text-slate-900 dark:text-white">
              RESTAURANTS
            </h3>
          </li>

          <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={handshake} alt="handshake" className="mb-6 w-1/2" />
            <h3 className="text-xl text-center text-slate-900 dark:text-white">
              OTHER PARTNERS
            </h3>
          </li>
        </ul>
      </section>

      <section
        id="contactus"
        className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-2xl font-bold text-center sm:text-2xl mb-6 text-slate-900 dark:text-white">
          Contact Us
        </h2>
        <form
          action=""
          className="max-w-4xl mx-auto text-2xl sm:text-2xl flex flex-col item-left gap-4"
        >
          <label htmlFor="subject">subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="YourSubject"
            className="w-full text-black text-xl sm:text-xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            className="w-full text-black text-xl sm:text-xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          ></textarea>
          <button className="bg-[#1c75bc] hover:bg-cyan-600 active:bg-cyan-600 text-white p-2 w-28 rounded-xl border-xl border border-solid border-slate-900 dark:border-none">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Body;
