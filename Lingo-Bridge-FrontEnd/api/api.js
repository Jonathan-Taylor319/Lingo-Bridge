async function basicFetch(url, payload) {
    const res = await fetch(url, payload);
    
    // Capture the status and statusText from the response
    const status = res.status;
    const statusText = res.statusText;

    // Parse the response body as JSON
    const body = await res.json();

    // Return both the response body and server response details (status, statusText)
    return { body, status, statusText };
}

export async function signup(context) {
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",   
        },
        body: JSON.stringify(context)
    };
    const { body, status, statusText } = await basicFetch("http://localhost:8000/user/signup/", payload);
    
    // Return the full response including body and status
    return { body, status, statusText };
}

export async function login(context) {
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(context)
    };
    const { body, status, statusText } = await basicFetch("http://localhost:8000/user/get-token/", payload);
    
    // Return the token along with status info
    return { token: body.token, status, statusText };
}

export async function getUser(token) {
    const payload = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    };
    const { body, status, statusText } = await basicFetch("http://localhost:8000/user/get-user/", payload);
    
    // Return the user data along with status info
    return { user: body.result, status, statusText };
}
