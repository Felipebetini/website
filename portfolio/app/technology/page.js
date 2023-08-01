'use client';

import React, { useState, useEffect } from 'react';
import { Sora } from 'next/font/google';
import { useRouter } from 'next/navigation';
import 'animate.css';
// import Slider from '../components/Slider';

const sora = Sora({ subsets: ['latin'], weight: '300' });
function shuffleArray(array) {
  // Shuffle logic remains the same
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const words = [
  'Vue',
  'React',
  'Django',
  'Docker',
  'Next.js',
  'PHP',
  'Tailwind',
  'Python',
  'Bootstrap',
  'jQuery',
  'GitHub',
  'UX/UI',
  'Figma',
  'Burp Suite',
  'Nginx',
  'PM2',
  'Certbot',
  'SQLite3',
  'AWS',
  'Linux',
  'TCPDump',
  'FTK Imager',
  'Process Hacker',
  'Yara',
  'OSINT',
  'Wireshark',
  'Volatility',
  'Suricata',
  'Firewall logs',
  'Windows',
  'SIEM',
  'cPanel',
];

const shuffledWords = shuffleArray(words);

export default function Tech() {
  const [selectedWord, setSelectedWord] = useState('');
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [dropTargetColor, setDropTargetColor] = useState('border-gray-500');
  const [isHoveredCustomer, setIsHoveredCustomer] = useState(false);
  const router = useRouter();

  const [words, setWords] = useState([
    'Vue',
    'React',
    'Django',
    'Docker',
    'Next.js',
    'PHP',
    'Tailwind',
    'Python',
    'Bootstrap',
    'jQuery',
    'GitHub',
    'UX/UI',
    'Figma',
    'Burp Suite',
    'Nginx',
    'PM2',
    'Certbot',
    'SQLite3',
    'AWS',
    'Linux',
    'TCPDump',
    'FTK Imager',
    'Process Hacker',
    'Yara',
    'OSINT',
    'Wireshark',
    'Volatility',
    'Suricata',
    'Firewall logs',
    'Windows',
    'SIEM',
    'cPanel',
  ]);

  useEffect(() => {
    setWords(shuffleArray([...words]));
  }, []);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  function handleWordClick(word) {
    setSelectedWord(word);
    if (
      word === 'Tailwind' ||
      word === 'Vue' ||
      word === 'Next.js' ||
      word === 'React' ||
      word === 'Bootstrap' ||
      word === 'jQuery' ||
      word === 'GitHub' ||
      word === 'UX/UI' ||
      word === 'Figma' ||
      word === 'Linux' ||
      word === 'Windows' ||
      word === 'OSINT'
    ) {
      setDropTargetColor('border-green-500');
      setShowAdditionalContent(true);
    } else if (
      word === 'Django' ||
      word === 'Nginx' ||
      word === 'PM2' ||
      word === 'Certbot' ||
      word === 'FTK Imager' ||
      word === 'TCPDump' ||
      word === 'Burp Suite' ||
      word === 'AWS' ||
      word === 'Process Hacker' ||
      word === 'Wireshark' ||
      word === 'SIEM'
    ) {
      setDropTargetColor('border-yellow-500');
      setShowAdditionalContent(true);
    } else if (
      word === 'Docker' ||
      word === 'PHP' ||
      word === 'Python' ||
      word === 'SQLite3' ||
      word === 'Yara' ||
      word === 'Volatility' ||
      word === 'Suricata' ||
      word === 'Firewall logs' ||
      word === 'cPanel'
    ) {
      setDropTargetColor('border-blue-500');
      setShowAdditionalContent(true);
    } else {
      setDropTargetColor('border-gray-500');
    }
  }

  function handleReset() {
    setShowButton(false);
    setSelectedWord('');
    setShowAdditionalContent(false);
    setResetKey((prevKey) => prevKey + 1);
    setDropTargetColor('border-gray-500');
  }

  function drop(ev) {
    ev.preventDefault();
    setShowAdditionalContent(false);
    const data = ev.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);

    if (draggedElement) {
      const droppedWord = draggedElement.textContent;
      draggedElement.style.display = 'none';

      setSelectedWord(droppedWord);

      if (
        droppedWord === 'Tailwind' ||
        droppedWord === 'Next.js' ||
        droppedWord === 'React' ||
        droppedWord === 'Vue' ||
        droppedWord === 'Bootstrap' ||
        droppedWord === 'jQuery' ||
        droppedWord === 'GitHub' ||
        droppedWord === 'UX/UI' ||
        droppedWord === 'Figma' ||
        droppedWord === 'Linux' ||
        droppedWord === 'Windows' ||
        droppedWord === 'OSINT'
      ) {
        setDropTargetColor('border-green-500');
        setShowAdditionalContent(true);
        setShowButton(true);
      } else if (
        droppedWord === 'Django' ||
        droppedWord === 'Nginx' ||
        droppedWord === 'PM2' ||
        droppedWord === 'Certbot' ||
        droppedWord === 'FTK Imager' ||
        droppedWord === 'TCPDump' ||
        droppedWord === 'Burp Suite' ||
        droppedWord === 'AWS' ||
        droppedWord === 'Process Hacker' ||
        droppedWord === 'Wireshark' ||
        droppedWord === 'SIEM'
      ) {
        setDropTargetColor('border-yellow-500');
        setShowAdditionalContent(true);
        setShowButton(true);
      } else if (
        droppedWord === 'Docker' ||
        droppedWord === 'PHP' ||
        droppedWord === 'Python' ||
        droppedWord === 'SQLite3' ||
        droppedWord === 'Yara' ||
        droppedWord === 'Volatility' ||
        droppedWord === 'Suricata' ||
        droppedWord === 'Firewall logs' ||
        droppedWord === 'cPanel'
      ) {
        setDropTargetColor('border-blue-500');
        setShowAdditionalContent(true);
        setShowButton(true);
      } else {
        setDropTargetColor('border-gray-500');
      }
    }
  }

  const handleHoverCustomer = () => {
    setIsHoveredCustomer(true);
  };

  const handleMouseLeaveCustomer = () => {
    setIsHoveredCustomer(false);
  };

  // Touch event listeners for mobile devices
  // Touch event handlers
  //   function touchStart(ev) {
  //   const touch = ev.touches[0];
  //   const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
  //   const targetId = targetElement?.id;

  //   if (targetId) {
  //     ev.target.id = targetId;
  //     setSelectedWord(targetElement.textContent);
  //     setShowAdditionalContent(true);
  //     ev.dataTransfer.setData('text/plain', targetId);
  //   }
  // }

  //   function touchEnd(ev) {
  //     ev.preventDefault();
  //     const data = ev.dataTransfer.getData('text');
  //     const draggedElement = document.getElementById(data);
  //     if (draggedElement) {
  //       const droppedWord = draggedElement.textContent;
  //       draggedElement.style.display = 'none';
  //       setSelectedWord(droppedWord);
  //       if (
  //         droppedWord === 'Tailwind' ||
  //         droppedWord === 'Vue' ||
  //         droppedWord === 'Bootstrap' ||
  //         droppedWord === 'jQuery' ||
  //         droppedWord === 'GitHub' ||
  //         droppedWord === 'UX/UI' ||
  //         droppedWord === 'Figma' ||
  //         droppedWord === 'Linux' ||
  //         droppedWord === 'Windows' ||
  //         droppedWord === 'OSINT'
  //       ) {
  //         setDropTargetColor('border-green-500');
  //         setShowAdditionalContent(true);
  //       } else if (
  //         droppedWord === 'Next.js' ||
  //         droppedWord === 'React' ||
  //         droppedWord === 'Django' ||
  //         droppedWord === 'Nginx' ||
  //         droppedWord === 'PM2' ||
  //         droppedWord === 'Certbot' ||
  //         droppedWord === 'FTK Imager' ||
  //         droppedWord === 'TCPDump' ||
  //         droppedWord === 'Burp Suite' ||
  //         droppedWord === 'AWS' ||
  //         droppedWord === 'Process Hacker' ||
  //         droppedWord === 'Wireshark' ||
  //         droppedWord === 'SIEM'
  //       ) {
  //         setDropTargetColor('border-yellow-500');
  //         setShowAdditionalContent(true);
  //       } else if (
  //         droppedWord === 'Docker' ||
  //         droppedWord === 'PHP' ||
  //         droppedWord === 'Python' ||
  //         droppedWord === 'SQLite3' ||
  //         droppedWord === 'Yara' ||
  //         droppedWord === 'Volatility' ||
  //         droppedWord === 'Suricata' ||
  //         droppedWord === 'Firewall logs' ||
  //         droppedWord === 'cPanel'
  //       ) {
  //         setDropTargetColor('border-blue-500');
  //         setShowAdditionalContent(true);
  //       } else {
  //         setDropTargetColor('border-gray-500');
  //       }
  //     }
  //   }

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
  const divCustomerMobile = {
    background: 'url(/images/climb.gif) no-repeat',
    backgroundSize: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className=''>
      <div className='pb-10 bg-black'>
        <div className='text-center pt-10'>
          <h2 className='text-zinc-100 text-2xl sm:text-5xl animate__animated animate__fadeInDown'>
            Seamless Fusion: Front-End Brilliance meets Cyber Security Prowess
          </h2>
          <p className='text-zinc-400 text-sm sm:text-xl animate__animated animate__fadeInDown animate__slow'>
            Crafting Exceptional Experiences with Unbreakable Protection
          </p>
        </div>
        <div className='p-2 sm:flex sm:p-10 sm:space-x-10 '>
          <div className='w-full sm:w-3/4 border-none sm:border sm:border-gray-800 rounded-lg p-10'>
            <h3 className='text-2xl sm:text-3xl py-2 tracking-tight text-zinc-100 animate__animated animate__fadeIn'>
              Front-End and Cyber: A Powerful Combination
            </h3>
            <p
              className={`text-zinc-400 ${sora.className} text-sm animate__animated animate__fadeIn animate__slow`}
            >
              Yep, you heard it right! My journey has taken me into the exciting
              worlds of front-end development and cybersecurity. While studying
              programming, I developed a deep passion for crafting captivating
              front-end experiences.
              <br />
              <br />
              But fate had a surprise in store for me when I landed a role at a
              cybersecurity startup. There, I not only honed my front-end skills
              but also gained invaluable insights into securing digital
              platforms. This experience paved the way for me to join a
              prominent cybersecurity company, where I continue to grow in both
              cybersecurity and frontend development.
              <br />
              <br />
              Today, armed with a diverse skill set and a creative perspective,
              I bring a blend of front-end finesse and cybersecurity prowess to
              every project. My dedication to continuous growth and staying
              ahead of the curve ensures that I deliver innovative, secure, and
              user-centric solutions in an ever-evolving digital landscape.
            </p>
          </div>
          <div className='w-full border-none p-10 sm:w-1/4 sm:border sm:border-gray-800 rounded-lg'>
            <div>
              <h3 className='text-2xl sm:text-3xl py-2 tracking-tight text-zinc-100 animate__animated animate__fadeInDown'>
                Last companies
              </h3>
            </div>
            <div className='mt-5'>
              <a href='https://venturaerm.com/' target='_blank'>
                <div className='flex mb-20 animate__animated animate__fadeInLeft animate__slow'>
                  <div className='w-36'>
                    <img src='/images/ventura.png' alt='Ventura Logo' />
                  </div>
                  <div>
                    <p className='text-orange-500 sm:text-zinc-400 hover:text-orange-500'>
                      Front-end Developer | Cyber Security Analist
                    </p>
                  </div>
                </div>
              </a>
              <a href='https://313x.com.br/index-en.html' target='_blank'>
                <div className='flex space-x-5 animate__animated animate__fadeInLeft animate__slow'>
                  <div className='w-28'>
                    <img src='/images/313X.png' alt='313X Logo' />
                  </div>
                  <div>
                    <p className='text-orange-500 sm:text-zinc-400 hover:text-orange-500'>
                      Front-end Developer | Cyber Security Analist
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='px-10 py-2 w-full hidden sm:flex' key={resetKey}>
          <div className='mb-6 w-3/5 animate__animated animate__fadeIn'>
            <h3 className='text-3xl py-2 tracking-tight text-zinc-100'>
              Explore My Expertise:
              <span className='text-orange-500 pl-1'>
                Drag and Drop Your Desired Technology
              </span>
            </h3>
            <ul className='list-none p-0 grid grid-cols-4 text-zinc-100'>
              {words.map((word, index) => (
                <li
                  key={index}
                  id={`word${index}`}
                  draggable='true'
                  onDragStart={drag}
                  onClick={() => handleWordClick(word)}
                  className={`word ${
                    selectedWord === word ? 'bg-zinc-50 ' : ''
                  } p-1 rounded cursor-move ${
                    word === 'Tailwind' ||
                    word === 'Vue' ||
                    word === 'Next.js' ||
                    word === 'React' ||
                    word === 'Bootstrap' ||
                    word === 'jQuery' ||
                    word === 'GitHub' ||
                    word === 'UX/UI' ||
                    word === 'Figma' ||
                    word === 'Linux' ||
                    word === 'Windows' ||
                    word === 'OSINT'
                      ? 'text-green-500 '
                      : ''
                  } ${
                    word === 'Django' ||
                    word === 'Nginx' ||
                    word === 'PM2' ||
                    word === 'Certbot' ||
                    word === 'FTK Imager' ||
                    word === 'TCPDump' ||
                    word === 'Burp Suite' ||
                    word === 'AWS' ||
                    word === 'Process Hacker' ||
                    word === 'Wireshark' ||
                    word === 'SIEM'
                      ? 'text-yellow-500 '
                      : ''
                  } ${
                    word === 'Docker' ||
                    word === 'PHP' ||
                    word === 'Python' ||
                    word === 'SQLite3' ||
                    word === 'Yara' ||
                    word === 'Volatility' ||
                    word === 'Suricata' ||
                    word === 'Firewall logs' ||
                    word === 'cPanel'
                      ? 'text-blue-500 '
                      : ''
                  } hover:text-orange-500 touch-manipulation`}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
          <div
            id='dropTarget'
            className={`border border-dashed ${dropTargetColor} mb-6 text-center text-zinc-400 h-auto rounded-md w-2/5 animate__animated animate__fadeIn animate__slow`}
            onDrop={drop}
            onDragOver={allowDrop}
          >
            {dropTargetColor === 'border-gray-500' ? (
              <p className='text-xl tracking-tight text-zinc-100 h-full grid items-center hover:text-orange-500'>
                Simply drag and drop your desired technology from the left to
                unveil my proficiency in that specific technology.
              </p>
            ) : (
              <div id='additionalContent'>
                {showAdditionalContent && (
                  <div className='mt-4'>
                    {selectedWord === 'Tailwind' ||
                    selectedWord === 'Vue' ||
                    selectedWord === 'React' ||
                    selectedWord === 'Next.js' ||
                    selectedWord === 'Bootstrap' ||
                    selectedWord === 'jQuery' ||
                    selectedWord === 'GitHub' ||
                    selectedWord === 'UX/UI' ||
                    selectedWord === 'Figma' ||
                    selectedWord === 'ApexCharts' ||
                    selectedWord === 'Linux' ||
                    selectedWord === 'OSINT' ||
                    selectedWord === 'Windows' ? (
                      <div className='p-4'>
                        <h1 className='text-4xl font-bold mb-5 text-zinc-100'>
                          {selectedWord}
                        </h1>
                        <p className={`text-md ${sora.className}`}>
                          I'm skilled in {selectedWord} with 2+ years of
                          professional experience. If you're looking for someone
                          skilled in this technology, look no further! Choosing
                          me would be a perfect match for your needs.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Contac me:
                          <a
                            className='text-orange-500'
                            href='https://www.linkedin.com/in/felipe-betini/'
                            target='_blank'
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    ) : selectedWord === 'Django' ||
                      selectedWord === 'Nginx' ||
                      selectedWord === 'PM2' ||
                      selectedWord === 'Certbot' ||
                      selectedWord === 'FTK Imager' ||
                      selectedWord === 'TCPDump' ||
                      selectedWord === 'Burp Suite' ||
                      selectedWord === 'AWS' ||
                      selectedWord === 'Process Hacker' ||
                      selectedWord === 'Wireshark' ||
                      selectedWord === 'SIEM' ? (
                      <div className='p-4'>
                        <h1 className='text-4xl font-bold mb-5 text-zinc-100'>
                          {selectedWord}
                        </h1>
                        <p className={`text-md ${sora.className}`}>
                          Here's the deal. I may not have a ton of experience in{' '}
                          {selectedWord}, I've spent over a year studying and
                          working with it. Although I'm a newbie, I'm a quick
                          learner with the determination to make things happen.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Contac me:
                          <a
                            className='text-orange-500'
                            href='https://www.linkedin.com/in/felipe-betini/'
                            target='_blank'
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    ) : selectedWord === 'Docker' ||
                      selectedWord === 'PHP' ||
                      selectedWord === 'Python' ||
                      selectedWord === 'SQLite3' ||
                      selectedWord === 'Yara' ||
                      selectedWord === 'Volatility' ||
                      selectedWord === 'Suricata' ||
                      selectedWord === 'Firewall logs' ||
                      selectedWord === 'cPanel' ? (
                      <div className='p-4'>
                        <h1 className='text-4xl font-bold mb-5 text-zinc-100'>
                          {selectedWord}
                        </h1>
                        <p className={`text-md ${sora.className}`}>
                          Regarding {selectedWord}, I'm an eager explorer, not a
                          master, embracing its vast landscapes. With your
                          guidance, I'm confident in my adaptability and
                          contributions, unlocking my potential.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Contac me:
                          <a
                            className='text-orange-500'
                            href='https://www.linkedin.com/in/felipe-betini/'
                            target='_blank'
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='px-10 py-2 w-full block sm:hidden'>
          <div className='mb-6 w-full animate__animated animate__fadeIn'>
            <h3 className='text-2xl py-2 tracking-tight text-zinc-100'>
              Explore My Expertise:
              <span className='text-orange-500 pl-1'>
                Click Your Desired Technology
              </span>
            </h3>
            <ul className='list-none p-0 grid grid-cols-4 text-zinc-100'>
              {words.map((word, index) => (
                <li
                  key={index}
                  id={`word${index}`}
                  draggable='true'
                  onDragStart={drag}
                  onClick={() => handleWordClick(word)}
                  className={`word ${
                    selectedWord === word ? 'bg-zinc-50 ' : ''
                  } p-1 rounded cursor-move ${
                    word === 'Tailwind' ||
                    word === 'Vue' ||
                    word === 'Next.js' ||
                    word === 'React' ||
                    word === 'Bootstrap' ||
                    word === 'jQuery' ||
                    word === 'GitHub' ||
                    word === 'UX/UI' ||
                    word === 'Figma' ||
                    word === 'Linux' ||
                    word === 'Windows' ||
                    word === 'OSINT'
                      ? 'text-green-500 '
                      : ''
                  } ${
                    word === 'Django' ||
                    word === 'Nginx' ||
                    word === 'PM2' ||
                    word === 'Certbot' ||
                    word === 'FTK Imager' ||
                    word === 'TCPDump' ||
                    word === 'Burp Suite' ||
                    word === 'AWS' ||
                    word === 'Process Hacker' ||
                    word === 'Wireshark' ||
                    word === 'SIEM'
                      ? 'text-yellow-500 '
                      : ''
                  } ${
                    word === 'Docker' ||
                    word === 'PHP' ||
                    word === 'Python' ||
                    word === 'SQLite3' ||
                    word === 'Yara' ||
                    word === 'Volatility' ||
                    word === 'Suricata' ||
                    word === 'Firewall logs' ||
                    word === 'cPanel'
                      ? 'text-blue-500 '
                      : ''
                  } hover:text-orange-500 touch-manipulation`}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
          <div
            id='dropTarget'
            className={`border border-dashed ${dropTargetColor} mb-6 text-center text-zinc-400 h-auto rounded-md w-full animate__animated animate__fadeIn animate__slow`}
            onDrop={drop}
            onDragOver={allowDrop}
          >
            {dropTargetColor === 'border-gray-500' ? (
              <p className='text-xl tracking-tight text-zinc-100 h-full grid items-center hover:text-orange-500 p-5'>
                Simply click your desired technology from above to unveil my
                proficiency in that specific technology.
              </p>
            ) : (
              <div id='additionalContent'>
                {showAdditionalContent && (
                  <div className='mt-4'>
                    {selectedWord === 'Tailwind' ||
                    selectedWord === 'React' ||
                    selectedWord === 'Next.js' ||
                    selectedWord === 'Vue' ||
                    selectedWord === 'Bootstrap' ||
                    selectedWord === 'jQuery' ||
                    selectedWord === 'GitHub' ||
                    selectedWord === 'UX/UI' ||
                    selectedWord === 'Figma' ||
                    selectedWord === 'ApexCharts' ||
                    selectedWord === 'Linux' ||
                    selectedWord === 'OSINT' ||
                    selectedWord === 'Windows' ? (
                      <div className='p-4'>
                        <h1 className='text-2xl font-bold mb-5 text-zinc-100'>
                          {selectedWord}
                        </h1>
                        <p className={`text-sm ${sora.className}`}>
                          I'm skilled in {selectedWord} with 2+ years of
                          professional experience. If you're looking for someone
                          skilled in this technology, look no further! Choosing
                          me would be a perfect match for your needs.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Contac me:
                          <a
                            className='text-orange-500'
                            href='https://www.linkedin.com/in/felipe-betini/'
                            target='_blank'
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    ) : selectedWord === 'Django' ||
                      selectedWord === 'Nginx' ||
                      selectedWord === 'PM2' ||
                      selectedWord === 'Certbot' ||
                      selectedWord === 'FTK Imager' ||
                      selectedWord === 'TCPDump' ||
                      selectedWord === 'Burp Suite' ||
                      selectedWord === 'AWS' ||
                      selectedWord === 'Process Hacker' ||
                      selectedWord === 'Wireshark' ||
                      selectedWord === 'SIEM' ? (
                      <div className='p-4'>
                        <h1 className='text-2xl font-bold mb-5 text-zinc-100'>
                          {selectedWord}
                        </h1>
                        <p className={`text-sm ${sora.className}`}>
                          Here's the deal. I may not have a ton of experience in{' '}
                          {selectedWord}, I've spent over a year studying and
                          working with it. Although I'm a newbie, I'm a quick
                          learner with the determination to make things happen.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Contac me:
                          <a
                            className='text-orange-500'
                            href='https://www.linkedin.com/in/felipe-betini/'
                            target='_blank'
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    ) : selectedWord === 'Docker' ||
                      selectedWord === 'PHP' ||
                      selectedWord === 'Python' ||
                      selectedWord === 'SQLite3' ||
                      selectedWord === 'Yara' ||
                      selectedWord === 'Volatility' ||
                      selectedWord === 'Suricata' ||
                      selectedWord === 'Firewall logs' ||
                      selectedWord === 'cPanel' ? (
                      <div className='p-4'>
                        <h1 className='text-2xl font-bold mb-5 text-zinc-100'>
                          {selectedWord}
                        </h1>
                        <p className={`text-sm ${sora.className}`}>
                          Regarding {selectedWord}, I'm an eager explorer, not a
                          master, embracing its vast landscapes. With your
                          guidance, I'm confident in my adaptability and
                          contributions, unlocking my potential.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Contac me:
                          <a
                            className='text-orange-500'
                            href='https://www.linkedin.com/in/felipe-betini/'
                            target='_blank'
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className='ml-0 text-center hidden sm:ml-10 sm:text-left sm:block animate__animated animate__fadeIn'>
          {showButton ? (
            <button
              className='px-4 py-2 bg-orange-500 text-zinc-100 rounded '
              onClick={handleReset}
            >
              Reset the words
            </button>
          ) : null}
        </div>
        {/* <div className='text-center my-24'>
          <h2 className='text-4xl py-2 tracking-tight text-zinc-100'>
            My certificates
          </h2>
          <p className={`text-zinc-700 text-md ${sora.className}`}>
            As an eternal knowledge seeker, I've collected some certificates!
          </p>
        </div> */}
        {/* <div>
          <Slider />
        </div> */}
      </div>
      <div className={`p-10 h-auto ${sora.className}`}>
        <div className='text-center pb-5 '>
          <p className='text-xl sm:text-3xl font-bold'>
            Ready to explore more? Discover my expertise in customer service!
          </p>
        </div>
        <div className='text-center '>
          <p className='text-sm sm:text-md'>
            In customer service, I honed my exceptional soft skills including
            teamwork, quick thinking, organization, and the ability to learn
            something new every day. Plus, I even got to unleash my creativity
            through latte art and crafting innovative drinks!
          </p>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 hidden sm:block'>
          <div
            className='h-96 flex items-center justify-center cursor-pointer'
            style={divCustomer}
            onMouseEnter={handleHoverCustomer}
            onMouseLeave={handleMouseLeaveCustomer}
            onClick={() => router.push('/customerService')}
          >
            <p className=' text-2xl font-bold w-full text-center'>
              Customer Services
            </p>
          </div>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 block sm:hidden'>
          <div
            className='flex items-center justify-center h-52 mt-10'
            style={divCustomerMobile}
            onClick={() => router.push('/customerService')}
          >
            <p className=' text-2xl font-bold w-full text-center text-orange-500'>
              Customer Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
