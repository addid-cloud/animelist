export const getAnimeResponse = async (resource, qury) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${qury}`)
    const anime = response.json()
    return anime
}

export const getNestedAnimeRespon = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const selectedIndices = new Set();
    const selectedData = [];

    while (selectedData.length < gap && selectedData.length < data.length) {
        const randomIndex = ~~(Math.random() * data.length);

        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex);
            selectedData.push(data[randomIndex]);
        }
    }

    const response = {
        data: selectedData,
    };

    return response;
};

export const generateRandomId = (length = 5) => {
    const characters = '0123456789';
    const charactersLength = characters.length;
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
};

// File: libs/utils.js

export const formatAnimeDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  