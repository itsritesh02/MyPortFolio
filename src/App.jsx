import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home"
import useCursor from "./hooks/useCursor";

export default function App() {
  const { cursorRef, followerRef } = useCursor();

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />

      <Navbar />
      <Home />
      <Footer />
    </>
  );
}