import { Pagination } from "../data/number";
import createAnObject from "./convertNameObj";
const reqTest = {

}
interface Req {
    pagination: Pagination
    fields: object
}

function makeCurentPageArray(req: Req) {//pagination e fields
    const finalArray: object[] = []

    for (let itemCont = 0; itemCont < req.pagination.pageSize; itemCont++) {
        createAnObject(finalArray, req.fields, req.pagination, itemCont)
    }

    return finalArray
}

const testReq = {
    pagination: {
        page: 2,
        pageSize: 5,
        totalPages: 3
    },
    fields: {
        nhe: {
            type: 'object',
            fields: {
                nome: 'name',
                idade: {
                    type: 'number',
                    range: [1, 123]
                }
            }
        }
        // nhe: 'name'
        // idade: {
        //     type: 'number',
        //     range: [1, 123]
        // },
    //     teste: {
    //         type: 'desc',
    //         range: [0, 100]
    //     },
    //     array: {
    //         type: 'array', 
    //         fields: ['name', 'number']
    //     }
    }
}

console.log(makeCurentPageArray(testReq))