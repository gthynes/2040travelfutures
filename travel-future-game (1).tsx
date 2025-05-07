import { useState } from 'react';

// Timeline headlines for each scenario
const timelineHeadlines = {
  galacticGlamour: [
    { year: 2026, headline: "Virgin Galactic announces first orbital hotel with 30 luxury suites" },
    { year: 2028, headline: "Sustainable aviation fuel reaches price parity with conventional jet fuel" },
    { year: 2030, headline: "First 'Work From Space' program launched for tech executives" },
    { year: 2033, headline: "Hyperloop network connects major Asian and European cities" },
    { year: 2037, headline: "Global survey: 65% of travelers seek 'identity transformation' as primary motivation" },
    { year: 2040, headline: "Lunar tourism packages fall below $100,000 for first time" }
  ],
  worldOnPause: [
    { year: 2026, headline: "Major terrorist attacks target five UNESCO World Heritage sites" },
    { year: 2029, headline: "Tourism employment falls 60% as AI receptionists and guides become standard" },
    { year: 2031, headline: "Venice permanently closes to non-resident visitors after flooding disaster" },
    { year: 2034, headline: "Travel Anxiety Disorder officially recognized by global medical authorities" },
    { year: 2037, headline: "Former resort island chain converts entirely to sustainable farming community" },
    { year: 2040, headline: "International leisure travel reaches lowest level since 1950s" }
  ],
  globalJourneyProtocol: [
    { year: 2026, headline: "UN convenes emergency summit on overtourism crisis" },
    { year: 2028, headline: "First city implements visitor quota system using blockchain verification" },
    { year: 2031, headline: "Global Travel Lottery proposal gains traction at G20 summit" },
    { year: 2034, headline: "International Travel Allocation Treaty ratified by 132 countries" },
    { year: 2037, headline: "Reality show 'My One Trip' becomes global sensation" },
    { year: 2040, headline: "Virtual tourism subscriptions exceed physical travel for first time" }
  ],
  medicallyPrescribed: [
    { year: 2026, headline: "Health insurers begin covering 'preventative travel therapy'" },
    { year: 2029, headline: "Sleep tourism market grows 300% in five years" },
    { year: 2031, headline: "First country implements mandatory wellness leave policy" },
    { year: 2034, headline: "AI health monitoring linked directly to travel booking systems" },
    { year: 2037, headline: "Doctors write record 500 million 'travel prescriptions' globally" },
    { year: 2040, headline: "Mental health crisis averted due to prescribed travel interventions, WHO reports" }
  ]
};

