import supabase from "../../../utils/supabase";

export const getProduct = (products) => ({
  type: "GET_PRODUCT",
  products,
});
export const addProductToDatabase = async(produt) => {
  const { data, error } = await supabase.from("narnia-product").insert(produt);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};

export const editProductToDatabase = async(produt) => {
  const { data, error } = await supabase.from("narnia-product").insert(produt);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};

export const removeProductToDatabase = async(produt) => {
  const { data, error } = await supabase.from("narnia-product").insert(produt);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};
