import { AboutUsContainerStyle, AboutUsLogoStyle, AboutUsButtonsContainerStyle, AboutUsButtonStyle, AboutUsDescriptionStyle, AboutUsDescriptionTitleStyle, AboutUsDescriptionBodyStyle } from './Style'
import { PlaystoreButton, AppstoreButton, EpicureLogo } from '../../../assets/AllLogo'

const AboutUs = () => {
    return (
        <>
            <AboutUsContainerStyle>
                <AboutUsLogoStyle src={EpicureLogo} />
                <AboutUsButtonsContainerStyle>
                    <AboutUsButtonStyle src={PlaystoreButton} />
                    <AboutUsButtonStyle src={AppstoreButton} />
                </AboutUsButtonsContainerStyle>
                <AboutUsDescriptionStyle>
                    <AboutUsDescriptionTitleStyle>about us:</AboutUsDescriptionTitleStyle>
                    <AboutUsDescriptionBodyStyle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.</AboutUsDescriptionBodyStyle>
                </AboutUsDescriptionStyle>
            </AboutUsContainerStyle>
        </>
    )
}

export default AboutUs;