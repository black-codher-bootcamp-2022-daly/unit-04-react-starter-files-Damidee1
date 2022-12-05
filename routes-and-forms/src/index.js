import { React } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PetForm from "./components/PetForm";

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li>
          <Link to="/"> All Pets </Link>
        </li>
        <li>
          <Link to="/kittens"> Kittens </Link>
        </li>
        <li>
          <Link to="/puppies">Puppies</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="puppies" element={<Puppies />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>All Pets</h1>
      <section>This is the page for all your pet needs</section>
      <PetForm />
      <img src="imgs/kitten.jpg" alt="Kitten" />
      <img src="imgs/puppy.jpg" alt="Puppy" />
      <img src="imgs/duckling.jpg" alt="Duckling" />
    </>
  );
}

function Kittens() {
  return (
    <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
    </>
  );
}
function Puppies() {
  return (
    <div>
      <h2>Puppies</h2>
      <section>This is the puppies page</section>
      <img src="imgs/puppy.jpg" alt="Puppies" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
