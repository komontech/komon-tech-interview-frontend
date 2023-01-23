import { connectionState } from "@/store";
import { useSetAtom } from "jotai";
import axios from "axios";

export const useFakeAuth = () => {
    const setConnection = useSetAtom(connectionState);
    const authLogin = async()=> {
        await axios.get(`https://63ce099f6d27349c2b66a67e.mockapi.io/api/v1/post`,{
            method: "GET"
        })
        .then((response: any) => {
           const ob = response
            console.log(response)
            const authUser ={
                name: 'henry okafor',
                connection: true,
                social: 'twitter'
            }
            setConnection({...authUser, posts: response.data });
        });
    }
   
    return (
       {authLogin}
    );
};
