import { Config } from "../config"

export const Tools = {
    URL:(url)=>{
        return `${Config.BASE_URL}${url}`
    }
}