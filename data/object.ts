import createAnObject from "../functions/convertNameObj"
import { Pagination } from "./number"

function getObject(obj: object, pagination: Pagination, times: number) {//passar o proprios campos 
    const array: any[] = []
    // console.log(obj)
    const finalObj = createAnObject(array, obj, pagination, times)
    return finalObj[0]
}

export default getObject