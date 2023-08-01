'use client';

import React, { useState, useEffect } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import 'animate.css';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Technology', href: '/technology' },
  { name: 'Customer Sevice', href: '/customerService' },
  // { name: 'Test', href: '/test' },
];

const navigationNl = [
  { name: 'Thuis', href: '/nl' },
  { name: 'Technologie', href: '/nl/technology' },
  { name: 'Klantenservice', href: '/nl/customerService' },
  // { name: 'Test', href: '/test' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = useState(true);

  const handleSelectLang = (e, path) => {
    console.log(e, 'event');
    if (path === '/nl') {
      console.log('I clicked on the Nether Page');
      setIsEnglish(false);
    }
    if (path === '/') {
      console.log('I clicked on the English Page');
      setIsEnglish(true);
    }
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const languagePath = pathname.split('/')[1];
    setIsEnglish(languagePath !== 'nl');
  }, []);

  return (
    <div>
      <Disclosure
        as='nav'
        className='bg-white shadow-md animate__animated animate__fadeInDown animate__slow'
      >
        {({ open }) => (
          <>
            <div className='mx-auto w-full px-2 sm:px-6 lg:px-8 '>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    <img
                      className='block h-12 w-auto lg:hidden'
                      src='/images/LOGO.png'
                      alt='Logo '
                    />
                    <img
                      className='hidden h-12 w-auto lg:block'
                      src='/images/LOGO.png'
                      alt='Logo'
                    />
                  </div>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      {isEnglish
                        ? navigation.map((item) => (
                            <NavLink
                              key={item.name}
                              href={item.href}
                              pathname={pathname}
                              name={item.name}
                            />
                          ))
                        : navigationNl.map((item) => (
                            <NavLink
                              key={item.name}
                              href={item.href}
                              pathname={pathname}
                              name={item.name}
                            />
                          ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='flex rounded-full text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-orange-500 hover:text-white'>
                        <Link href={isEnglish ? '/nl' : '/'}>
                          <p
                            className='text-xs p-3'
                            onClick={(e) =>
                              handleSelectLang(e, isEnglish ? '/nl' : '/')
                            }
                          >
                            {isEnglish
                              ? 'Ik spreek geen Engels!'
                              : "I don't speak Dutch!"}
                          </p>
                        </Link>
                      </Menu.Button>
                    </div>
                    {/* <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item className='text-center'>
                          <Link href={isEnglish ? '/nl' : '/'}>
                            <p
                              className='text-sm p-3  hover:bg-orange-500 hover:text-white'
                              onClick={(e) =>
                                handleSelectLang(
                                  e,
                                  isEnglish ? '/nl' : '/'
                                )
                              }
                            >
                              {isEnglish
                                ? "I don't speak Dutch!"
                                : 'Ik spreek geen Engels!'}
                            </p>
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition> */}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {isEnglish
                  ? navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        pathname={pathname}
                        name={item.name}
                      />
                    ))
                  : navigationNl.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        pathname={pathname}
                        name={item.name}
                      />
                    ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

const NavLink = ({ href, pathname, name }) => {
  const isCurrent = pathname === href;
  const activeClasses = isCurrent
    ? 'text-orange-500 border-b-2 border-orange-500 px-3 py-5'
    : 'text-gray-300 hover:border-b-2 hover:border-orange-300 hover:text-orange-300 text-sm';
  const inactiveClasses =
    'text-gray-300 hover:border-b-2 hover:border-orange-300 hover:text-orange-300 text-sm px-3 py-5';

  return (
    <a
      href={href}
      className={classNames(
        isCurrent ? activeClasses : inactiveClasses,
        'flex space-x-4 items-center'
      )}
      aria-current={isCurrent ? 'page' : undefined}
    >
      {name}
    </a>
  );
};
