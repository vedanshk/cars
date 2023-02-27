import { useSelector } from "react-redux";

function CarValue() {
  const cars = useSelector((state) => {
    const {
      cars: { car, searchTerm },
    } = state;

    return car.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  let totalValue = 0;
  for (const car of cars) {
    totalValue += car.cost;
  }

  return (
    <div className="car-value">
      TotalValue: ${totalValue}
    </div>
  );
}

export default CarValue;
