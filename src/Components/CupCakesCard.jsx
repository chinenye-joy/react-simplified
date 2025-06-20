import React from 'react'

const CupCakesCard = ({  flavor, price}) => {
  return (
    <div>
      <p>{flavor} cupcakes</p>
      <p>{price}</p>
    </div>
  )
}

export default CupCakesCard

