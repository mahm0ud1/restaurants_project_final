import { useRef, useState } from 'react';
import searchLogo from '../../../assets/search_logo.svg';
import HandleCloseInterface from '../../../interfaces/HandleCloseInterface';
import SearchResultsInterface from '../../../interfaces/SearchResultsInterface';
import { searchValue } from '../../../api/middleware';

import { SearchBarStyle, SearchInputStyle, SearchResultsContainerStyle, SearchResultSectionContainerStyle, SearchResultTitleStyle, SearchResultListStyle, SearchResultStyle, SearchResultsCloseStyle } from './Style'

const SearchInput = ({ closeFunction }: HandleCloseInterface) => {
    const searchedValue = useRef<String>("");
    const [searchingResults, setSearchinResults] = useState<SearchResultsInterface>();
    // ToDo - Fix function
    // const scrollToSearch = () => {
    //     const element = document.getElementById('search-bar');
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' });
    //         }
    // }

    const getSearchingResults = () => {
        if (searchingResults === undefined)
            return <></>;
            
        const searchSectionWithResults = searchingResults.searchResultsSections.filter(searchResultsSection => {
            return searchResultsSection.sectionResults.length !== 0
        })
        if (searchSectionWithResults.length > 0) {
            return searchSectionWithResults.map(searchingResults => {
                return (
                    <SearchResultSectionContainerStyle>
                        <SearchResultTitleStyle>{searchingResults.sectionTitle}:</SearchResultTitleStyle>
                        <SearchResultListStyle>
                            {searchingResults.sectionResults.map(result =>
                                <SearchResultStyle onClick={closeFunction} to={result.url}>{result.value}</SearchResultStyle>
                            )}
                        </SearchResultListStyle>
                    </SearchResultSectionContainerStyle>
                )
            });
        }
        else {
            return (
                <SearchResultSectionContainerStyle>
                    <SearchResultTitleStyle>No Results Found.</SearchResultTitleStyle>
                </SearchResultSectionContainerStyle>
            )
        }
    }

    const searching = (value: String) => {
        // ToDo - use after Fix
        // scrollToSearch();
        searchedValue.current = value;
        fetch(value);
    }

    const stopSearching = () => {
        setSearchinResults(undefined);
    }

    const fetch = async (value: String) => {
        if (value !== "") {
            const data = await searchValue(value);
            setSearchinResults(data);
        }
        else
            setSearchinResults(undefined);

    }

    const isSearching = () => {
        return searchingResults !== undefined;
    }

    return (
        <>
            <SearchBarStyle id="search-bar">
                <img src={searchLogo} alt="restaurant_logo" />
                <SearchInputStyle
                    type="text"
                    onClick={() => searching(searchedValue.current)}
                    onChange={(e) => searching(e.target.value)}
                    placeholder='Search for restaurant cuisine, chef' />
            </SearchBarStyle>
            {isSearching() && (
                <>
                    <SearchResultsContainerStyle>
                        {getSearchingResults()}
                    </SearchResultsContainerStyle>
                    <SearchResultsCloseStyle onClick={() => stopSearching()} />
                </>
            )}
        </>
    );
}

export default SearchInput;