// remember to update utilities > setCategoryName if any category
// is removed or added

// used in "setCategoryName" in  utilities > setCategoryName
// setCategoryName adds a new blogHasCategory object to api response
export const categoryConstants =
    {
        "uncategorized": 1,

        "yoga": 19,

        "lifestyle": 20
    }

// used to display categories in the dropdown button in components > blog > CategoryFilter component
// mirrors "categoryConstants"
export const categoryNames = ["all blogposts", "uncategorized", "yoga", "lifestyle"];


