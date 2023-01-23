import { atom } from "jotai"

export const connectionState = atom({
    connection: false,
    social: ''

})
   const connectionSt = atom((get) => get(connectionState))