import { createStore, combineReducers } from "redux";
const reducers = {},
  initial = {};
const hocs = {
  "pageTitles":require("./reducers/pageTitles"),
  "search":require("./reducers/search"),
};
for(let hoc in hocs)
{
    reducers[hoc] = hocs[hoc].reducer
    initial[hoc] = hocs[hoc].initial
}

const Store = createStore(
    combineReducers(reducers),
    initial
);
export default Store