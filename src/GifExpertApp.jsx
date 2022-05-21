import React, { useState } from 'react'

const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    //setCategories([...categories, 'Hunter X Hunter']);
    setCategories(cats => [...cats, 'Hunter X Hunter']);
  }

  return (
    <>
        <h2>GifExpertApp</h2>
        <hr />
        <ol>
          {
            categories.map(category => {
              return <li key={ category }>{ category }</li>;
            })
          }
        </ol>
        <button onClick={handleAdd}>Agregar</button>
    </>
  )
}

export default GifExpertApp