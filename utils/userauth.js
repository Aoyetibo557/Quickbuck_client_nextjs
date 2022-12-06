// const baseURL = `${process.env.BASE_URL}/users/login`;
const baseURL = `http://localhost:9090/api`; 

export const loginHelper = async (username, password) => {
    const res = await fetch(`${baseURL}/users/login/${username}/${password}`);
    const data = await res.json();
    console.log(">>",data);
    return data;
}

export const registerHelper = async (username, password) => {
    const res = await fetch(`${baseURL}/register/${username}/${password}`);
    const data = await res.json();
    console.log(">>",data);
    return data;
}

export const getTasks = async () => {
    const res = await fetch(`${baseURL}/jobs/all`);
    const data = await res.json();
    console.log(">>",data);
    return data.jobs;
}

/**
 * Next Steps:
 *  - The Jobs will come from acolumn in the user routes that has an array of jobIds asscociated with the user
 *  - The jobs will be fetched from the jobs collection based on the jobIds
 * - The jobs will be filtered based on their status
 * - The jobs will be passed to the columns based on their status
 * 
 * 
 * Frontend:
 * - Create a header{
 *  avater with dropdown menu {
 *     profile
 *    settings
 *   logout}
 * }
 */