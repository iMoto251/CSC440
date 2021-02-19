import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 275px 1fr 350px;
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
    height: 100vh;
`;

export const Div1 = styled.div`
    background-color: gray;
    padding: 15px;

    a {
        background-color: rgb(197,179,88);
        padding: 5px;
        color: black;
        padding: 10px;
        text-decoration: none;
        border-radius: 10px;
        width: 100%;
        display: grid;
        margin-bottom: 10px;
        &:hover { background-color: rgb(170, 160, 50);}
    }

`;

export const Div2 = styled.div`
    background-color: #f2f2f2;
    padding: 25px;
`;

export const Div3 = styled.div`
    background-color: light gray;
    padding: 25px;

    a {
        background-color: rgb(60, 60, 245);
        padding: 5px;
        color: white;
        padding: 10px;
        text-decoration: none;
        border-radius: 10px;
        width: 100%;
        display: grid;
        margin-bottom: 10px;
        &:hover { background-color: rgb(60, 60, 200);}
    }

`;

export const H1 = styled.h1`
    font-size: 1.5em;
`;

export const H2 = styled.h2`
    font-size: 1.2em;
`;