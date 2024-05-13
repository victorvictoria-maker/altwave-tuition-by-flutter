import faqs from "../assets/data/faqs";
import FaqItem from "../components/FaqItem";
import Navbar from "../components/Navbar";
import { useState } from "react";
import HeroImage from "../assets/images/heroImage.png";
// girl-holding-book.png.png

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='p-4 md:p-8 lg:p-12'>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className='flex flex-col md:flex-row h-1/2'>
          <div className='md:w-1/2 flex flex-col justify-center items-start p-8 '>
            <h1 className='max-w-full text-4xl md:text-5xl lg:text-7xl font-bold mb-4'>
              Pay Local, <br /> Study Anywhere <br /> with{" "}
              <span className='text-greenColour'>Tuition</span>
            </h1>
            <p className='lg:text-lg md:text-sm'>
              Power up your education! Quick and easy tuition fee payments to
              African and international schools, so you can take the hassle out
              of paying for school.
            </p>
            <div className='pt-8 flex justify-start'>
              <button className='bg-blueColour text-white font-bold py-3 px-6 mr-5 md:mr-6 rounded'>
                Get Started
              </button>
              <button className='bg-greyColour font-bold py-3 px-8 rounded'>
                Sign Up
              </button>
            </div>
          </div>

          <div className='md:w-1/2 relative hero-image-wrapper m-2 md:m-6 lg:m-8'>
            <img
              className=' lg:mt-[-120px]'
              src={HeroImage}
              alt='Girl-holding-book'
            />
          </div>
        </section>

        {/* WHY USE TUITION */}

        {/* THE ENTIRE PROCESS */}

        {/* FAQ */}
        <section className='mt-8 px-4'>
          <h2 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold'>
            Frequently asked questions
          </h2>
          <ul className='lg:mt-[38px]'>
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
