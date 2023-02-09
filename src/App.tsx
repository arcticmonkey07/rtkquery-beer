import "./App.css";
import BeersContainer from "./components/BeersConrainer/BeerContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import AddBeer from './components/AddBeer/AddBeer';

function App() {
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <div>Loading...</div>}
      {error && <h2>{error}</h2>}
      <div>{JSON.stringify(users, null, 2)}</div> */}
      <AddBeer />
      <BeersContainer />
    </div>
  );
}

export default App;
