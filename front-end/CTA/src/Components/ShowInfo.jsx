import React from 'react'

const ShowInfo = ({title, img_url, genre_name, commentCount}) => (
    <div>
        <h2>{title}</h2>
        <img src={img_url} alt={title} />
        <h4>{genre_name}</h4>
        <h4>{commentCount} Comments</h4>
    </div>
)

export default ShowInfo