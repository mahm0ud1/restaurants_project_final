import { useRef, useState } from 'react';
import { searchAPI } from '../../../api/EpicureAPI';
import searchLogo from '../../../assets/search_logo.svg';
import SearchResultsInterface from '../../../interfaces/SearchResultsInterface';

import { SearchBarStyle, SearchInputStyle, SearchResultsContainerStyle, SearchResultSectionContainerStyle, SearchResultTitleStyle, SearchResultListStyle, SearchResultStyle, SearchResultsCloseStyle } from './Style'

const SearchInput = () => {
    const searchValue = useRef("");
    const [searching, setSearching] = useState("");

    const search = () => {
        if(searching!==searchValue.current)
        {
            setSearchValue(searching);
        }
        if (searching !== "") {
            const results: SearchResultsInterface = searchAPI(searching);
            const searchSectionWithResults = results.searchResultsSections.filter(searchResultsSection => {
                return searchResultsSection.sectionResults.length !== 0
            })
            if(searchSectionWithResults.length > 0)
            {
                return searchSectionWithResults.map(searchResultsSection => {
                    return (
                        <SearchResultSectionContainerStyle>
                            <SearchResultTitleStyle>{searchResultsSection.sectionTitle}:</SearchResultTitleStyle>
                            <SearchResultListStyle>
                                {searchResultsSection.sectionResults.map(result =>
                                    <SearchResultStyle>{result}</SearchResultStyle>
                                )}
                            </SearchResultListStyle>
                        </SearchResultSectionContainerStyle>
                    )
                });
            }
            else
            {
                return (
                    <SearchResultSectionContainerStyle>
                        <SearchResultTitleStyle>No Results Found.</SearchResultTitleStyle>
                    </SearchResultSectionContainerStyle>
                )
            }
        }
    }

    const setSearchValue = (value:string) => {
        searchValue.current = value;
        setSearching(value)
    }

    const isSearching = ():boolean => {
        return searching !== "";
    }

    return (
        <>
            <SearchBarStyle>
                <img src={searchLogo} alt="restaurant_logo" />
                <SearchInputStyle
                    type="text"
                    onClick={() => setSearchValue(searchValue.current)}
                    onBlur={() => setSearching("")}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='Search for restaurant cuisine, chef' />
            </SearchBarStyle>
            {isSearching() && (
                <>
                    <SearchResultsContainerStyle>
                        {search()}
                    </SearchResultsContainerStyle>
                    <SearchResultsCloseStyle onClick={() => setSearching("")}/>
                </>
            )}
        </>
    );
}

export default SearchInput;