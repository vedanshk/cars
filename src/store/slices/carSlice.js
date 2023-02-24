import { createSlice, nanoid } from "@reduxjs/toolkit";

const CarSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    car: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.car.push({
          id: nanoid(),
        cost: action.payload.cost,
        name:action.payload.name
      });
    },
    removeCar(state, action) {
      console.log(action.payload.id)
      const updatedCar = state.car.filter(
        (data) => data.id !== action.payload.id
      );
      state.car = updatedCar;
    },
  },
});

export const {changeSearchTerm , addCar , removeCar} =  CarSlice.actions;
export const carReducer = CarSlice.reducer;
