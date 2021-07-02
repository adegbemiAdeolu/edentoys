import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 10px 0 10px 0;
    background: #007F2E;
    white-space: nowrap;
    padding: 0.875rem 3rem;
    color: #FFFFFF;
    font-size: 1.1rem;
    font-family: 'Poppins';
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01BF71;
        color: #000000;
    }
`