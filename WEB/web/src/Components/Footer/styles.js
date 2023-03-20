import styled  from "styled-components";

export const Container = styled.div`
width:100%;
height:50px;
background:#250C77;
border-top:5px solid #EB6800;
position:fixed;
bottom:0;
align-items:center;
justify-content:center;

display:flex;
a,p,h2{
    color:#fff;
    font-weight:bold;
    text-decoration:none;
    margin: 0 10px;
    &:hover{
        color:#EB6800
    }
}

`

