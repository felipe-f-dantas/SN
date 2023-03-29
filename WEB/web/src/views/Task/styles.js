import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`
export const TypeIcons = styled.div`
    width:100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity:0.5;
    }

    button{
        background: none;
        border: none;
    }
    img{
        width:50px;
        height:50px;
        margin:10px;
        cursor: pointer;

        &:hover{
            opacity:0.5
        }
    }

`
export const Input = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;

    span{
        color:#707070;
        margin-bottom:10px;
    }

    input{
        font-size:16px;
        padding:10px;
        border:none;
        border-bottom:1px solid #EB6800;
    }
    textarea{
        font-size:16px;
        padding:10px;
        border-radius:10px;
        border-color:#EB6800
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        font-weight:bold;
        color:#250C77;
        border:none;
        background:none;
        font-size:18px;
        cursor: pointer;
        &:hover{
            opacity:0.5
        }
    } 

    div,input,span{
        display: flex;
        align-items: center;
        color: #EB6800;
        font-weight:bold;
        font-size:18px;

    }
`
export const Save = styled.div`
    width:100%;
    margin-top:20px;
    
    button{
        width:100%;
        background:#EB6800;
        border:none;
        font-size:20px;
        color:#fff;
        font-weight:bold;
        padding:20px;
        border-radius:30px;
        cursor: pointer;
        &:hover{
            opacity:0.7
        }
    }

`
