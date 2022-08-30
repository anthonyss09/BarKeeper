import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button type="button" className="scroll-btn" onClick={handleClick}>
      <FaArrowCircleUp size={50} />
    </button>
  );
}
