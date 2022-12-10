// const baseURL = `${process.env.BASE_URL}/users/login`;
const baseURL = `http://localhost:9090/api`; 
import QueryString from 'qs';

export const loginHelper = async (username, password) => {
    const res = await fetch(`${baseURL}/users/login/${username}/${password}`);
    const data = await res.json();
    // console.log(">>",data);
    return data;
}

export const registerHelper = async (params) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
        body: QueryString.stringify(params)
    }
    const res = await fetch(`${baseURL}/users/signup`, options);
    const data = await res.json();
    // console.log(">>",data);
    return data;
}

export const getTasks = async () => {
    const res = await fetch(`${baseURL}/jobs/all`);
    const data = await res.json();
    // console.log(">>",data);
    return data.jobs;
}


export const getUserJobs = async (username) => {
//    first get all the jobs from the jobs column in the database
    const allJobs = await getTasks();
    // then get the jobs from the user
    const res = await fetch(`${baseURL}/users/findbyusername/${username}`);
    const data = await res.json();
    // then filter out the jobs that are in the user's jobs based on the jobId in data.alljobs, then return the filtered jobs
    const userJobs = allJobs?.filter((job) => data.alljobs.includes(job.jobId));
    // console.log(">>",userJobs);
    // console.log(allJobs);
    return userJobs;
}

// get the jobs th user created, thejobs with the author name set to the name of the user
export const getUserCreatedJobs = async (name) => {
    const res = await fetch(`${baseURL}/jobs/findbyauthor/${name}`);
    const data = await res.json();
    // console.log(">>users job",data);
    return data;
}