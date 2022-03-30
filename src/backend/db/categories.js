import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    categoryName: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    _id: uuid(),
  },
  {
    categoryName: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    _id: uuid(),
  },
  {
    categoryName: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    _id: uuid(),
  },
  {
    categoryName: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    _id: uuid(),
  },
  {
    categoryName: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    _id: uuid(),
  },
];
