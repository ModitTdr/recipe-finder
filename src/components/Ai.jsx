import { HfInference } from "@huggingface/inference"

export default async function getData(ingredientsArr){
    const ingredients = ingredientsArr.join(", ");
    const hf = new HfInference(import.meta.env.VITE_HF_KEY)
    const recipeguru = await hf.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
            {
                role: "user",
                content: `Find recipes here are ingredients ${ingredients}`,
            },
        ],
    })
    return(recipeguru.choices[0].message.content);
    
}