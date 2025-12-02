import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    return <div>
        {/*acordion header*/}
        <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
         <div className = "flex justify-between"> <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span><span>⬇️</span></div>

        {/*acordion body with items*/}
        <ItemList items={data.itemCards}/>
        </div> 
    </div>;

};
export default RestaurantCategory;