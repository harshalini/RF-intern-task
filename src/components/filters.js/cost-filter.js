export const CostFilter = () => {
    return (
        <div className="cost-filter">
            <span className="filter-heading">Cost</span> <br />
            <div className="filter-div">
                <label htmlFor="cost-input">
                    <input className="cost-input" type="checkbox" name="filter"/>
                    Rs. 1500 to 4000
                </label>
                <label htmlFor="cost-input">
                    <input className="cost-input" type="checkbox" name="filter"/>
                    Rs. 4001 to 7000
                </label>
                <label htmlFor="cost-input">
                    <input className="cost-input" type="checkbox" name="filter"/>
                    Rs. 7001+
                </label>
            </div>
        </div>
    )
}