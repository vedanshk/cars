import { createSlice, nanoid } from "@reduxjs/toolkit";

const CarSlice = createSlice({
  name: "car",
  initialState: {
    searhTerm: "",
    car: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searhTerm = action.payload;
    },
    addCar(state, action) {
      state.car.push({
          id: nanoid(),
        cost: action.payload.cost,
        name:action.payload.name
      });
    },
    removeCar(state, action) {
      const updatedCar = state.car.filter(
        (car) => car.id !== action.payload.id
      );

      state.car = updatedCar;
    },
  },
});

export const {changeSearchTerm , addCar , removeCar} =  CarSlice.actions;
export const carReducer = CarSlice.reducer;
