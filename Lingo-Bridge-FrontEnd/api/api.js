// basic function - goes to url to grab data
// payload is our request
// fetch - sends and gets response
// turn it into json

async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
}

//take context (data) create a payload - "POST" header says i got json - body jsxonstringify convertes context to json and gives a response
//repeat as needed to create other crud operations needed
export async function signup(context) {
    const payload = {
        method: "POST",
        Headers: {
            "Content-Type": "application/json",   
        },
        body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/user/signup/", payload)
    return body
}

//will only return a token
export async function login(context) {
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/user/get-token/", payload)
    return body.token
}

export async function getUser(token) {
    const payload = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    }
    const body = await basicFetch("http://localhost:8000/user/get-user/", payload)
    return body.result
}