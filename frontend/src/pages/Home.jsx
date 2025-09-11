import DashboardHeader from "../components/DashboardHeader";
import TextType from "../components/TextType"; 
import Stepper, { Step } from '../components/Stepper';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation */}
     <div className="sticky top-0 z-5">
      <DashboardHeader />
    </div>

      {/* Hero Section */}
      <section className="mt-20 flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <TextType
            text={[
              "Welcome to Course and Career Counselling Guide",
              "Explore the vast educational courses available in India",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#7c3aed", "#7c3aed"]}
          />
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600 text-base sm:text-lg">
          Our platform helps students discover career opportunities after{" "}
          <span className="font-semibold text-gray-800">Grade 10</span> and{" "}
          <span className="font-semibold text-gray-800">Grade 12</span>.  
          You can search for colleges across India, explore courses, check upcoming exams, 
          and even connect with advisors to get personalized guidance.  
          With AI-powered insights, we’ll help you find the best-suited degree or course for your future 🚀
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-violet-700 transition">
            Browse Colleges
          </button>
          <button className="px-6 py-3 border border-violet-600 text-violet-600 font-medium rounded-lg hover:bg-violet-50 transition">
            Connect with Advisor
          </button>
        </div>
      </section>

      {/* Features Section with ScrollStack */}
      <div className="px-6 md:px-16 py-12 bg-gray-50 ">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
          console.log(step);
         }}
         onFinalStepCompleted={() => console.log("All steps completed!")}
         backButtonText="Previous"
         nextButtonText="Next"
         
        >
          <Step>
    <h2>🎓 Courses & Exams</h2>
    <p>Explore detailed information on courses and exams available after Grade 10 & 12.</p>
  </Step>
  <Step>
    <h2>🏫 Colleges Across India</h2>
    {/* <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" /> */}
    <p>Search and filter through thousands of colleges by state, stream, and ranking.</p>
  </Step>
  <Step>
    <h2>🤝 Advisor Support</h2>
    <p>Talk directly with career advisors and get personalized guidance for your journey.</p>
  </Step>
  <Step>
    <h2>🧪 AI Career Test</h2>
    <p>Take an interactive test and get your results analysed by AI to find your ideal career path.</p>
  </Step>
        </Stepper>
  

      </div>
    </div>
  );
}

export default Home;
