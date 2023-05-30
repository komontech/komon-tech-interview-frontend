import { connectionState } from "@/store";
import axios from "axios";
import { useSetAtom } from "jotai";
import { useState } from "react";

export const useFakeAuth = () => {
    const setConnection = useSetAtom(connectionState);
    const [loading, isLoading] = useState(false)
    const authLogin = async()=> {
        isLoading(true)
        await axios.get(`https://63ce099f6d27349c2b66a67e.mockapi.io/api/v1/post`,{
            method: "GET"
        })
        .then((response: any) => {
            const authUser ={
                name: 'henry okafor',
                connection: true,
                social: 'twitter'
            }
            setConnection({...authUser, posts: response.data });
        }).catch((err)=>console.log(err.message))
        .finally(()=> isLoading(false))
    }
   
    return (
       {authLogin, loading}
    );
};
