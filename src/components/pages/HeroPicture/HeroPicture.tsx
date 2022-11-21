import SearchInput from '../Search/SearchInput';
import { HeroContainerStyle, HeroInnerContainerStyle, HeroTitleStyle, SearchInputContainerStyle } from './Style'

const HeroPicture = () => {
    return (
        <>
            <HeroContainerStyle>
                <HeroInnerContainerStyle>
                    <HeroTitleStyle>Epicure works with the top chef restaurants in Tel Aviv</HeroTitleStyle>
                    <SearchInputContainerStyle>
                        <SearchInput />
                    </SearchInputContainerStyle>
                </HeroInnerContainerStyle>
            </HeroContainerStyle>
        </>
    );
}

export default HeroPicture;