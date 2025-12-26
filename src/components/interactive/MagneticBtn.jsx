import { useRef } from "react";

export default function MagneticBtn({ children, className }) {
  const ref = useRef(null);

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
  };

  const leave = () => (ref.current.style.transform = `translate(0,0)`);

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={className}
    >
      {children}
    </button>
  );
}
