// FaqItem.js
const FaqItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { question, answer, isOpen, toggleAccordion } = props;
  return (
    <li
      className='py-12  cursor-pointer border-b border-solid border-black'
      onClick={toggleAccordion}
    >
      <div className='flex items-center justify-between gap-5'>
        <h4 className='text-[16px] md:text-[24px] leading-5 lg:text-[32px] font-[700] lg:leading-7 '>
          {question}
        </h4>
        <div
          className={`${
            isOpen ? "bg-primaryColor text-white" : ""
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded-full flex items-center justify-center`}
        >
          {isOpen ? (
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 6L8 10L12 6'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 10L8 6L4 10'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </div>
      </div>

      {isOpen && (
        // <div className='mt-4'>
        <p className='text-[12px] md:text-[20px] leading-4 md:leading-6 lg:text-[30px] lg:leading-7 font-[400] mt-5'>
          {answer}
        </p>
        // </div>
      )}
    </li>
  );
};

export default FaqItem;
