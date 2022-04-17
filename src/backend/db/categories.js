import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    categoryName: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    _id: uuid(),
  },
  {
    categoryName: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    _id: uuid(),
  },
  {
    categoryName: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    _id: uuid(),
  },
  {
    categoryName: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    _id: uuid(),
  },
  {
    categoryName: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    _id: uuid(),
  },
];
