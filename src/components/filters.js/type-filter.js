export const TypeFilter = () => {
    return (
        <div className="cost-filter">
            <span className="filter-heading">Type</span> <br />
            <div className="filter-div">
                <label htmlFor="cost-input">
                    <input className="cost-input" type="checkbox" name="filter" />
                    Loafers
                </label>
                <label htmlFor="cost-input">
                    <input className="cost-input" type="checkbox" name="filter" />
                    Sneaker
                </label>

            </div>
        </div>
    )
}