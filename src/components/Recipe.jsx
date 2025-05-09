import {useState} from "react"
import IngredientList from "./IngredientList"
import RecipeData from "./RecipeData"
import getData from "./Ai"

export default function Recipe(){
  const [recipeList, setRecipeList] = useState([])
  const [recipeData, setRecipeData] = useState("");

  function formHandler(formData){
    const ingredients = formData.get("ingredients")
    setRecipeList([...recipeList,ingredients])
  }
  async function getRecipe(){
      setRecipeData(await getData(recipeList))
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

      {/* Ingredient list */}
      {recipeList.length > 0 && <IngredientList recipeList={recipeList} getRecipe={getRecipe}/>}
      
      {/* Recipe Data */}
      {showRecipe && <RecipeData recipeData={recipeData}/>}
    </main>
  )
}