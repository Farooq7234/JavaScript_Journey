/**
 * The createTodo function sends a POST request to a JSON API with a todo object and returns the
 * response.
 * @param todo - The `todo` parameter is an object that represents a todo item. It contains properties
 * such as `title`, `body`, and `userId`.
 * @returns The function `createTodo` is returning the response from the API call made using the
 * `fetch` function.
 */
const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
/**
 * The function `getTodo` is an asynchronous function that fetches a todo item from a JSON API based on
 * the provided id.
 * @param id - The `id` parameter is the unique identifier of the todo item that you want to retrieve.
 * It is used to construct the URL for the API request.
 * @returns The function `getTodo` is returning a Promise that resolves to the JSON data fetched from
 * the specified URL.
 */

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

/**
 * The mainFunc function creates a new todo object, calls the createTodo function to create the todo,
 * and then logs the created todo and the result of calling the getTodo function with an id of 101.
 */
const mainFunc = async () => {
    let todo = {
            title: 'Harry2',
            body: 'bhai2',
            userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}

mainFunc()