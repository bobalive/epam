import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    createCar,
    getCars,
    getTotalCarsNumber,
    handleDeleteCar,
    handleUpdateCar,

} from "../../api/cars.api.ts";
import {CarInterface, CarParams, SelectedCarInterface} from "../../interfaces/carInterface.ts";
import {CarsReduserInerface, StoreInterface} from "../../interfaces/storeInterface.ts";


const initialState:CarsReduserInerface = {
    page:1,
    cars:[],
    totalNumber:0,
    selectedCar:{
        id:-1,
        name:'',
        color:'',
    },
};
export const getNewCars = createAsyncThunk(
    'cars/fetchCars',
    async (_payload,{getState}) => {
        const store = getState() as StoreInterface
        const response = await getCars(store.cars.page);
        return response;
    }
);
export const createNewCar  = createAsyncThunk(
    'cars/createCars',
    async ({color, name}:CarParams)=>{
        const response = await createCar({color, name})
        return response
    }
)
export const getTotalCount = createAsyncThunk(
    'cars/fetchTotal',
    getTotalCarsNumber
)
export const deleteCar = createAsyncThunk(
    'cars/delete',
    handleDeleteCar
)
export const upadateCar = createAsyncThunk(
    "cars/update",
    async ({color, name,id}:SelectedCarInterface)=>{
        const response = await handleUpdateCar({color, name,id})
        return response
    }
)

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars(state, action: PayloadAction<CarInterface[]>) {
            state.cars = action.payload;
        },
        setPage(state, action:PayloadAction<number>){
            state.page = action.payload
        },
        setSelectedCar(state , action:PayloadAction<CarInterface>){
            state.selectedCar = action.payload
        },
        setPosition(state , action:PayloadAction<{id:number,position:number}>){
            state.cars = state.cars?.map(item=>{
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        position:action.payload.position
                    }
                }
                return item
            })
        },
        resetPositions(state , _action){
            state.cars = state.cars?.map(car =>({
                ...car,
                position:0
            }))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNewCars.fulfilled, (state, action) => {
            state.cars =  action.payload?.map(item=>({
                ...item,
                position:0
            }));
        });
        builder.addCase(createNewCar.fulfilled , (state, _action)=>{
            state.totalNumber++
        });
        builder.addCase(getTotalCount.fulfilled , (state , action)=>{
            state.totalNumber = action.payload|| 0
        })
        builder.addCase(deleteCar.fulfilled , (state , _action)=>{
            state.totalNumber--
        })
        builder.addCase(upadateCar.fulfilled ,(state , action)=>{
            state.selectedCar = {
                id:-1,
                name:'',
                color:'',
            }
            state.cars = state.cars?.map(car=>{
                if(car.id === action.payload?.id){
                    return {...action.payload , position:0}
                }
                return  car
            })
        })

    },
});
export const { setCars,setPage,setSelectedCar,setPosition,resetPositions } = carsSlice.actions;
export default carsSlice.reducer;
