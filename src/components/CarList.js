import { useSelector } from "react-redux"
function CarList() {
const cars = useSelector(state => state.cars.car)
console.log(cars)
  return (
    <div>CarList</div>
  )
}

export default CarList