const scenarios = {
  galacticGlamour: {
    title: "Galactic Glamour",
    description: "In this future, travel has become about transforming identity and pushing personal boundaries. Space tourism has become accessible to the upper class, while on Earth, sustainable air-fuel tech and hyperloop networks have redefined international travel. A new cultural ethos of 'You Can't Take It With You' drives experience-seeking, and AI has made work location-independent, allowing for extended vacations and even 'Work from Space' opportunities.",
    image: "space-hotel",
    color: "bg-indigo-100",
    preparations: [
      "Start investing in space tourism stocks and cryptocurrency to afford future orbital vacations",
      "Learn Mandarin and Spanish, which will become the dominant languages in space tourism",
      "Visit the Atacama Desert and Iceland as Earth-based analogs for future space destinations",
      "Develop remote work skills that can translate to zero-g environments",
      "Consider careers in VR experience design, orbital hospitality, or zero-g entertainment"
    ],
    packingList: [
      "Multi-sensory recording device (captures scents, textures, and sensations)",
      "Adaptive smart clothing that changes properties based on environment",
      "Neural link translator for instantaneous communication in any language"
    ]
  },
  worldOnPause: {
    title: "A World on Pause",
    description: "By 2040, leisure travel has become rare following devastating terrorist attacks on tourist destinations and the collapse of sustainable tourism initiatives. Automation replaced tourism jobs, creating mass displacement and unrest. Travel phobia and collective trauma have reshaped society, with most journeys now made out of necessity rather than pleasure. Former tourist areas are quiet, repurposed for housing and community services as the world reckons with the consequences of past wanderlust.",
    image: "empty-airport",
    color: "bg-gray-100",
    preparations: [
      "Visit threatened cultural sites and natural wonders while they remain accessible",
      "Document your travels extensively as you may be creating historical archives",
      "Develop skills in virtual experience creation to help preserve destinations digitally",
      "Learn local community building and urban farming techniques",
      "Focus on building deep connections with your immediate surroundings and community"
    ],
    packingList: [
      "Personal security system with biometric authentication",
      "Self-contained water purification kit with lifetime guarantee",
      "Complete digital archive of the world's major cultural sites and destinations"
    ]
  },
  globalJourneyProtocol: {
    title: "The Global Journey Protocol",
    description: "Travel in 2040 is tightly regulated through the Global Journey Protocol, created after years of overtourism that damaged cultural and natural sites. Every person is granted one major international trip in their lifetime through a Global Travel Lottery, with destinations assigned randomly to prevent overtourism. All movement at historically significant sites is monitored, and high-speed trains and eco-cruises have largely replaced air travel for leisure purposes.",
    image: "monitored-tourism",
    color: "bg-green-100",
    preparations: [
      "Begin the lengthy application process for your lifetime journey permit early",
      "Study multiple languages to prepare for wherever your assigned destination may be",
      "Master virtual tourism platforms to complement your single physical journey",
      "Explore your local region thoroughly as micro-tourism becomes the norm",
      "Consider careers in sustainable transport or cultural preservation"
    ],
    packingList: [
      "Universal travel permit with integrated carbon offset documentation",
      "Cultural immersion neural implant for instant language and cultural adaptation",
      "Zero-impact footwear that leaves no trace and records your exact path"
    ]
  },
  medicallyPrescribed: {
    title: "Medically Prescribed",
    description: "Travel has been reimagined as an essential component of well-being, often medically prescribed when stress or health indicators reach concerning levels. AI systems track citizens' health and automatically book personalized wellness journeys when needed. Sleep tourism has boomed as people seek digital detox, and unlimited paid time off allows for free movement between work and restoration. Sustainable transport options like luxury trains and hybrid cruise ships have replaced most flights.",
    image: "wellness-retreat",
    color: "bg-blue-100",
    preparations: [
      "Start tracking your biometrics to understand your personal wellness patterns",
      "Practice mindfulness and learn to recognize your own stress signals",
      "Explore different wellness modalities to discover what works best for you",
      "Visit wellness destinations before they become exclusive or overbooked",
      "Consider careers in wellness tourism, biometric monitoring, or AI health programming"
    ],
    packingList: [
      "Advanced biometric monitor that recommends activities based on your current state",
      "Neural-calibrated meditation headset tailored to your personal brain patterns",
      "Specialized nutrition capsules designed for your genetic wellness profile"
    ]
  }
};

