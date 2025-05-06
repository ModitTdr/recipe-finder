import {useState} from "react"
export default function Recipe(){
  
  const [recipeList, setRecipeList] = useState([])
  function formHandler(formData){
    const ingredients = formData.get("ingredients")
    setRecipeList([...recipeList,ingredients])
  }

  return(
    <main className="p-4">
      {/* input */}
      <form className="flex gap-4 justify-center flex-wrap overflow-hidden" action={formHandler}>
        <input 
          type="text" className="border border-neutral-300 rounded text-sm px-2 grow max-w-[400px] min-w-[130px] h-[38px]" 
          placeholder="e.g. salt"
          name="ingredients"
          required
          />
        <button className="bg-neutral-950 text-neutral-300 rounded px-6 text-sm h-[38px]">+ Add Ingredients</button>
      </form>

      {/* displaying result */}
      <div className={recipeList.length == 0 ? "hidden" : "my-8 space-y-4 visible"}>
        <h2 className="text-2xl font-semibold">My Ingredients:</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipeList.map(item=>{
            return(<li key={item} className="text-neutral-700">{item}</li>)
          })}
        </ul>
      </div>
      
    </main>
  )
}