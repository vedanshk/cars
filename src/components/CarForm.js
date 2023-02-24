import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeName, addCar } from "../store";
function CarForm() {
  const dispatch = useDispatch();

  const { name , cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const costValue = parseInt(e.target.value) || 0;
    dispatch(changeCost(costValue));

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Cost" , cost)

    dispatch(addCar({name , cost}));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Cars</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost}
              type="number"
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
