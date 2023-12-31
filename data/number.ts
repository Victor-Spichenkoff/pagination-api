function getNumberInInterval(interval: number[]) {
    return Math.floor(interval[0] + (Math.random() * (interval[1] - interval[0])))
}

interface Pagination {
    page: number,
    pageSize: number,
    totalPages: number;
}

function ascendent(pagination: Pagination, range: number[], times: number) {//times==vezes que já passou
    try{
        const { page, pageSize } = pagination
    
        const lastBiggest = range[0] + pageSize * (page-1) + (1 * times)
    
        if(lastBiggest > range[1]) return range[1]
        return lastBiggest
    } catch(e) {
        throw 'Error: number'
    }
}


function descendant(pagination: Pagination, range: number[], times: number) {
    try{
        const { page, pageSize } = pagination

        const lowest = range[1] - pageSize * (page-1) - (1 * times)
        
        if(lowest < range[0]) return range[0]
        return lowest
    } catch(e) {
        throw 'Error: number'
    }
}

function getSimpleNumber() {//para o array
    return  Math.floor(Math.random() * 100)
}

export { getNumberInInterval, ascendent, descendant, getSimpleNumber, Pagination }