import supabase from "../../../utils/supabase.js";

export const getAuthors = (authors) => ({
  type: "GET_AUTHOR",
  authors,  
});
export const getBooks = (books) => ({
  type: "GET_BOOKS",
  books,
});

export const addAuthorToDatabase = async (authors) => {
  const { data, error } = await supabase.from("authors").insert([authors]);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard-author");
  }
};

export const editAuthorToDatabase = async (id, authors) => {
  const { data, error } = await supabase
    .from("authors")
    .update(authors)
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard-author");
  }
};

export const removeAuthorToDatabase = async (id) => {
  const { data, error } = await supabase.from("authors").delete().eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard-author");
  }
};
