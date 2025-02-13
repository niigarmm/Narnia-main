import { v4 as uuidv4 } from "uuid";
export const getProduct = () => ({
  type: "GET_PRODUCT",
});
export const addProduct = ({ img, title, price, desc, author, cat }) => ({
  type: "ADD_PRODUCT",
  payload: {
    id: uuidv4(),
    img,
    title,
    price,
    desc,
    author,
    cat,
  },
});

export const removeProduct = (id) => ({
  type: "REMOVE_PRODUCT",
  id,
});

export const editProduct = ({id,edit})=>({
  type:"EDIT_PRODUCT",
  id,edit
})