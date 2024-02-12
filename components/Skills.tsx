'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Skills(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };


    return <div id="skills">
        <Carousel 
            rewind={true}	
            rewindWithAnimation={true}
            centerMode={false}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        >
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/angular-logo.png" alt="Angular Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/bootstrap-logo.png" alt="Bootstrap Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/python-logo.png" alt="Python Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/javascript-logo.png" alt="JavaScript Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/java-spring-logo.png" alt="Java Spring Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/html-logo.png" alt="HTML Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/node-logo.png" alt="Node Logo" />
        </div>
        <div className="flex justify-center align-middle items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 h-150">
            <img src="/images/css-logo.png" alt="CSS Logo" />
        </div>
    </Carousel>
    </div>;
}