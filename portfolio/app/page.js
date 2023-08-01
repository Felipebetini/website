'use client';

import 'animate.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [isHoveredTech, setIsHoveredTech] = useState(false);
  const [isHoveredCustomer, setIsHoveredCustomer] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const arrowElement = document.querySelector('.arrow');
      if (scroll >= 1) {
        arrowElement.classList.add('fade');
      } else {
        arrowElement.classList.remove('fade');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHoverTech = () => {
    setIsHoveredTech(true);
  };

  const handleMouseLeaveTech = () => {
    setIsHoveredTech(false);
  };

  const handleHoverCustomer = () => {
    setIsHoveredCustomer(true);
  };

  const handleMouseLeaveCustomer = () => {
    setIsHoveredCustomer(false);
  };

  const divTechnologyStyles = {
    background: isHoveredTech
      ? 'url(/images/technology.gif) no-repeat center'
      : '#ccc',
    transition: 'background 1s ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isHoveredTech ? 1 : 2,
    color: isHoveredTech ? 'orange' : 'white',
  };

  const divCustomerStyles = {
    background: isHoveredCustomer
      ? 'url(/images/climb.gif) no-repeat center'
      : '#ccc',
    transition: 'background 1s ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isHoveredCustomer ? 1 : 2,
    color: isHoveredCustomer ? 'orange' : 'white',
  };

  const divTechnologyMobileStyles = {
    background: 'url(/images/technology.gif) no-repeat',
    backgroundSize: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const divCustomerMobileStyles = {
    background: 'url(/images/climb.gif) no-repeat',
    backgroundSize: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <section>
      <div className='h-auto mb-16 md:mb-20 sm:mb-0 sm:h-screen'>
        <header id='header'>
          <div className='text-center mt-16 sm:mt-24'>
            <h1 className='animate__animated animate__fadeInDown text-3xl sm:text-5xl'>
              Felipe Betini Ribeiro
            </h1>
            <p className='animate__animated animate__fadeInDown animate__slow'>
              Welcome!
            </p>
          </div>
        </header>

        <div className='flex justify-center my-32 h-auto sm:my-5'>
          <img src='images/hello.gif' height={500} alt='Hello logo' />
        </div>
        <Link href='#firstSec' smooth={'smooth'}>
          <div className='text-center flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-8 h-8 text-orange-500 animate__animated animate-bounce animate__slow arrow'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className='bg-orange-500 h-auto py-10 px-5 ' id='firstSec'>
        <div className='w-full grid grid-cols-2 gap-10 text-center'>
          <div className='text-white present hide'>
            <div>
              <img
                className='rounded h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/who.gif'
                alt='who is Felipe?'
              />
            </div>
            <div className='px-0 md:px-0 sm:px-52 my-5 wow bounceInUp'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Who is Felipe?
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                I'm a front-end web developer with a cybersecurity background,
                and I'm an easy-going person. Working in a team? Piece of cake!
                Learning new technologies? Bring it on!
              </p>
            </div>
          </div>
          <div className='present hide'>
            <div>
              <img
                className='rounded-full h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/safe.gif'
                alt='Security first'
              />
            </div>
            <div className='px-0 sm:px-52 md:px-0 my-5'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Security First
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                With 2 years of experience in cybersecurity, I've learned that
                "it is better to be safe than sorry." so I prioritize the
                implementation of secure development practices in my work.
              </p>
            </div>
          </div>
          <div className='present hide'>
            <div>
              <img
                className='rounded h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/cameleon.gif'
                alt='Adaptive'
              />
            </div>
            <div className='px-0 sm:px-52 md:px-0 my-5'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Adaptive
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                Throughout my experience, I have gained exposure to a wide range
                of technologies and tools. I can adapt to suit your needs,
                whether it's frameworks or pure HTML.
              </p>
            </div>
          </div>
          <div className='present hide'>
            <div>
              <img
                className='rounded h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/responsive.gif'
                alt='responsive'
              />
            </div>
            <div className='px-0 sm:px-52 md:px-0 my-5'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Responsive
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                All my development efforts are focused on responsiveness. With
                the increasing use of mobiles and varying screen sizes, I strive
                to ensure users always have the optimal experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='block w-full sm:flex sm:w-5/6 m-auto '>
        <div className='w-full text-center sm:text-left p-6 sm:p-0 sm:w-2/4 grid items-center hide present'>
          <p>
            But wait, there's more! In my past, I was a bartender, crafting
            jaw-dropping cocktails and also doing some latte art. I charmed
            clients as a salesperson, and surprise! I was an intern at a
            children's hospital, as a radiologist. And guess what? I freelanced
            as an interpreter, yep, I can bridge language barriers with ease.
          </p>
        </div>
        <div className='w-full sm:w-2/4 flex justify-center hide present'>
          <img
            className=''
            src='/images/head.gif'
            height={380}
            width={380}
            alt='Mindblow'
          />
        </div>
      </div>
      <div className='w-full my-10'>
        <p className='text-3xl font bold text-center w-5/6 m-auto text-black'>
          Explore my diverse experiences!
        </p>
      </div>
      <div className='hidden sm:flex h-96 my-24 px-16 space-x-5'>
        <div
          className='w-1/2 flex items-center justify-center cursor-pointer'
          style={divTechnologyStyles}
          onMouseEnter={handleHoverTech}
          onMouseLeave={handleMouseLeaveTech}
          onClick={() => router.push('/technology')}
        >
          <p className='text-2xl font-bold w-full text-center'>Technology</p>
        </div>
        <div
          className='w-1/2 flex items-center justify-center cursor-pointer'
          style={divCustomerStyles}
          onMouseEnter={handleHoverCustomer}
          onMouseLeave={handleMouseLeaveCustomer}
          onClick={() => router.push('/customerService')}
        >
          <p className='text-2xl font-bold w-full text-center'>
            Customer Services
          </p>
        </div>
      </div>

      <div className='block sm:hidden h-auto px-10'>
        <div
          className='flex items-center justify-center h-52 '
          style={divTechnologyMobileStyles}
          onClick={() => router.push('/technology')}
        >
          <p className='text-2xl font-bold w-full text-center text-orange-500'>
            Technology
          </p>
        </div>
        <div
          className='flex items-center justify-center h-52 mt-10'
          style={divCustomerMobileStyles}
          onClick={() => router.push('/customerService')}
        >
          <p className='text-2xl font-bold w-full text-center text-orange-500'>
            Customer Services
          </p>
        </div>
      </div>
    </section>
  );
}
