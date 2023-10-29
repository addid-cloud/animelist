export const getAnimeResponse = async(resource,qury)=>{
const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${qury}`)
const anime  = response.json()
return anime
}

export const getNestedAnimeRespon = async(resource, objectProperty)=>{
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item.entry)
}