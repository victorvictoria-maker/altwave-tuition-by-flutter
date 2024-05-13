import faqs from "../assets/data/faqs";
import FaqItem from "../components/FaqItem";
import Navbar from "../components/Navbar";
import { useState } from "react";

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
              src='https://s3-alpha-sig.figma.com/img/afbf/88ec/5151065bd3b1d1e6d913efcd76955c90?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgdzgGvfFhFd3xXCv0psDP1h9fVO7CAjh0pdZs7CqQYvOApCcHbPW~vYgdq89BCBy4DpMZV0r-a1W3G8xIkqfs7Ck~m0Zyna3SaFdphW8ZnOaDsFEYvPG8WUpLC78ILTvRQ0yOWuFSgTCV3OCxuE6J5O5WOs~vg~HhjhW8~QHQZhedukpf9nzd8vPbRtVtU~gQRI3hDOilGpOlLdNjxxyfWlYaDxl~lJxkWxcmMmHkh22~Q8EmGLaDjzM9yt04PT3HwftWvybWYevHWWlK2FizA3y6-43yCOp~vGr46ynb0o-~9DqmgtCx6kuyunG5liArSiHdeZcux9nqWAu59Uiw__'
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
