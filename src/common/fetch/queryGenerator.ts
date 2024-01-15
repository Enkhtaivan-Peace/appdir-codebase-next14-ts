export function generateQuery(payload:any) {
    console.log('generateQuery', payload)
    const search = `?${payload.search}&searchField=${payload.fieldName}` 

    for( const property in payload) {
        const value = payload[property];
        console.log(value)
        if(value) {
            if(value === 'search') {
                
            }
        }
    }

    return search
}