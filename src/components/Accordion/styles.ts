import styled from "styled-components";

export const Container = styled.section`

    margin: 0;

    background: white;
`  

interface TitleProps {
    color?: string
    background?: string;
}

export const Title = styled.h3<TitleProps>`
    background: ${({ background }) => background ? background : 'purple'};
    color: ${({ color }) => color ? color : 'white'};
    
    z-index: 50;

    margin: 0;
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 600;

    cursor: pointer;
    user-select: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Status = styled.div`
    display: flex;
    align-items: center;

    height: auto;    
    margin: 0;
    font-size: 1.5rem;    
`;

export const Content = styled.div`
    padding: .3rem 1rem;
    z-index: 10;
`;