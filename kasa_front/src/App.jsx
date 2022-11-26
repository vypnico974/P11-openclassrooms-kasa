/* import react */
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
/* import composants  */
import Header from './components/Header'
import Footer from './components/Footer'
/* css  */
import './styles/normalize.css'
import './styles/style.css'

export default function App() {
  return (
    <div>
      <Header />
         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  )
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Error() {
  return (
    <>
      <main>
        <h2>Erreur</h2>
        <p>
          Oups... Cette page n'existe pas
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}