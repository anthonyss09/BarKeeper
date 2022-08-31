import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import {
  InventoryBeer,
  InventorySpirit,
  InventoryWine,
  ScrollButton,
} from "../../components";

export default function Inventory() {
  const {
    getInventories,
    beers,
    spirits,
    wines,
    isLoading,
    updateInventories,
  } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    getInventories();
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInventories();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container-inventory">
        <InventoryBeer products={beers} />
        <InventorySpirit products={spirits} />
        <InventoryWine products={wines} />
        {/* <button type="submit" className="btn-main btn-inventory">
        Update inventory
      </button> */}
      </form>
      {visible && (
        <div className="scroll-btn-container">
          <ScrollButton />
        </div>
      )}
    </div>
  );
}
