import { ReactNode } from "react"
interface HueObject {
    [x: string]: ReactNode
    id?: number,
    color: string,
    username: string,
    likes: number,
    isLiked: boolean
}

export default HueObject