// API endpoint response does not provide category names, only their IDs.
// This function compares the API response's category id with the hardcoded categoryIDs in constants.js
// constants.js contains not only the IDs, but also their respective names (i.e "uncategorized" = 77)
import { categoryConstants } from "../constants/categories";


export function setCategoryName(data) {


    for (let x in data) {
      let blogCategories = []

      data[x].categories.forEach(category => {

        if (category === categoryConstants.uncategorized) {  blogCategories.push("uncategorized")};

        if (category === categoryConstants.yoga) { blogCategories.push("yoga") };

        if (category === categoryConstants.lifestyle) { blogCategories.push("lifestyle") }

      });
          data[x].blogHasCategory = blogCategories
    }
  }