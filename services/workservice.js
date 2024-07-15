import axios from "axios";

export async function allWorks(page){
    const works=await axios.get(`http://localhost:3000/api/works?page=${page}`)
    return works.data;
}

export async function getWork(id){
    const work=await axios.get(`http://localhost:3000/api/works/${id}`)
    return work.data;
}

export async function newWork(body){
    console.log(body);
    const newwork=await axios.post(`http://localhost:3000/api/works/upload`,body);
    return newwork.data;
}