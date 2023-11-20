import {toast} from "react-hot-toast"
import { apiConnector } from "./apiconnector"
const BASE_URL = "http://localhost:4000";

export const gettAllCollection = async() =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+"/collection/getdata")
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const gettObjectByRegion = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbyregion/${name}`)
        console.log(response,"response ha bhai")
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
        console.log(response?.data?.data,"response is ..");
        result = response

    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const gettObjectByLikelihood = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbylikelihood/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const gettObjectBySource = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbysource/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getObjectByPestle = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbypestle/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getObjectByStartYear = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbystartyear/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getObjectByEndYear = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbyendyear/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getobjectByCountry = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbycountry/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getObjectByTopic = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbytopic/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getObjectBySector = async(name) =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+`/objectc/getobjectsbysector/${name}`)
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getSWOT = async() =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+"/collection/getswot")
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getSource = async() =>{
    const toastId = toast.loading("Loading..");
    let result =[];
    try{

        const response = await apiConnector("GET",BASE_URL+"/collection/getsource")
        if(!response?.data?.success){
            throw new Error("Could Not Fetch collection") 
        }
       // console.log(response?.data?.data,"response is ..");
        result = response?.data
    }
    catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}



