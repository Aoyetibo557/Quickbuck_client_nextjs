// const baseURL = `${process.env.BASE_URL}/users/login`;
const baseURL = `http://localhost:9090/api/users/login`; 

export const loginHelper = async (username, password) => {
    const res = await fetch(`${baseURL}/${username}/${password}`);
    const data = await res.json();
    console.log(">>",data);
    return data;
}
