import { ItemTypes } from "./const";
import { VideoType } from "./types/video";
import { ItemType } from "./types/item";
import { SizeTableType } from "./types/sizes-table";
import { PromocodeType } from "./types/promocode";

export const Videos: VideoType[] = [
    {
        src: "prev1.MOV",
        id: '1',
        description: 'collection',
        link: '/catalog'
    },
    {
        src: "prev2.MOV",
        id: '2',
        description: 'stuff',
        link: '/catalog'
    },
    {
        src: "prev3.MOV",
        id: '3',
        description: 'cup',
        link: '/catalog'
    },
]

export const Items: ItemType[] = [
    {
        previewImages: ['phelps-hands-fw.jpg', 'phelps-hands-bc.jpg', 'longsleeve-net.jpg'],
        price: 2000,
        article: 'phelps-hands',
        title: 'phelps-hands',
        type: ItemTypes.Hoodie,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['pants1-fw.jpg'],
        price: 200,
        article: 'shorts',
        title: 'shorts',
        type: ItemTypes.Shorts,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['olympicstuff-fw.jpg'],
        price: 200,
        article: 'olympicstuff',
        title: 'olympic-stuff tee',
        type: ItemTypes.Tee,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    }
]

export const SizesTables: SizeTableType[] = [
    {
        previewImage: 'longsleeve-net.jpg',
        type: ItemTypes.Longsleeve
    },
    {
        previewImage: 'tee-net.jpg',
        type: ItemTypes.Tee
    },
    {
        previewImage: 'hoodie-net.jpg',
        type: ItemTypes.Hoodie
    },
    {
        previewImage: 'shorts-net.jpg',
        type: ItemTypes.Shorts
    }
]

export const Promocodes: PromocodeType[] = [
    {
        keyWord: 'JULYSALE',
        sale: 0.9
    },
    {
        keyWord: 'STUFF',
        sale: 0.8
    }
]