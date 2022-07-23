import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    h1 {
        font-size: 1.6em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.1em;
        font-weight: bold;
    }

    h4 {
        font-size: 1em;
        font-weight: bold;
    }
    
`;


export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin-right: 10px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    }

    a{
        color: blue;
        font-weight: bold;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;