export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`

    return query;
}

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match "${searchTerm}*" || category match '${searchTerm}*' || about match]{
        image {
            assets -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _key,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }}`

    return query;
}