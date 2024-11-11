import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Experience,
  Contact,
} from "./components";
import { styles } from "./style";
import { Analytics } from '@vercel/analytics/react';

const App = () => {

 return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className={`bg-[${styles.bgColor}] bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Analytics /> {/* Add Analytics here */}
      </div>
    </BrowserRouter>
  );
}

export default App
