import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import router from "./Router/router"
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <Provider store={store} >
    <div className="App">
    <RouterProvider router={router} />
    </div>
    </Provider>
  );
}

export default App;
