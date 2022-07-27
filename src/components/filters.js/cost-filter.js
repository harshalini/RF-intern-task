import { useFilteredData } from "../../context/filter-context"

export const CostFilter = () => {
    const { state: { itemCost }, filterDispatch } = useFilteredData();

    const clickFilter = (e, filterContent) => {
        e.target.checked ? filterDispatch({ type: `FILTER_${filterContent}`, payload: e.target.value }) : filterDispatch({
            type: `REMOVE_${filterContent}`
        })
    }
    return (
        <div className="cost-filter">
            <span className="filter-heading">Cost</span> <br />
            <div className="filter-div">
                <label htmlFor="ost-input">
                    <input className="cost-input" id="ost-input"type="checkbox" value={4000}
                        onChange={(e) =>
                            clickFilter(e, "COST")
                        }

                      

                    />
                    Rs. 1500 to 4000
                </label>
                <label htmlFor="c-input">
                    <input className="cost-input" id="c-input" type="checkbox" value={7000}
                        onChange={(e) =>
                           clickFilter(e, "COST")

                        }
                       
                    />
                    Rs. 4001 to 7000
                </label>
                <label htmlFor="cos-input">
                    <input className="cost-input" id="cos-input"type="checkbox" value={8000}
                        onChange={(e) =>
                            clickFilter(e, "COST")
                        }
                        
                        
                    />
                    Rs. 7001+
                </label>
            </div>
        </div>
    )
}