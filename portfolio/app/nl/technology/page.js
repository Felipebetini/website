'use client';

import React, { useState, useEffect } from 'react';
import { Sora } from 'next/font/google';
import { useRouter } from 'next/navigation';
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
          <h1 className='text-zinc-100 text-2xl sm:text-5xl animate__animated animate__fadeInDown'>
            Naadloze samensmelting: Front-End briljantie ontmoet
            cyberbeveiligingsvaardigheden
          </h1>
          <h2 className='text-zinc-400 text-sm sm:text-xl animate__animated animate__fadeInDown animate__slow'>
            Het creëren van uitzonderlijke ervaringen met onbreekbare
            bescherming
          </h2>
        </div>
        <div className='p-2 sm:flex sm:p-10 sm:space-x-10 '>
          <div className='w-full sm:w-3/4 border-none sm:border sm:border-gray-800 rounded-lg p-10'>
            <h3 className='text-2xl sm:text-3xl py-2 tracking-tight text-zinc-100 animate__animated animate__fadeIn'>
              Front-End en Cyber: Een krachtige combinatie
            </h3>
            <p
              className={`text-zinc-400 ${sora.className} text-sm animate__animated animate__fadeIn animate__slow`}
            >
              Ja, je hebt het goed gehoord! Mijn reis heeft me geleid naar de
              spannende werelden van front-end ontwikkeling en cybersecurity.
              Tijdens het bestuderen van programmeren heb ik een diepe passie
              ontwikkeld voor het creëren van boeiende front-end ervaringen.
              <br />
              <br />
              Maar het lot had een verrassing voor me in petto toen ik een
              functie kreeg bij een cybersecurity-startup. Daar heb ik niet
              alleen mijn front-end vaardigheden verfijnd, maar ook waardevolle
              inzichten verworven in het beveiligen van digitale platforms. Deze
              ervaring heeft de weg vrijgemaakt voor mijn overstap naar een
              vooraanstaand cybersecurity-bedrijf, waar ik blijf groeien op
              zowel het gebied van cybersecurity als front-end ontwikkeling.
              <br />
              <br />
              Vandaag de dag, gewapend met een divers vaardighedenpakket en een
              creatieve kijk, breng ik een mix van front-end finesse en
              cybersecurity-expertise naar elk project. Mijn toewijding aan
              voortdurende groei en het voorblijven op de ontwikkelingen zorgt
              ervoor dat ik innovatieve, veilige en gebruikersgerichte
              oplossingen lever in een voortdurend veranderend digitaal
              landschap.
            </p>
          </div>
          <div className='w-full border-none p-10 sm:w-1/4 sm:border sm:border-gray-800 rounded-lg'>
            <div>
              <h3 className='text-2xl sm:text-3xl py-2 tracking-tight text-zinc-100 animate__animated animate__fadeInDown'>
                Laatste bedrijven
              </h3>
            </div>
            <div className='mt-5'>
              <a href='https://venturaerm.com/' target='_blank'>
                <div className='flex mb-20 animate__animated animate__fadeInLeft animate__slow'>
                  <div className='w-36'>
                    <img src='/images/ventura.png' alt='Ventura logo' />
                  </div>
                  <div>
                    <p className='text-orange-500 sm:text-zinc-400 hover:text-orange-500'>
                      Front-end ontwikkelaar | Cybersecurity analist
                    </p>
                  </div>
                </div>
              </a>
              <a href='https://313x.com.br/index-en.html' target='_blank'>
                <div className='flex space-x-5 animate__animated animate__fadeInLeft animate__slow'>
                  <div className='w-28'>
                    <img src='/images/313X.png' alt='313x logo' />
                  </div>
                  <div>
                    <p className='text-orange-500 sm:text-zinc-400 hover:text-orange-500'>
                      Front-end ontwikkelaar | Cybersecurity analist
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
              Verken mijn expertise:
              <span className='text-orange-500 pl-1'>
                Sleep en plaats de gewenste technologie
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
                Sleep eenvoudig de gewenste technologie van links naar rechts om
                mijn vaardigheid in die specifieke technologie te onthullen.
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
                          Ik ben bekwaam in {selectedWord} met meer dan 2 jaar
                          professionele ervaring. Als je op zoek bent naar
                          iemand die bedreven is in deze technologie, zoek dan
                          niet verder! Het kiezen voor mij zou perfect
                          aansluiten bij jouw behoeften.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Neem contact met mij op:
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
                          Hier is de deal. Hoewel ik mogelijk niet veel ervaring
                          heb in {selectedWord}, heb ik meer dan een jaar
                          gestudeerd en gewerkt met deze technologie. Ondanks
                          dat ik een nieuweling ben, ben ik een snelle leerling
                          met de vastberadenheid om dingen voor elkaar te
                          krijgen.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Neem contact met mij op:
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
                          Met betrekking tot {selectedWord} ben ik een
                          enthousiaste ontdekker, geen meester, die de
                          uitgestrekte landschappen omarmt. Met jouw begeleiding
                          ben ik ervan overtuigd dat ik me kan aanpassen en
                          bijdragen, en mijn potentieel kan ontketenen.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Neem contact met mij op:
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
              Ontdek mijn expertise:
              <span className='text-orange-500 pl-1'>
                Klik op de gewenste technologie:
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
            className={`border border-dashed ${dropTargetColor} mb-6 text-center text-zinc-400 h-auto rounded-md w-full`}
            onDrop={drop}
            onDragOver={allowDrop}
          >
            {dropTargetColor === 'border-gray-500' ? (
              <p className='text-xl tracking-tight text-zinc-100 h-full grid items-center hover:text-orange-500 p-5'>
                Klik eenvoudig op de gewenste technologie hierboven om mijn
                bekwaamheid in die specifieke technologie te onthullen.
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
                          Ik ben bedreven in {selectedWord} met meer dan 2 jaar
                          professionele ervaring. Als je op zoek bent naar
                          iemand die bekwaam is in deze technologie, zoek dan
                          niet verder! Het kiezen voor mij zou perfect
                          aansluiten bij jouw behoeften.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Neem contact met mij op:
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
                          Hier is de deal. Hoewel ik mogelijk niet veel ervaring
                          heb in {selectedWord}, heb ik meer dan een jaar
                          gestudeerd en ermee gewerkt. Hoewel ik nog een
                          nieuweling ben, ben ik een snelle leerling met de
                          vastberadenheid om dingen voor elkaar te krijgen.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Neem contact met mij op:
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
                          Met betrekking tot {selectedWord} ben ik een
                          enthousiaste ontdekker, geen meester, die de
                          uitgestrekte landschappen omarmt. Met jouw begeleiding
                          ben ik vol vertrouwen in mijn aanpassingsvermogen en
                          bijdragen, waardoor ik mijn potentieel kan ontsluiten.
                        </p>
                        <p className='mt-5 text-lg text-zinc-400'>
                          Neem contact met mij op:
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
            Klaar om meer te ontdekken? Ontdek mijn expertise in klantenservice!
          </p>
        </div>
        <div className='text-center '>
          <p className='text-sm sm:text-md'>
            In de klantenservice heb ik mijn uitstekende soft skills verfijnd,
            waaronder teamwork, snel denken, organisatie en het vermogen om elke
            dag iets nieuws te leren. Bovendien kon ik zelfs mijn creativiteit
            de vrije loop laten door middel van latte art en het maken van
            innovatieve drankjes!
          </p>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 hidden sm:block'>
          <div
            className='h-96 flex items-center justify-center cursor-pointer'
            style={divCustomer}
            onMouseEnter={handleHoverCustomer}
            onMouseLeave={handleMouseLeaveCustomer}
            onClick={() => router.push('/nl/customerService')}
          >
            <p className=' text-2xl font-bold w-full text-center'>
              klantenservice
            </p>
          </div>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 block sm:hidden'>
          <div
            className='flex items-center justify-center h-52 mt-10'
            style={divCustomerMobile}
            onClick={() => router.push('/nl/customerService')}
          >
            <p className=' text-2xl font-bold w-full text-center text-orange-500'>
              klantenservice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
