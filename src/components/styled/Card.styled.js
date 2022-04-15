import styled from "styled-components";

export const Cardd=styled.div`

width: 1000PX;
display: flex;
margin-top: 50PX;
padding: 50px;
box-shadow: 1px 2px 7px gray;
border-radius: 10px;
transition: 1s;
&:hover{
    transform: scale(1.1,1.1);
    cursor: pointer;
}
`

export const Heading=styled.h2`
font-family: serif;


`
export const Pr=styled.p`
line-height: 1.8;
`