import SearchInput from '../../menuButtons/Search/SearchInput';
import { HeroContainerStyle, HeroInnerContainerStyle, HeroTitleStyle, SearchInputContainerStyle } from './Style'

const HeroPicture = () => {
    const closeHandler = () => {

    }
    return (
        <>
            <HeroContainerStyle>
                <HeroInnerContainerStyle>
                    <HeroTitleStyle>Epicure works with the top chef restaurants in Tel Aviv</HeroTitleStyle>
                    <SearchInputContainerStyle>
                        <SearchInput closeFunction={closeHandler} />
                    </SearchInputContainerStyle>
                </HeroInnerContainerStyle>
            </HeroContainerStyle>
        </>
    );
}

export default HeroPicture;