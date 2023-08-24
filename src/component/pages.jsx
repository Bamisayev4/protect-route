import { Link } from "react-router-dom";

export function About() {
  return <h1>you are now in about</h1>;
}

export function Contact() {
  return <h1>you are now in Contact</h1>;
}

export function Home() {
  return (
    <div>
      <h1>you are now in Home</h1>
    </div>
  );
}

export function Layout() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </header>
  );
}
