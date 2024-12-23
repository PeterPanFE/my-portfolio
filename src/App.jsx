import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components'
import StickyButtons from './components/StickyButtons';
import app from './firebase';

function App() {
  console.log("Firebase app initialized:", app);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0 mb-[100px]">
          <Contact />
          <StarsCanvas />
        </div>
        <StickyButtons />
      </div>
    </BrowserRouter>
  )
}

export default App
