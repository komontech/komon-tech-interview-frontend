import { atom } from "jotai"

export const connectionState = atom({
    connection: false,
    auth: null,
    social: '',
    name: '',
    posts: []

})
   const connectionSt = atom((get) => get(connectionState))