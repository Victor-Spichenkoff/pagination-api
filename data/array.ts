import { selectAndGiveType } from "../functions/giveProperty"


function getArrayFrom(baseArray: string[]): any[] {
    try{
        return baseArray.map(type => {
            return selectAndGiveType(type, {page:1, pageSize:10, totalPages:10}, 1)
        })
    } catch(e) { throw 'Error: Array' }
}


export default getArrayFrom