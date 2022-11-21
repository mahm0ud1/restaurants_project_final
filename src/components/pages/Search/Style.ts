import styled from "styled-components";

const SearchPageStyle = styled.div`
    position: absolute;
    background: #FFFFFF;
    top: 0px;
    height: 413px;
    box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
    width: 100%;
`

const CloseButtonStyle = styled.div`
    position: fixed;
    left: 25px;
    align-items: center;
`

const SearchHeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`

const SearchBodyStyle = styled.div`
    flex-direction: column;
    align-items: flex-start;
    margin: 24px 31px;
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
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;

    /* identical to box height */
    letter-spacing: 1.29px;

    color: #000000;

    /* Inside auto layout */
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
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    letter-spacing: 1.29px;

    color: #000000;

    /* Inside auto layout */
    flex: none;
    flex-grow: 0;
`

const SearchInputOptionsValueStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;

    /* identical to box height */
    letter-spacing: 1.29px;

    color: #000000;


    /* Inside auto layout */
    flex: none;
    flex-grow: 0;
`

export { SearchPageStyle, CloseButtonStyle, SearchBodyStyle, SearchHeaderStyle };
export { SearchBarStyle, SearchInputStyle, SearchInputOptionsStyle, SearchInputOptionsTitleStyle, SearchInputOptionsValueStyle };