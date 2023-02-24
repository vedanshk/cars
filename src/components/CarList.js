import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const cars = useSelector((state) => {
    const {cars:{car , searchTerm} } = state;

    return car.filter((data) => data.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeCar({ id }));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleClick(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
