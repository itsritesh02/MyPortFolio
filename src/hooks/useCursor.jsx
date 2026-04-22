import { useEffect, useRef } from "react";

export default function useCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let fx = 0, fy = 0;
    let mx = 0, my = 0;

    // Move dot cursor instantly
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    // Follower ring lags behind smoothly
    const animateFollower = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + "px";
      follower.style.top = fy + "px";
      requestAnimationFrame(animateFollower);
    };

    // Scale up cursor on hover over links/buttons
    const onEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      follower.style.transform = "translate(-50%, -50%) scale(1.5)";
    };
    const onLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMouseMove);
    animateFollower();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return { cursorRef, followerRef };
}