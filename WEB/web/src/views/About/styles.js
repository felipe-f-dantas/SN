import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
`

    export const Content = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 50px;
        justify-content:space-around;
     
      
    `
export const Leftside = styled.div`
width:30%;

`
export const Rightside = styled.div`
width:70%;
display: flex;
flex-direction: column;
align-items: center;
h1{
            font-weight: bold;
            color: #250C77;
            font-size: 90px;
}
img:hover{
    opacity: 0.5;
}
`
