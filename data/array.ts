import { selectAndGiveType } from "../functions/giveProperty"


function getArrayFrom(baseArray: string[]): any[] {
    return baseArray.map(type => {
        return selectAndGiveType(type, {page:1, pageSize:10, totalPages:10}, 1)
    })
}


export default getArrayFrom