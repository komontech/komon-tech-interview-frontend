import { atom } from "jotai"

export const connectionState = atom({
    connection: false,
    social: '',
    name: '',
    posts: []
})
export const editModalState = atom({
    open: false,
   data: {}
})
export const pollState = atom(false)