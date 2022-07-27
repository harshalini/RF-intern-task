import { useFilteredData } from "../../context/filter-context";
export const ColorFilter = () => {
    const { state: { itemColor }, filterDispatch } = useFilteredData();
    const colors = [
        {
            colorImg: "../../assets/black-img.jpg",
            colorName: "black"
        },
        {
            colorImg: "../../assets/blue-img.jpg",
            colorName: "blue"
        },
        {
            colorImg: "../../assets/white-img.jpg",
            colorName: "white"
        },
        {
            colorImg: "../../assets/brown-img.jpg",
            colorName: "brown"
        },
        {
            colorImg: "../../assets/gray-img.jpg",
            colorName: "gray"
        }
    ]

    const clickFilter = (e, filterContent) => {
        e.target.checked ? filterDispatch({ type: `FILTER_${filterContent}`, payload: e.target.value }) : filterDispatch({
            type: `REMOVE_${filterContent}`, payload: e.target.value
        })
    }
    return (
        <div className="cost-filter">
            <span className="filter-heading">Colour</span> <br />
            <div class="container color-container">
                {colors.map((color) => (
                    <label class="option_item" htmlFor={color.colorName}>
                        <input type="checkbox" class="checkbox" id={color.colorName} value={color.colorName}
                            onChange={(e) =>
                                clickFilter(e, "COLOR")
                            }
                            checked={itemColor.includes(color.colorName)}
                        />
                        <div class="option_inner">
                            <div class="tickmark"></div>
                            <img src={color.colorImg} className="product-img small-img" alt="image" />
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}