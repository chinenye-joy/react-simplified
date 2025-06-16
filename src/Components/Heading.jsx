import React from 'react'

const user =  {
    name: 'John Doe',
    age: 30,
}

const Heading = () => {
  return (
    <div>
        {user.name}
    </div>
  )
}

export default Heading