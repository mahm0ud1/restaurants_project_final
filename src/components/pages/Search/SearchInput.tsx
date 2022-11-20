import searchLogo from '../../../assets/search_logo.svg';
import './SearchInput.css';

const SearchInput = () => {
    return (
        <>
            <div className='search_bar'>
                <img src={searchLogo} alt="restaurant_logo" />
                <input type="text" className='search_input' placeholder='Search for restaurant cuisine, chef' />
            </div>
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