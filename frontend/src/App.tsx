import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Garage} from "./pages/Garage/Garage..tsx";
import {Provider} from "react-redux";
import {store} from "./store/reduxStore.ts";
import {Winners} from "./pages/Winners/Winners.tsx";
import {Header} from "./components/Header/Header.tsx";

import {useEffect} from "react";
import {getNewCars} from "./store/slices/carSlise.ts";


function App() {
    const {page}= store.getState().cars
    useEffect(() => {
        store.dispatch(getNewCars());
    }, [page]);
  return (
      <div className='container'>
          <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path={'/'} element={<Garage page={page}/>}/>
                  <Route path={'/winners'} element={<Winners/>}/>
              </Routes>
            </BrowserRouter>
          </Provider>
      </div>
)
}

export default App