const questions = [
  {
    year: 2025,
    question: "How do you think we should address growing concerns about overtourism?",
    choices: [
      { text: "Develop advanced technology to allow more tourism with less impact", points: { galacticGlamour: 3, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 1 } },
      { text: "Implement strict visitor quotas and regulations on popular destinations", points: { galacticGlamour: 0, worldOnPause: 1, globalJourneyProtocol: 3, medicallyPrescribed: 1 } },
      { text: "Focus on using travel for wellness and personal growth rather than just sightseeing", points: { galacticGlamour: 1, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 3 } },
      { text: "Reduce travel overall to protect cultural sites and the environment", points: { galacticGlamour: 0, worldOnPause: 3, globalJourneyProtocol: 1, medicallyPrescribed: 1 } }
    ]
  },
  {
    year: 2028,
    question: "A breakthrough in nuclear-powered rockets makes space tourism commercially viable. Your reaction?",
    choices: [
      { text: "Exciting! I'd start saving immediately to experience space travel", points: { galacticGlamour: 3, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 1 } },
      { text: "Concerning - we should solve Earth's problems before expanding tourism to space", points: { galacticGlamour: 0, worldOnPause: 2, globalJourneyProtocol: 2, medicallyPrescribed: 1 } },
      { text: "Interesting, but I'd prefer advancements in wellness travel on Earth", points: { galacticGlamour: 1, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 3 } },
      { text: "Space should be for scientific exploration, not tourism", points: { galacticGlamour: 0, worldOnPause: 1, globalJourneyProtocol: 3, medicallyPrescribed: 1 } }
    ]
  },
  {
    year: 2030,
    question: "AI has automated many tourism jobs. What's your priority?",
    choices: [
      { text: "Using AI to create more personalized and boundary-pushing travel experiences", points: { galacticGlamour: 3, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 1 } },
      { text: "Protecting tourism workers and communities from displacement", points: { galacticGlamour: 0, worldOnPause: 3, globalJourneyProtocol: 2, medicallyPrescribed: 0 } },
      { text: "Using AI to monitor travelers' health and well-being during trips", points: { galacticGlamour: 1, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 3 } },
      { text: "Implementing AI systems to enforce visitor regulations at fragile sites", points: { galacticGlamour: 0, worldOnPause: 1, globalJourneyProtocol: 3, medicallyPrescribed: 1 } }
    ]
  },
  {
    year: 2032,
    question: "UNESCO declares that 30% of World Heritage sites have suffered irreversible damage. What action is needed?",
    choices: [
      { text: "Develop new, immersive travel experiences that don't harm existing sites", points: { galacticGlamour: 3, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 1 } },
      { text: "Drastically reduce visitor numbers to protect what remains", points: { galacticGlamour: 0, worldOnPause: 3, globalJourneyProtocol: 2, medicallyPrescribed: 0 } },
      { text: "Institute a global system that guarantees everyone one major trip in their lifetime", points: { galacticGlamour: 0, worldOnPause: 0, globalJourneyProtocol: 3, medicallyPrescribed: 1 } },
      { text: "Focus on travel that improves well-being rather than just seeing attractions", points: { galacticGlamour: 1, worldOnPause: 0, globalJourneyProtocol: 1, medicallyPrescribed: 3 } }
    ]
  },
  {
    year: 2035,
    question: "A major shift is happening in how people view the purpose of travel. What's your perspective?",
    choices: [
      { text: "Travel should push personal boundaries and create life-changing experiences", points: { galacticGlamour: 3, worldOnPause: 0, globalJourneyProtocol: 0, medicallyPrescribed: 1 } },
      { text: "Travel has become too risky and harmful; we should embrace local exploration", points: { galacticGlamour: 0, worldOnPause: 3, globalJourneyProtocol: 0, medicallyPrescribed: 0 } },
      { text: "Travel is a human right that should be fairly distributed and regulated", points: { galacticGlamour: 0, worldOnPause: 0, globalJourneyProtocol: 3, medicallyPrescribed: 0 } },
      { text: "Travel should primarily serve to restore mental and physical health", points: { galacticGlamour: 0, worldOnPause: 0, globalJourneyProtocol: 0, medicallyPrescribed: 3 } }
    ]
  }
];

// Replace these URLs with your actual hosted image URLs
const imagePlaceholders = {
  // For example: "space-hotel": "https://your-website.com/images/space-hotel.jpg",
  "space-hotel": "https://github.com/gthynes/2040travelfutures/blob/0f414e69a9f917b0a1c3f8109619f75fbb7acc95/Galactic%20glamour%20header.png",
  "empty-airport": "/api/placeholder/400/240?text=Empty+Airport+and+Reduced+Travel",
  "monitored-tourism": "/api/placeholder/400/240?text=Regulated+Tourism+and+Quotas",
  "wellness-retreat": "/api/placeholder/400/240?text=Medical+Wellness+Tourism"
};

