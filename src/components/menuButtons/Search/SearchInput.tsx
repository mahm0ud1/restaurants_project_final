import searchLogo from '../../../assets/search_logo.svg';

import  { SearchBarStyle, SearchInputStyle, SearchInputOptionsStyle, SearchInputOptionsTitleStyle, SearchInputOptionsValueStyle } from './Style'

const SearchInput = () => {
    return (
        <>
            <SearchBarStyle>
                <img src={searchLogo} alt="restaurant_logo" />
                <SearchInputStyle type="text" placeholder='Search for restaurant cuisine, chef' />
            </SearchBarStyle>
            {/* <div className='search_input_options'>
                <div className='search_input_options_title'>Restaurants:</div>
                <div className='search_input_options_value'>Tiger Lily</div>
                <div className='search_input_options_title'>Cusine:</div>
                <div className='search_input_options_value'>Thai</div>
                <div className='search_input_options_title'>Chef:</div>
                <div className='search_input_options_value'>Thai</div>
            </div> */}
        </>
    );
}

export default SearchInput;