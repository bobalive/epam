import {carBrands, carModels} from "../data/cars.ts";
import {getRandomNumber} from "./getRandomNumber.ts";

export const getRandomCar = ()=>{
    const randBrandId =  getRandomNumber(0,carBrands.length-1);
    const randBrand = carBrands[randBrandId]

    const randMarkId = getRandomNumber(0, carModels[randBrand].length -1)
    const randModel = carModels[randBrand][randMarkId]

    return `${randBrand} ${randModel}`
}