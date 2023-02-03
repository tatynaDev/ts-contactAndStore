export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface IContact {
     id: number
    name: string
    image: string | ArrayBuffer | any
    isChanged: boolean
}