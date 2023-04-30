import Card from "./Card"
export default function Results({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-4">
      {results.map(result => {
        return(
      
  <Card key={result.id} result={result}/>
          
            // <div key={result.id}>
            //    {result.original_title}
            // </div>
        )
      })}
    </div>
  )
}
