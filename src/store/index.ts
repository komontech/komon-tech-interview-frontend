import { atom } from "jotai"

export const connectionState = atom({
    connection: false,
    social: '',
    name: '',
    posts: []
})