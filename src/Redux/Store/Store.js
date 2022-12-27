import { createStore } from "redux";
import reducer from "../Reducers/Combine";

const store = createStore(reducer);

export default store;
