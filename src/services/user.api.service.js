let _url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => {
    return fetch(_url)
        .then(value => value.json())
}

const getUser = (id) => {
    return fetch(_url + '/' + id)
        .then(value => value.json())
}

export {getUsers, getUser};
