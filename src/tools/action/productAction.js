import supabase from "../../../utils/supabase.js";

export const getProduct = (products) => ({
  type: "GET_PRODUCT",
  products,
});
export const addProductToDatabase = async (product) => {
  const { data, error } = await supabase.from("narnia-product").insert([product]);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};

export const editProductToDatabase = async (id, product) => {
  const { data, error } = await supabase
    .from("narnia-product")
    .update(product)
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};

export const removeProductToDatabase = async (id) => {
  const { data, error } = await supabase
    .from("narnia-product")
    .delete()
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};
