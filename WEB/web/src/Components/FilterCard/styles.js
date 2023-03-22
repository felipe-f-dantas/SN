import styled  from "styled-components";

export const Container = styled.div`
width:190px;
height:50px;
background:${props => props.actived ? '#EB6800':'#250C77'};
border-radius:5px;
padding:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
cursor:pointer;

img{
    width:25px;
    height:25px;   
}

span{
    color:#fff;
    font-weight:bold;
    align-self:flex-end;
}
&:hover{
    background:#EB6800
}
` 
