import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchStyle = styled.div`
    margin: 24px 31px;
    height: 367px;
`

const SearchBarStyle = styled.div`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    gap: 20px;
    width: 100%;
    height: 30px;

    border: 0.5px solid #000000;
    border-radius: 4px;
`

const SearchInputStyle = styled.input`
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.29px;

    color: #000000;
    flex: none;
    order: 2;
    flex-grow: 1;
    border: none;
    gap: 10%;
    background: transparent;

    &::placeholder {
        color: #000000;
        opacity: 1;
    }

    &::placeholder:focus {
        opacity: 0.2;
    }

    &:focus {
        outline: none;
    }
`

const SearchInputOptionsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 15px 16px 62px;
    gap: 10px;

    width: 315px;
    height: 130px;
    left: 31px;
    top: 477px;
`

const SearchInputOptionsTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.29px;

    color: #000000;

    flex: none;
    flex-grow: 0;
`

const SearchInputOptionsValueStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    letter-spacing: 1.29px;

    color: #000000;
    flex: none;
    flex-grow: 0;
`

export const SearchResultsContainerStyle = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 9px;
    padding: 16px 15px 16px 55px;
    gap: 10px;
    background: #FFFFFF;
    z-index: 2;
    max-height: 270px;
    overflow-y: auto;
`

export const SearchResultSectionContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const SearchResultTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 1.29px;
`

export const SearchResultListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const SearchResultStyle = styled(Link)`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 1.29px;
    color: black;
    width: fit-content;
    text-decoration: none;
`

export const SearchResultsCloseStyle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`

export { SearchStyle, SearchBarStyle, SearchInputStyle, SearchInputOptionsStyle, SearchInputOptionsTitleStyle, SearchInputOptionsValueStyle };