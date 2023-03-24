import styled  from "styled-components";

export const Container = styled.div`
width:250px;
height:200px;
box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
margin: 15px;

border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
cursor:pointer;

&:hover {
    opacity:0.5;
}
`

export const TopCard = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
img{
    width:80px;
    height:80px;
}

`

export const BottomCard = styled.div`
width:100%;
display:flex;
justify-content:space-around;

strong{
    color:#EB6800;
    font-weight:bold;

}
span{
    color:#250C77;
}
`

