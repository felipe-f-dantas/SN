import styled  from "styled-components";

export const Container = styled.div`
width:100%;
height:70px;
background:#250C77;
border-bottom:5px solid #EB6800;
align-items:center;
padding:10px;
display:flex;
`
export const Leftside = styled.div`
width:50%;
height:70px;
img{
    width:130px;
    height:50px;
    padding:10px;

}
`
export const Rightside = styled.div`
width:50%;
height:70px;
display:flex;
align-items:center;
justify-content:flex-end;

button{
    background:none;
    border:none;  
    cursor:pointer;
    font-size:16px;  
}

a,button{
    color:#fff;
    font-weight:bold;
    text-decoration:none;
    margin: 0 10px;
    &:hover{
        color:#EB6800
    }
}

#notification{
    img{
        width:30px;
        height:30px;
    }
    span{
        background-color:#fff;
        color:#EB6800;
        padding:3px 7px;
        border-radius:50%;
        position:relative;
        top: -20px;
        right: 10px;

        &:hover{
        opacity:0.5;
    }

    }

  
}
`