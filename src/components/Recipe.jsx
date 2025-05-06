import {useState} from "react"
export default function Recipe(){
  const [recipeList, setRecipeList] = useState([])
  function formHandler(formData){
    const ingredients = formData.get("ingredients")
    setRecipeList([...recipeList,ingredients])
  }
  return(
    <main>
      <form className="flex gap-4 mx-auto justify-center flex-wrap overflow-hidden" action={formHandler}>
        <input 
          type="text" className="border border-neutral-300 rounded text-sm px-2 grow max-w-[400px] min-w-[130px] h-[38px]" 
          placeholder="e.g. salt"
          name="ingredients"
          />
        <button className="bg-neutral-950 text-neutral-300 rounded px-6 text-sm h-[38px]">+ Add Ingredients</button>
      </form>
    </main>
  )
}