import createAnObject from "../functions/convertNameObj"
import { Pagination } from "./number"

async function getObject(obj: object, pagination: Pagination, times: number) {//passar o proprios campos 
    try {
        const array: any[] = []
        // console.log(obj)
        const finalObj = await createAnObject(array, obj, pagination, times)
        return finalObj[0]
    } catch(e) { throw 'Error: Object' }
}

export default getObject