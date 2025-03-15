async function basicFetch(url, payload) {
    const res = await fetch(url, payload);
    
    // Capture the status and statusText from the response
    const status = res.status;
    console.log(status)
    const statusText = res.statusText;
    console.log(statusText)

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
    const { body, status, statusText } = await basicFetch("http://3.138.34.24:8000/user/signup/", payload);
    
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
    const { body, status, statusText } = await basicFetch("http://3.138.34.24:8000/user/get-token/", payload);
    
    // Return the token along with status info
    return { token: body.token, status, statusText };
}

// export async function getUser(token) {
//     const payload = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Token ${token}`
//         }
//     };
//     console.log("before await");
//     const body = await basicFetch("http://localhost:8000/user/get-user/", payload);
//     console.log("after the await");
    
//     // Return the user data along with status info
//     return { body, status, statusText };
// }

// export async function getUser(token) {
//     const payload = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Token ${token}`  // Ensure there's a space after 'Token'
//         }
//     };
//     console.log("Fetching user data with token:", token);
//     try {
//         const result = await basicFetch("http://localhost:8000/user/get-user/", payload);
//         console.log("Result from basicFetch:", result);
//         if (!result) {
//             console.log("No result returned from basicFetch.");
//             return undefined;  // Explicitly return undefined if result is falsy
//         }
//         const { body, status, statusText } = result;
//         console.log("Body received from API:", body);  // Log the raw body here
//         if (body && typeof body === 'object') {
//             console.log("Parsed response body (object):", body);
//         } else {
//             console.log("Unexpected body structure:", body);
//         }
//         return { body, status, statusText };
//     } catch (error) {
//         console.error("Error in getUser:", error);
//         throw error;  // Rethrow the error to be handled in the component
//     }
// }