import { all } from "@redux-saga/core/effects";
import { watcherPage } from "./pagesaga";

export function* rootsaga(){
    yield all([watcherPage()]);
}