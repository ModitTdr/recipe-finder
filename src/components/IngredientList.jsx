export default function IngredientList(props){ 
    const recipeData = props.recipeList.map(item=>{
        return(<li key={item} className="text-neutral-700">{item}</li>)
    })
    
    return(
        <section className="my-8 space-y-4">
            <h2 className="text-2xl font-semibold">My Ingredients:</h2>
                <ul className="list-disc list-inside space-y-2">
                    {recipeData}
                </ul>
            {
                props.recipeList.length > 3 &&
                <div className="flex justify-between items-center p-8 bg-neutral-200 rounded my-8">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-xl">Get Recipe</h3>
                        <p className="text-sm text-neutral-500">Are you excited to find new recipes?</p>
                    </div>
                    <button 
                        className="bg-orange-700/60 text-neutral-50 px-7 py-1 rounded h-fit cursor-pointer"
                        onClick={props.toggleSearch}>
                        Search
                    </button>
                </div>
            }
        </section>
    )
}