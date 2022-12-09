import HandleCloseInterface from '../../../interfaces/HandleCloseInterface';
import SearchInput from './SearchInput';
import { SearchStyle } from './Style';

const Search = ({ closeFunction }:HandleCloseInterface) => {
    return (
        <>

            <SearchStyle>
                <SearchInput closeFunction={closeFunction} />
            </SearchStyle>
        </>
    );
}

export default Search;