import { AboutUsContainerStyle, AboutUsLogoStyle, AboutUsButtonsContainerStyle, AboutUsButtonStyle, AboutUsDescreptionStyle } from './Style'

const AboutUs = () => {
    return (
        <>
            <AboutUsContainerStyle>
                <AboutUsLogoStyle src='test' />
                <AboutUsButtonsContainerStyle>
                    <AboutUsButtonStyle src='test' />
                    <AboutUsButtonStyle src='test' />
                </AboutUsButtonsContainerStyle>
                <AboutUsDescreptionStyle>
                    Test
                </AboutUsDescreptionStyle>
            </AboutUsContainerStyle>
        </>
    )
}

export default AboutUs;