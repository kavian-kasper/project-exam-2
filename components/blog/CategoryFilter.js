import { categoryNames } from "../../constants/categories"


const CategoryFilter = (props) => {
    const setCategory = props.setCategory

    return (
        <select className="category-btn" onChange={setCategory}
        >
            { categoryNames.map((option) => (
                <option value={option} key={option}>{option} </option>
           ))}
        </select>
    )
}
export default CategoryFilter
