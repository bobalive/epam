import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Garage} from "./pages/Garage/Garage..tsx";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./store/reduxStore.ts";
import {Winners} from "./pages/Winners/Winners.tsx";
import {Header} from "./components/Header/Header.tsx";
import {useEffect} from "react";
import {getNewCars} from "./store/slices/carSlise.ts";
import {AppDispatch, StoreInterface} from "./interfaces/storeInterface.ts";
import {resetCurrentWinner} from "./store/slices/winnersSlice.ts";


function App() {
    const carPage=useSelector<StoreInterface,number>(state => state.cars.page)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getNewCars());
        dispatch(resetCurrentWinner({}))
    }, [carPage]);

  return (
      <div className='container'>
          <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path={'/'} element={<Garage page={carPage}/>}/>
                  <Route path={'/winners'} element={<Winners/>}/>
              </Routes>
            </BrowserRouter>
          </Provider>
      </div>
)
}

export default App
