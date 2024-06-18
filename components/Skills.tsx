"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

export default function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div id="skills">
      <div
        className="flex justify-center align-middle py-10 text-center"
        style={{ background: "rgb(243, 243, 243)", paddingTop: "80px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-normal font-medium text-2xl py-0 my-0 md:text-3xl">
            {"Technologies that I'm familiar with"}
          </h2>
        </motion.div>
      </div>
      <Carousel
        rewind={true}
        rewindWithAnimation={true}
        centerMode={false}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/angular-logo.png" alt="Angular Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/bootstrap-logo.png" alt="Bootstrap Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/python-logo.png" alt="Python Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/javascript-logo.png" alt="JavaScript Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/java-spring-logo.png" alt="Java Spring Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/html-logo.png" alt="HTML Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/node-logo.png" alt="Node Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-5 h-150">
          <img src="/images/css-logo.png" alt="CSS Logo" />
        </div>
      </Carousel>
    </div>
  );
}
