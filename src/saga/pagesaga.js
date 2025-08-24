import { call, put, takeLeading } from "@redux-saga/core/effects";
import { PageFail, PageRequest, PageSucess } from "../slice/pageslice";
import { getPageData } from "../service/pageservice";


export function* asyncPage(){
    try{
        let p =yield call(getPageData)

        yield put(PageSucess(p))
    }
    catch(error){
        yield put(PageFail(error))
    }
}


export function* watcherPage(){
    yield takeLeading(PageRequest().type , asyncPage)
}