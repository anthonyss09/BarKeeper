import { FaWineBottle } from "react-icons/fa";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";

export const links = [
  {
    id: 1,
    text: "All products",
    path: "/",
    icon: <FaGlassCheers />,
  },
  {
    id: 2,
    text: "Add product",
    path: "/add-product",
    icon: <FaGlassMartiniAlt />,
  },
  {
    id: 3,
    text: "Inventory",
    path: "/inventory",
    icon: <FaWineBottle />,
  },
];

export default links;
