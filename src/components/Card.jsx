export default function Card({data}){
  return(
    <div className="card-container">
      <div className="img-container">
        <img src={data.img.src} alt={data.img.alt}/>
      </div>
      <div className="card-body">
        <div>
          <p>{data.country}</p>
          <a href={data.googleMapsLink}>View More</a>
        </div>
        <h1 className="card-title">{data.title}</h1>
        <p className="card-date">{data.dates}</p>
        <p className="card-text">{data.text}</p>
      </div>
    </div>
  )
}