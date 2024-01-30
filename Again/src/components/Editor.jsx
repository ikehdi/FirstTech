
import { File } from '../File'

const Editor = () => {
  return (
    <div className=' editorMain '>
      <div className=' editorHeader'>
<h1>Editors Picks</h1>
      </div>
  <div className=' editorSec'>
    {
        File.map(file => {
            return (
                <div key={file.id}>
                    <div className="imgCont">
      <div className="text">
        <h1>{file.num}</h1>
      </div>
      <div className="img2">
         <img src={file.img} alt="" />
      </div>
                    </div>
                    <div className="fileCont">
                        <h2>{file.title}</h2>

                        <h1>{file.name}</h1>
                        <p>{file.PreName}</p>
                        <span>{file.date}</span>
                    </div>
                     </div>
            )
        })
    }
  </div>
    </div>
  )
}

export default Editor
