import { useFilteredData } from "../context/filter-context";

export const GetColor = (filteredProducts) => {
  const { state: { itemColor } } = useFilteredData();
  if (itemColor.length !== 0)
    filteredProducts = filteredProducts.filter((item) => itemColor.includes(item.productColor))
  return filteredProducts
}

export const GetCost = (filteredProducts) => {
  const { state: { itemCost } } = useFilteredData();
  if (itemCost !== 0) {
    filteredProducts.map((item) => 
      item.cost >= 1500 ?
        filteredProducts = filteredProducts.filter((item) => itemCost >= item.cost && item.cost >= 1500) : filteredProducts

    )
    filteredProducts.map((item) =>
      item.cost >= 4001 ?
        filteredProducts = filteredProducts.filter((item) => itemCost >= item.cost && item.cost >= 4001) : filteredProducts

    )
    filteredProducts.map((item) => 
      item.cost >= 7001 ?
        filteredProducts = filteredProducts.filter((item) => itemCost >= item.cost && item.cost >= 7001) :
        filteredProducts
    )

  }
  return filteredProducts
}

export const GetType = (filteredProducts) => {
  const { state: { itemType } } = useFilteredData();
  if (itemType.length !== 0)
    filteredProducts = filteredProducts.filter((item) => itemType.includes(item.type))
  return filteredProducts
}