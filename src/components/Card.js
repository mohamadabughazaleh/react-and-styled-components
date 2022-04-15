import React from 'react'
import { Cardd ,Heading ,Pr } from './styled/Card.styled'
export default function Card({item:{id ,title ,body ,image}}) {
  return (
    <Cardd>
    <div>
    <Heading>{title}</Heading>
    <Pr>{body}</Pr>
    </div>
    <div>
    <img src={`./images/${image}`} alt="" />
    </div>
    </Cardd>
  )
}
