import { v4 as uuid } from "uuid";
export const Products = [
    {
        _id: uuid(),
        productName: "KSL 01",
        productImg: "./assets/shoe.jpg",
        startRange: 1500,
        cost: 2000,
        rating: 70,
        productColor: "black",
        reviews: 80,
        type: "Sneakers"
    },
    {
        _id: uuid(),
        productName: "KSW 01",
        productImg: "./assets/shoe2.png",
        startRange: 1500,
        cost: 2500,
        rating: 50,
        productColor: "white",
        reviews: 60,
        type: "Sneakers"
    },
    {
        _id: uuid(),
        productName: "KSM 01",
        productImg: "./assets/shoe3.jpg",
        startRange: 4001,
        cost: 4500,
        rating: 80,
        productColor: "gray",
        reviews: 50,
        type: "Loafers"
    },
    {
        _id: uuid(),
        productName: "KSN 01",
        productImg: "./assets/shoe4.jpg",
        startRange: 7001,
        cost: 7500,
        rating: 90,
        productColor: "blue",
        reviews: 20,
        type: "Sneakers"
    },
    {
        _id: uuid(),
        productName: "KSG 01",
        productImg: "./assets/shoe5.webp",
        startRange: 1500,
        cost: 3000,
        rating: 90,
        productColor: "brown",
        reviews: 40,
        type: "Loafers"
    },
    {
        _id: uuid(),
        productName: "KSD 01",
        productImg: "./assets/shoe6.webp",
        startRange: 7001,
        cost: 8000,
        rating: 95,
        productColor: "white",
        reviews: 10,
        type: "Sneakers"
    }
]