import SearchInput from '../Search/SearchInput';
import './HeroPicture.css';

const HeroPicture = () => {
    return (
        <>
            <div className="hero_container">
                <div className='hero_inner_container'>
                    <div className='hero_title'>Epicure works with the top chef restaurants in Tel Aviv</div>
                    <div className='search_input_container'><SearchInput /></div>
                </div>
            </div>
        </>
    );
}

export default HeroPicture;