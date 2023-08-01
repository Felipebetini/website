'use client';

import 'animate.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [isHoveredTech, setIsHoveredTech] = useState(false);
  const [isHoveredCustomer, setIsHoveredCustomer] = useState(false);

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

  const router = useRouter();

  const divTechnology = {
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
  const divCustomer = {
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

  const divTechnologyMobile = {
    background: 'url(/images/technology.gif) no-repeat',
    backgroundSize: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const divCustomerMobile = {
    background: 'url(/images/climb.gif) no-repeat',
    backgroundSize: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <section>
      <div className='h-auto mb-16 md:mb-20 sm:mb-0  sm:h-screen'>
        <header id='header'>
          <div className='text-center mt-16 sm:mt-24'>
            <h1 className='animate__animated animate__fadeInDown text-3xl sm:text-5xl'>
              Felipe Betini Ribeiro
            </h1>
            <p className='animate__animated animate__fadeInDown animate__slow'>
              Welkom!
            </p>
          </div>
        </header>

        <div className='flex justify-center my-32 h-auto sm:my-5'>
          <img src='images/hallo.gif' height={500} alt='Hallo' />
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
                alt='wie is Felipe'
              />
            </div>
            <div className='px-0 md:px-0 sm:px-52 my-5 wow bounceInUp'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Wie is Felipe?
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                Ik ben een front-end webontwikkelaar met een achtergrond in
                cybersecurity en ik ben een gemakkelijke persoon. Werken in een
                team? Appeltje-eitje! Nieuwe technologieën leren? Kom maar op!
              </p>
            </div>
          </div>
          <div className='present hide'>
            <div>
              <img
                className='rounded-full h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/safe.gif'
                alt='Veilig'
              />
            </div>
            <div className='px-0 sm:px-52 md:px-0 my-5'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Veilig
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                Met 2 jaar ervaring in cybersecurity heb ik geleerd dat "het
                beter is om veilig te zijn dan spijt te hebben." Daarom geef ik
                prioriteit aan de implementatie van veilige
                ontwikkelingspraktijken in mijn werk.
              </p>
            </div>
          </div>
          <div className='present hide'>
            <div>
              <img
                className='rounded h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/cameleon.gif'
                alt='Adaptief'
              />
            </div>
            <div className='px-0 sm:px-52 md:px-0 my-5'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Adaptief
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                Gedurende mijn ervaring heb ik blootstelling gehad aan een breed
                scala aan technologieën en tools. Ik kan me aanpassen aan uw
                behoeften, of het nu gaat om frameworks of puur HTML.
              </p>
            </div>
          </div>
          <div className='present hide'>
            <div>
              <img
                className='rounded h-24 w-24 sm:h-32 sm:w-32 m-auto'
                src='images/responsive.gif'
                alt='Responsief'
              />
            </div>
            <div className='px-0 sm:px-52 md:px-0 my-5'>
              <p className='text-zinc-50 text-lg sm:text-3xl font-bold mb-5'>
                Responsief
              </p>
              <p className='text-zinc-100 text-xs sm:text-base'>
                Ik focus op reactievermogen en zorg voor de beste
                gebruikerservaring op verschillende apparaten en schermformaten.
                Mijn doel is om gebruiksvriendelijke interfaces te creëren.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='block w-full sm:flex sm:w-5/6 m-auto '>
        <div className='w-full text-center sm:text-left p-6 sm:p-0 sm:w-2/4 grid items-center hide present'>
          <p>
            Maar wacht, er is meer! In het verleden was ik een barman, waar ik
            adembenemende cocktails creëerde en zelfs latte art maakte. Ik wist
            klanten te charmeren als verkoper, en verrassing! Ik was een
            stagiair in een kinderziekenhuis, als radioloog. En weet je wat? Ik
            werkte ook freelance als tolk. Ja, ik kan taalbarrières moeiteloos
            overbruggen.
          </p>
        </div>
        <div className='w-full sm:w-2/4 flex justify-center hide present'>
          <img
            className=''
            src='/images/head.gif'
            height={380}
            width={380}
            alt='Diverse'
          />
        </div>
      </div>
      <div className='w-full my-10'>
        <p className='text-3xl font bold text-center w-5/6 m-auto text-black'>
          Ontdek mijn diverse ervaringen!
        </p>
      </div>
      <div className='hidden sm:flex h-96 my-24 px-16 space-x-5'>
        <div
          className='w-1/2 flex items-center justify-center cursor-pointer'
          style={divTechnology}
          onMouseEnter={handleHoverTech}
          onMouseLeave={handleMouseLeaveTech}
          onClick={() => router.push('/nl/technology')}
        >
          <p className=' text-2xl font-bold w-full text-center'>Technologie</p>
        </div>
        <div
          className='w-1/2 flex items-center justify-center cursor-pointer'
          style={divCustomer}
          onMouseEnter={handleHoverCustomer}
          onMouseLeave={handleMouseLeaveCustomer}
          onClick={() => router.push('/nl/customerService')}
        >
          <p className=' text-2xl font-bold w-full text-center'>
            Klantenservice
          </p>
        </div>
      </div>

      <div className='block sm:hidden h-auto px-10'>
        <div
          className='flex items-center justify-center h-52 '
          style={divTechnologyMobile}
          onClick={() => router.push('/nl/technology')}
        >
          <p className=' text-2xl font-bold w-full text-center text-orange-500'>
            Technologie
          </p>
        </div>
        <div
          className='flex items-center justify-center h-52 mt-10'
          style={divCustomerMobile}
          onClick={() => router.push('/nl/customerService')}
        >
          <p className=' text-2xl font-bold w-full text-center text-orange-500'>
            Klantenservice
          </p>
        </div>
      </div>
    </section>
  );
}
