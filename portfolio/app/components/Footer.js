import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center'>
      <div className='flex justify-center transform translate-y-6 relative z-[-1]'>
        <img
          className='flex justify-center'
          src='/images/running.gif'
          alt='astronaut run'
        />
      </div>
      <div className='footerContent z-[5]'>
        <div className='pt-5'>
          <p className='text-white text-lg py-2'>Where can you find me?</p>
          <div className='flex justify-center'>
            <SocialLink
              url='https://www.linkedin.com/in/felipe-betini-79ab02198/'
              imageSrc='images/linkedin.png'
              alt='LinkedIn'
            />
            <SocialLink
              url='https://github.com/Felipebetini'
              imageSrc='images/git.png'
              alt='GitHub'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ url, imageSrc, alt }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <img
        className='hover:bg-cyan-400 transition duration-400 ease-in-out rounded-full'
        src={imageSrc}
        height={50}
        width={50}
        alt={alt}
      />
    </a>
  );
};

export default Footer;
