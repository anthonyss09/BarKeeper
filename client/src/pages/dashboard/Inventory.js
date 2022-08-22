import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import {
  InventoryBeer,
  InventorySpirit,
  InventoryWine,
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
    getInventories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInventories();
  };
  return (
    <form onSubmit={handleSubmit} className="container-inventory">
      <InventoryBeer products={beers} />
      <InventorySpirit products={spirits} />
      <InventoryWine products={wines} />
      {/* <button type="submit" className="btn-main btn-inventory">
        Update inventory
      </button> */}
    </form>
  );
}
