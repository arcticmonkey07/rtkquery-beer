import "./App.css";
import BeersContainer from "./components/BeersConrainer/BeerContainer";
import AddBeer from './components/AddBeer/AddBeer';
import { useAppSelector } from "./hooks/redux";
import Header from "./components/Header/Header";

function App() {
  const dark = useAppSelector(state => state.beerReducer.dark);

  if (dark) {
    document.body.style.backgroundColor = "rgb(112, 110, 110)";
  } else {
    document.body.style.backgroundColor = "#fff";
  }

  return (
    <div className="App">
      {/* {isLoading && <div>Loading...</div>}
      {error && <h2>{error}</h2>}
      <div>{JSON.stringify(users, null, 2)}</div> */}
      <Header />
      <AddBeer />
      <BeersContainer />
    </div>
  );
}

export default App;
