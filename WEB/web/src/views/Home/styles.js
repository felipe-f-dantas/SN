import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background:none;
        border:none;
    }
    `
    export const Content = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        margin-bottom: 70px;

        a{
            text-decoration: none;
            
        }
    `
    export const Title = styled.div`
        width: 100%;
        border-bottom: 1px solid #250C77;
        display: flex;
        justify-content:center;        
        h3{
            color: #250C77;
            position: relative;
            top:30px;
            background:#fff;
            padding: 0 10px;
        }

    `
