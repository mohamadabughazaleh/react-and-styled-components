import styled from "styled-components"
export const Footerr=styled.footer`
width: 100%;
margin-top: 50px;
background-color: ${({theme})=>theme.colors.footer};
padding: 20px;
color: white;
`

export const Flex=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;



`
export const Flextow=styled.div`
width: 350px;


`
export const Logg=styled.img`
    margin-bottom:40px;
    margin-left: 5%;

`
export const Containertow=styled.div`
margin-left: 50px;
margin-right: 50px;
`
export const Ul=styled.ul`
list-style: none;
font-family: inherit;
line-height: 40px;
max-width: 100%;
li:hover{
    transition: 1s;
    cursor: pointer;
    color: #ff0099;
}
`
export const Endfooter=styled.p`
text-align: center;

margin-top: 50px;

`
export const Flextoww=styled.div`
width: 300px;
margin-top: 4%;
`