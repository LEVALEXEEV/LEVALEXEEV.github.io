import { ItemType } from "./item"


export type CartItemType = ItemType & {
    selectedSize: string | undefined
    id: string
}