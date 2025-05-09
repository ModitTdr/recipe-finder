import ReactMarkdown from 'react-markdown'

export default function RecipeData(props){
    return(
        <section className="my-8 space-y-4">
            <ReactMarkdown>{props.recipeData}</ReactMarkdown>
        </section>
    )
}