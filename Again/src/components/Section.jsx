import { Data } from '../Data'

const Section = () => {
  return (
    <div>
          <>
      <div className="nav nav2">
           <h2>Business  Plans</h2>


      </div>
      <div className=' navProduct'>
{
  Data.map(data => {
    return (
      <div key={data.id} >
        <div>
          <div className="img">
            <img src={data.img} alt="" />
          </div>
          <div className="text">
            <h5>{data.title}</h5>
            <h2>{data.name}</h2>
            <p>{data.preName}</p>
            <span>{data.date}</span>
          </div>
        </div>
      </div>
    )
  } )
}
</div>
    </>
    </div>
  )
}

export default Section
