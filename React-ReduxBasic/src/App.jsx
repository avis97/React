import {Provider} from "react-redux"
import store from "./Redux-Practice/Store"
import BookContainer from "./Redux-Practice/BookContainer";


function App(){
  return (
    <Provider store={store}>
      <BookContainer/>
    </Provider>
  );
}

export default App;
