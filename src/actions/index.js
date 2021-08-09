import { CREATE_POST } from "./type";


export const createPost=(post)=>{
    return {
        type:CREATE_POST,
        payload:post,
    }
}