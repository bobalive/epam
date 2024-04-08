import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Garage} from "./pages/Garage/Garage..tsx";
import {Provider} from "react-redux";
import {store} from "./store/reduxStore.ts";


function App() {
  return (
      <div className='container'>
          <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Garage/>}/>
                  <Route path={'/winners'} element={<Garage/>}/>
              </Routes>
            </BrowserRouter>
          </Provider>
      </div>
)
}

export default App
