import { ItemTypes } from "../const"

export type ItemType = {
    previewImages: string[]
    price: number
    article: string
    title: string
    type: ItemTypes
    description: string
    sizes: string[]
}