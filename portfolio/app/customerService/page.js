'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CustomerServices = () => {
  const [isHoveredTech, setIsHoveredTech] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.add('showRight');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.remove('showRight');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    const hiddenElementsRight = document.querySelectorAll('.hideRight');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElementsRight.forEach((el) => observer.observe(el));

    // Clean up the observer
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElementsRight.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleHoverTech = () => {
    setIsHoveredTech(true);
  };

  const handleMouseLeaveTech = () => {
    setIsHoveredTech(false);
  };

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

  const divTechnologyMobile = {
    background: 'url(/images/technology.gif) no-repeat',
    backgroundSize: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div className=''>
      <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='text-left pb-10 my-20 sm:my-80 hide present'>
          <h2 className='text-3xl font-semibold tracking-tighter text-zinc-700 sm:text-6xl'>
            The Secret Sauce: How Customer Service Influenced My Journey
          </h2>
          <p className='text-black text-md  mt-5 font-thin sm:text-xl present hide'>
            Nurturing Soft Skills for a Fulfilling Career Path in a Dynamic Work
            Environment
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 gap-8'>
          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='w-full sm:w-2/5 font-semibold mb-10 text-2xl sm:text-6xl text-zinc-700 present hide'>
              Outback Steakhouse: Where It All Began
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full pr-0 sm:pr-80 sm:text-xl sm:w-3/5 present hide'>
              It all started at Outback Steakhouse, where I stepped into the
              bustling realm of waitstaff. As a fresh-faced 18-year-old, I
              quickly learned that serving hungry patrons was no piece of cake,
              but boy, did I relish the challenge! Balancing plates like a
              circus performer and juggling orders with finesse, I became a
              master of multitasking. And let's not forget the time I
              accidentally spilled a plate of fries on my unsuspecting
              boss—oops, talk about adding a dash of surprise to the dining
              experience!
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='font-semibold mb-10 text-2xl w-full text-zinc-700 ml-auto sm:text-6xl sm:w-2/5 presentRight hideRight'>
              Luxury Salesman: Providing Exquisite Experiences
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full ml-auto sm:w-2/5 sm:text-xl presentRight hideRight'>
              But my journey didn't stop there, my friends. Oh no, I had bigger
              plans and a mischievous twinkle in my eye. I set off on a new
              adventure as a Luxury Salesman. Picture this: me, a charming
              salesperson, trying to convince customers that a diamond-encrusted
              pen was an absolute necessity in their lives. Who knew selling
              luxury goods could be such a riot?
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32 '>
            <h2 className='w-full sm:w-2/5 font-semibold mb-10 text-2xl sm:text-6xl text-zinc-700 present hide'>
              Interpreter: Bridging Language Barriers
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full pr-0 sm:pr-80 sm:text-xl sm:w-3/5 present hide'>
              As fate would have it, I found myself in a linguistic labyrinth as
              an Interpreter at West Group. Now, you might think language
              translation is a serious business, but let me tell you, humor
              knows no bounds! Picture a foreign student struggling to
              understand a complex lecture, and then, like a linguistic
              superhero, I swooped in with a hilarious metaphor that made
              everything click. Laughter became the universal language, breaking
              down barriers and forging connections with a side-splitting twist.
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='font-semibold mb-10 text-2xl w-full text-zinc-700 ml-auto sm:text-6xl sm:w-2/5 presentRight hideRight'>
              Bar Manager: Crafting Memorable Experiences
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full ml-auto sm:w-2/5 sm:text-xl presentRight hideRight'>
              The adventure continued as I took on the role of a Bar Manager,
              where mixology and creativity merged in a delightful cocktail. I
              became the maestro of mirth, training new employees while infusing
              moments of lightheartedness into their learning experiences. The
              bar became my stage, and I orchestrated an exceptional drinks menu
              that tickled the taste buds and set the scene for unforgettable
              experiences. The bar's organization was my muse, and I painted a
              masterpiece of efficiency and indulgence, leaving customers
              awestruck and thirsting for more.
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='w-full sm:w-2/5 font-semibold mb-10 text-2xl sm:text-6xl text-zinc-700 present hide'>
              Head Barista: Brewing Perfection
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full pr-0 sm:pr-80 sm:text-xl sm:w-3/5 present hide'>
              And then, destiny led me into the aromatic world of coffee as a
              Head Barista. With a caffeine-fueled wit, I transformed each cup
              of joe into a delightful experience. Imagine a coffee store filled
              with the rich aroma of freshly brewed magic and customers eager
              for their daily dose of caffeinated happiness. As I crafted
              intricate latte art and brewed the perfect cup, I couldn't resist
              adding a sprinkle of humor to each interaction.
            </p>
          </div>
        </div>

        <div className='text-left mt-12 px-10 sm:px-16'>
          <h2 className='text-2xl sm:text-5xl font-semibold text-zinc-700 mb-2 presentRight hideRight'>
            Volunteering: Making a Difference
          </h2>
          <p className='text-gray-700 present hide'>
            Beyond my professional experiences, I dedicated time to volunteer at
            Viva Rio. It was a fulfilling opportunity to contribute to social
            services and witness the positive impact an organization can have on
            a community. From organizing blood donations to fundraising for
            underprivileged communities, I learned the value of giving back and
            how small actions can transform lives. My volunteer work taught me
            the importance of community engagement and social responsibility.
          </p>
        </div>
      </div>
      <div className='p-10 h-auto mt-28'>
        <div className='text-center pb-5 '>
          <p className='text-xl sm:text-3xl font-bold'>
            Ready to explore more? Discover my expertise in Technology!
          </p>
        </div>
        <div className='text-center '>
          <p className='text-sm sm:text-md'>
            Embark on a journey where captivating front-end design converges
            with impenetrable cybersecurity. With a passion for crafting
            exceptional digital experiences, I bring a unique blend of expertise
            and creativity to every project.
          </p>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 hidden sm:block'>
          <div
            className='h-96 flex items-center justify-center cursor-pointer'
            style={divTechnology}
            onMouseEnter={handleHoverTech}
            onMouseLeave={handleMouseLeaveTech}
            onClick={() => router.push('/technology')}
          >
            <p className=' text-2xl font-bold w-full text-center'>Technology</p>
          </div>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 block sm:hidden'>
          <div
            className='flex items-center justify-center h-64 mt-10'
            style={divTechnologyMobile}
            onClick={() => router.push('/technology')}
          >
            <p className=' text-2xl font-bold w-full text-center text-orange-500'>
              Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;
