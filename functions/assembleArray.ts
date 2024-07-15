import { Pagination } from "../data/number";
import createAnObject from "./convertNameObj";
const reqTest = {

}
interface Req {
    pagination: Pagination
    fields: object
}

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function makeCurentPageArray(req: Req) {//pagination e fields
    try {
        const finalArray: object[] = []
        const finalArray2: object[] = []
        
        for (let itemCont = 0; itemCont < req.pagination.pageSize; itemCont++) {
            const res = await createAnObject(finalArray, req.fields, req.pagination, itemCont)
            finalArray2.push(res)
        }
        await sleep(500)
        console.log("/*/*------------------------")
        console.log(finalArray2[0])
        
        return finalArray2[0]
    } catch(e) {
        throw e
    }
}

// const testReq = {
//     pagination: {
//         page: 2,
//         pageSize: 5,
//         totalPages: 3
//     },
//     fields: {
//         nhe: {
//             type: 'object',
//             fields: {
//                 nome: 'name',
//                 idade: {
//                     type: 'number',
//                     range: [1, 123]
//                 }
//             }
//         }
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
//     }
// }

export default makeCurentPageArray

// console.log(makeCurentPageArray(testReq))