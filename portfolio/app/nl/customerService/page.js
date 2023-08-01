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
            Het geheime ingrediënt: Hoe klantenservice mijn reis heeft beïnvloed
          </h2>
          <p className='text-black text-md  mt-5 font-thin sm:text-xl present hide'>
            Het ontwikkelen van soft skills voor een bevredigende loopbaan in
            een dynamische werkomgeving
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 gap-8'>
          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='w-full sm:w-2/5 font-semibold mb-10 text-2xl sm:text-6xl text-zinc-700 present hide'>
              Outback Steakhouse: Waar het allemaal begon
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full pr-0 sm:pr-80 sm:text-xl sm:w-3/5 present hide'>
              Het begon allemaal bij Outback Steakhouse, waar ik mijn intrede
              deed in de levendige wereld van de bediening. Als een frisse
              18-jarige leerde ik al snel dat het bedienen van hongerige gasten
              geen eenvoudige taak was, maar wat heb ik genoten van de
              uitdaging! Met het balanceren van borden als een circusartiest en
              het behendig jongleren met bestellingen, werd ik een meester in
              multitasking. En laten we de keer niet vergeten dat ik per ongeluk
              een bord frietjes over mijn nietsvermoedende baas liet vallen -
              oeps, dat zorgde zeker voor een verrassend tintje aan de
              eetervaring!
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='font-semibold mb-10 text-2xl w-full text-zinc-700 ml-auto sm:text-6xl sm:w-2/5 presentRight hideRight'>
              Luxury Salesman: Het bieden van voortreffelijke ervaringen
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full ml-auto sm:w-2/5 sm:text-xl presentRight hideRight'>
              Maar mijn reis stopte daar niet, mijn vrienden. Oh nee, ik had
              grotere plannen en een ondeugende twinkeling in mijn ogen. Ik
              begon aan een nieuw avontuur als een luxe verkoper. Stel je dit
              voor: ik, een charmante verkoper, die klanten probeert te
              overtuigen dat een pen bezet met diamanten absoluut noodzakelijk
              was in hun leven. Wie had gedacht dat het verkopen van luxe
              goederen zo'n dolle boel kon zijn?
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32 '>
            <h2 className='w-full sm:w-2/5 font-semibold mb-10 text-2xl sm:text-6xl text-zinc-700 present hide'>
              Tolk: Taalbarrières overbruggen
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full pr-0 sm:pr-80 sm:text-xl sm:w-3/5 present hide'>
              Het lot bracht me in een taallabyrint als tolk bij West Group. Nu
              zou je kunnen denken dat taalvertaling een serieuze aangelegenheid
              is, maar laat me je vertellen, humor kent geen grenzen! Stel je
              een buitenlandse student voor die worstelt om een complexe lezing
              te begrijpen, en dan, als een taalsuperheld, kom ik binnen met een
              hilarische metafoor die alles op zijn plaats doet vallen. Lachen
              werd de universele taal, barrières werden doorbroken en
              verbindingen werden gesmeed met een komische twist.
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='font-semibold mb-10 text-2xl w-full text-zinc-700 ml-auto sm:text-6xl sm:w-2/5 presentRight hideRight'>
              Bar Manager: Het creëren van onvergetelijke ervaringen
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full ml-auto sm:w-2/5 sm:text-xl presentRight hideRight'>
              Het avontuur ging verder toen ik de rol van Bar Manager op me nam,
              waar mixologie en creativiteit samensmolten in een verrukkelijke
              cocktail. Ik werd de maestro van vrolijkheid, waarbij ik nieuwe
              medewerkers trainde en luchtige momenten toevoegde aan hun
              leerervaringen. De bar werd mijn podium en ik regisseerde een
              uitzonderlijke drankenkaart die de smaakpapillen prikkelde en de
              setting creëerde voor onvergetelijke ervaringen. De organisatie
              van de bar was mijn muze en ik schilderde een meesterwerk van
              efficiëntie en genot, waardoor klanten met verbazing achterbleven
              en dorsten naar meer.
            </p>
          </div>

          <div className='bg-neutral-100 rounded-lg p-10 sm:p-32'>
            <h2 className='w-full sm:w-2/5 font-semibold mb-10 text-2xl sm:text-6xl text-zinc-700 present hide'>
              Hoofd Barista: Het brouwen van perfectie
            </h2>
            <p className='text-gray-700 mb-6 text-sm font-thin w-full pr-0 sm:pr-80 sm:text-xl sm:w-3/5 present hide'>
              En toen leidde het lot me naar de geurige wereld van koffie als
              een Hoofd Barista. Met een door cafeïne gevoede geest veranderde
              ik elke kop koffie in een heerlijke ervaring. Stel je een
              koffiewinkel voor, gevuld met de rijke geur van vers gezette magie
              en klanten die uitkijken naar hun dagelijkse dosis
              cafeïnehappiness. Terwijl ik ingewikkelde latte art creëerde en de
              perfecte kop koffie zette, kon ik het niet laten om een vleugje
              humor toe te voegen aan elke interactie.
            </p>
          </div>
        </div>

        <div className='text-left mt-12 px-10 sm:px-16'>
          <h2 className='text-2xl sm:text-5xl font-semibold text-zinc-700 mb-2 presentRight hideRight'>
            Vrijwilligerswerk: Het maken van een verschil
          </h2>
          <p className='text-gray-700 present hide'>
            Naast mijn professionele ervaringen heb ik tijd toegewijd aan
            vrijwilligerswerk bij Viva Rio. Het was een vervullende kans om bij
            te dragen aan sociale diensten en de positieve impact te zien die
            een organisatie kan hebben op een gemeenschap. Van het organiseren
            van bloeddonaties tot het inzamelen van geld voor kansarme
            gemeenschappen, heb ik de waarde van geven geleerd en hoe kleine
            acties levens kunnen transformeren. Mijn vrijwilligerswerk heeft me
            de betekenis van betrokkenheid bij de gemeenschap en
            maatschappelijke verantwoordelijkheid bijgebracht.
          </p>
        </div>
      </div>
      <div className='p-10 h-auto mt-28'>
        <div className='text-center pb-5 '>
          <p className='text-xl sm:text-3xl font-bold'>
            Klaar om meer te ontdekken? Ontdek mijn expertise in Technologie!
          </p>
        </div>
        <div className='text-center '>
          <p className='text-sm sm:text-md'>
            Begin aan een avontuur waar betoverend front-end design samenkomt
            met ondoordringbare cybersecurity. Met een passie voor het creëren
            van uitzonderlijke digitale ervaringen, breng ik een unieke mix van
            expertise en creativiteit in elk project.
          </p>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 hidden sm:block'>
          <div
            className='h-96 flex items-center justify-center cursor-pointer'
            style={divTechnology}
            onMouseEnter={handleHoverTech}
            onMouseLeave={handleMouseLeaveTech}
            onClick={() => router.push('/nl/technology')}
          >
            <p className=' text-2xl font-bold w-full text-center'>
              Technologie
            </p>
          </div>
        </div>
        <div className='w-full px-0 m-auto my-12 sm:w-2/4 sm:px-16 block sm:hidden'>
          <div
            className='flex items-center justify-center h-64 mt-10'
            style={divTechnologyMobile}
            onClick={() => router.push('/nl/technology')}
          >
            <p className=' text-2xl font-bold w-full text-center text-orange-500'>
              Technologie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;
