import React from 'react'

const Gallery = ({data}) => {
    return (
        <div className="row">
        {data.map((image) =><div key={image.id}>
        <div className="column">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="250" width="500px"  alt={image.title}/>
        </div>
        </div>)}
        </div>
    )
}

export default Gallery