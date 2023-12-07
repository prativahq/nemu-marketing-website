import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

export const Faq = ({ faqs }) => {
  return (
    <section
      className="py-24 bg-white"
      // style={{
      //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4  leading-5 text-emerald-500  rounded-full shadow-sm">
            FAQs
          </span>
          <h2 className="mb-10 text-4xl md:text-5xl leading-tight text-coolGray-900 font-medium tracking-tighter font-heading">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4  max-w-3xl mx-auto">
          {faqs.map((faq) => {
            return (
              <Disclosure>
                <Disclosure.Button className="p-4 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-start ">
                  <div className="w-fit text-left"> {faq.question}</div>
                  <ChevronDown className="ml-auto" />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4  text-coolGray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </Disclosure>
            );
          })}
        </div>

        {/* <div className='max-w-3xl mx-auto'>
        <a
          className='flex flex-wrap w-full p-10 mb-8 text-coolGray-300 hover:text-coolGray-400 bg-coolGray-50 text-left border border-transparent hover:border-coolGray-200 rounded-md shadow-lg transition duration-200'
          href='#'
        >
          <div className='w-full md:w-3/4 lg:w-auto lg:pr-10'>
            <h3 className='mb-4 text-xl text-coolGray-900 font-medium'>
              I'm not great with technology. Is that going to be a
              problem?
            </h3>
            <p className='text-coolGray-500 '>
              Orders are usually shipped within 1-2 business days after
              placing the order.
            </p>
          </div>
          <div className='ml-auto'>
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.71 8.29C12.6149 8.19896 12.5028 8.12759 12.38 8.08C12.1365 7.97998 11.8635 7.97998 11.62 8.08C11.4972 8.12759 11.3851 8.19896 11.29 8.29L8.29 11.29C8.1017 11.4783 7.99591 11.7337 7.99591 12C7.99591 12.2663 8.1017 12.5217 8.29 12.71C8.4783 12.8983 8.7337 13.0041 9 13.0041C9.2663 13.0041 9.5217 12.8983 9.71 12.71L11 11.41L11 15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15L13 11.41L14.29 12.71C14.383 12.8037 14.4936 12.8781 14.6154 12.9289C14.7373 12.9797 14.868 13.0058 15 13.0058C15.132 13.0058 15.2627 12.9797 15.3846 12.9289C15.5064 12.8781 15.617 12.8037 15.71 12.71C15.8037 12.617 15.8781 12.5064 15.9289 12.3846C15.9797 12.2627 16.0058 12.132 16.0058 12C16.0058 11.868 15.9797 11.7373 15.9289 11.6154C15.8781 11.4936 15.8037 11.383 15.71 11.29L12.71 8.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51808 6.3459 2.7612 8.17316C2.00433 10.0004 1.80629 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34783 20.9464 6.80429 19.0711 4.92893C18.1425 4.00034 17.0401 3.26375 15.8268 2.7612C14.6136 2.25865 13.3132 2 12 2ZM12 20C10.4177 20 8.87103 19.5308 7.55544 18.6518C6.23984 17.7727 5.21446 16.5233 4.60896 15.0615C4.00346 13.5997 3.84503 11.9911 4.15372 10.4393C4.4624 8.88743 5.22432 7.46196 6.34314 6.34314C7.46196 5.22432 8.88743 4.4624 10.4393 4.15371C11.9911 3.84503 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55543C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </a>
        <a
          className='flex flex-wrap w-full p-10 mb-8 text-coolGray-300 hover:text-coolGray-400 bg-coolGray-50 text-left border border-transparent hover:border-coolGray-200 rounded-md shadow-lg transition duration-200'
          href='#'
        >
          <div className='w-full md:w-3/4 lg:w-auto lg:pr-10'>
            <h3 className='text-xl text-coolGray-900 font-medium'>
              Is this something that will fit my situation?
            </h3>
          </div>
          <div className='ml-auto'>
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </a>
        <a
          className='flex flex-wrap w-full p-10 mb-8 text-coolGray-300 hover:text-coolGray-400 bg-coolGray-50 text-left border border-transparent hover:border-coolGray-200 rounded-md shadow-lg transition duration-200'
          href='#'
        >
          <div className='w-full md:w-3/4 lg:w-auto lg:pr-10'>
            <h3 className='text-xl text-coolGray-900 font-medium'>
              How much does Nemu cost?
            </h3>
          </div>
          <div className='ml-auto'>
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </a>
        <a
          className='flex flex-wrap w-full p-10 text-coolGray-300 hover:text-coolGray-400 bg-coolGray-50 text-left border border-transparent hover:border-coolGray-200 rounded-md shadow-lg transition duration-200'
          href='#'
        >
          <div className='w-full md:w-3/4 lg:w-auto lg:pr-10'>
            <h3 className='text-xl text-coolGray-900 font-medium'>
              Can I start with a free trial before buying?
            </h3>
          </div>
          <div className='ml-auto'>
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </a>
      </div> */}
      </div>
    </section>
  );
};
