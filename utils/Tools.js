import { Config } from "../config"

export const Tools = {
    URL:(url)=>{
        return `${Config.BASE_URL}/api${url}`
    },
    STORAGE:(file)=>`${Config.BASE_URL}/download/${file}`
}