function ImagePlaceholder({ name, alt }) {
  return <img src={imagePlaceholders[name]} alt={alt} className="rounded-lg shadow-md mb-4" />;
}

export default function TravelFutureGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    galacticGlamour: 0,
    worldOnPause: 0,
    globalJourneyProtocol: 0,
    medicallyPrescribed: 0
  });
  const [gameState, setGameState] = useState('intro'); // 'intro', 'playing', 'result'
  const [result, setResult] = useState(null);
  const [allScores, setAllScores] = useState(null);

  const handleChoice = (choice) => {
    const newScores = { ...scores };
    
    // Update scores based on the choice
    Object.keys(choice.points).forEach(scenario => {
      newScores[scenario] += choice.points[scenario];
    });
    
    setScores(newScores);
    
    // Move to next question or show result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Game is over, determine result
      const highestScoreKey = Object.keys(newScores).reduce((a, b) => 
        newScores[a] > newScores[b] ? a : b
      );
      setResult(scenarios[highestScoreKey]);
      setAllScores(newScores);
      setGameState('result');
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScores({
      galacticGlamour: 0,
      worldOnPause: 0,
      globalJourneyProtocol: 0,
      medicallyPrescribed: 0
    });
    setGameState('intro');
    setResult(null);
    setAllScores(null);
  };

  const startGame = () => {
    setGameState('playing');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Journey to 2040: Your Travel Future</h1>
      
      {gameState === 'intro' && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Your Travel Future</h2>
          <div className="flex justify-center mb-4">
            {/* Replace the URL below with your actual hosted image URL if you have one */}
            <img src="/api/placeholder/800/450?text=Journey+to+2040" alt="Journey to 2040: The Ultimate Leisure Travel Game" className="rounded-lg shadow-md w-full" />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About This Experience</h3>
            <p className="mb-3">This interactive experience explores four distinct possibilities for how travel might evolve by the year 2040. Your choices will reveal which future aligns with your values and preferences.</p>
            <p className="mb-3">You'll navigate through pivotal moments from 2025 to 2035, making decisions that shape the trajectory of global tourism. By the end, you'll discover your most resonant future scenario, along with personalized preparation strategies.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Four Possible Futures</h3>
            <p className="mb-3">This game is built on Jim Dator's four futures archetypes - a framework for exploring distinct possible futures:</p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Galactic Glamour (Continued Growth):</strong> A future of expansion, technology and boundary-pushing experiences including space tourism.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <span><strong>A World on Pause (Collapse):</strong> A future where global crises have decimated traditional tourism, leaving a world retreating from travel.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>The Global Journey Protocol (Discipline):</strong> A future of strict regulation where travel is rationed to preserve destinations and resources.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Medically Prescribed (Transformation):</strong> A future where travel has been reimagined as essential wellness care, prescribed and personalized.</span>
              </li>
            </ul>
            <p>Each scenario represents a different way society might respond to current trends and challenges in global tourism.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Purpose</h3>
            <p className="mb-3">This game invites you to consider crucial questions about the future of travel:</p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Possible futures:</strong> What technological and social developments might transform how we travel?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Preferable futures:</strong> What values should guide our evolution of tourism?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Potential futures:</strong> How might we actively shape travel to benefit humanity and the planet?</span>
              </li>
            </ul>
            <p>The future isn't predetermined—it's created through our collective choices and priorities today.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">How To Play</h3>
            <ol className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">1.</span>
                <span>You'll be presented with 5 pivotal moments between 2025 and 2035.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">2.</span>
                <span>For each moment, choose the response that best reflects your values and vision.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">3.</span>
                <span>Your choices will reveal which of four possible futures resonates most with you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">4.</span>
                <span>Discover personalized strategies to prepare for your travel future.</span>
              </li>
            </ol>
          </div>
          
          <div className="text-center">
            <button 
              onClick={startGame}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      )}
      
      {gameState === 'playing' && (
        <>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-blue-800">Timeline: {currentQuestion.year}</span>
              <span className="text-sm bg-blue-700 text-white px-3 py-1 rounded-full">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-600 rounded-full" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
          
          <div className="space-y-3">
            {currentQuestion.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                className="w-full text-left p-4 border border-gray-300 rounded-lg hover:bg-blue-50 transition-colors flex justify-between items-center"
              >
                <span>{choice.text}</span>
                <span className="text-blue-600">→</span>
              </button>
            ))}
          </div>
        </>
      )}
      
      {gameState === 'result' && result && (
        <div className={`p-6 rounded-lg ${result.color}`}>
          <h2 className="text-2xl font-bold mb-4 text-center">{result.title}</h2>
          <div className="flex justify-center">
            <ImagePlaceholder name={result.image} alt={result.title} />
          </div>
          <p className="mb-6">{result.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Timeline to 2040</h3>
            <p className="mb-3">These are the pivotal events in this future scenario that shaped the outcome. Each represents a critical turning point in how society approached travel and tourism.</p>
            <div className="border-l-2 border-blue-600 pl-4 mb-6">
              {timelineHeadlines[Object.keys(allScores).reduce((a, b) => allScores[a] > allScores[b] ? a : b)].map((event, index) => (
                <div key={index} className="mb-3">
                  <div className="flex items-center">
                    <div className="bg-blue-600 rounded-full w-3 h-3 -ml-5.5 mr-2"></div>
                    <span className="font-bold">{event.year}</span>
                  </div>
                  <p className="mt-1">{event.headline}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-6">
              <img src={`/api/placeholder/600/300?text=Vision+of+${result.title}+in+2040`} alt={`Vision of ${result.title} in 2040`} className="rounded-lg shadow-md" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Your Results Breakdown</h3>
            <p className="mb-3">This chart shows how your choices aligned with each possible future scenario, with your dominant future highlighted. Higher percentages indicate stronger alignment with that particular vision of travel in 2040.</p>
            <div className="grid grid-cols-1 gap-2 mb-6">
              {allScores && Object.keys(allScores).map(key => (
                <div key={key} className="flex flex-col">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{scenarios[key].title}</span>
                    <span>{Math.round((allScores[key] / 15) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${key === 'galacticGlamour' ? 'bg-indigo-600' : 
                                                   key === 'worldOnPause' ? 'bg-gray-600' : 
                                                   key === 'globalJourneyProtocol' ? 'bg-green-600' : 'bg-blue-600'}`}
                      style={{ width: `${(allScores[key] / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-3">How to Prepare for This Future</h3>
            <ul className="space-y-2">
              {result.preparations.map((preparation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{preparation}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-3">Essential Packing List for 2040</h3>
            <ul className="space-y-2 mb-4">
              {result.packingList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center">
                <img src={`/api/placeholder/120/120?text=Item+1`} alt="Future travel item" className="rounded-lg shadow-md mb-2" />
                <span className="text-xs text-center">Concept visualization</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={`/api/placeholder/120/120?text=Item+2`} alt="Future travel item" className="rounded-lg shadow-md mb-2" />
                <span className="text-xs text-center">Concept visualization</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={`/api/placeholder/120/120?text=Item+3`} alt="Future travel item" className="rounded-lg shadow-md mb-2" />
                <span className="text-xs text-center">Concept visualization</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={resetGame}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Travel Again
            </button>
          </div>
        </div>
      )}
      
      <div className="mt-8 text-center text-sm text-gray-500">
        Based on four scenarios for future travel in 2040: Galactic Glamour, A World on Pause, The Global Journey Protocol, and Medically Prescribed Travel.
        <p className="mt-2">Version 3.0 - With introduction, timeline of headlines, and enhanced future narratives</p>
      </div>
    </div>
  );
}
