import React, {useState, useEffect} from 'react'

function Galery(){

    const [myPhotos, setMyPhotos] = useState([])
    const [error, setError]  = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/potos')
        .then(response => {
            if(response.ok){
                response.json()
                .then(response  => setMyPhotos(response))
            }
            else{
                setError(response.status)
            }
        })
        .catch(err => setError(err))
    }, [])


    console.log("ph:: ", myPhotos)
    console.log("errorrr ", error)
    const less = myPhotos.slice(5, 10)

    return(
        <div className="container">
            <div className="row">
                {less.map(item => {
                    return(
                        <>
                             <img className="img" src={item.url}/>
                            <span className="subtitle">{item.title}</span>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Galery