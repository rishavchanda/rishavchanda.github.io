import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, Title, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/hero3.jpg'
const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br /> Rishav Chanda</Title>
                        <SubTitle>I am a Full stack Android and Web Developer . I love coding and developing new things. Also I push myself by learning new things and taking up challenges.</SubTitle>
                        <ResumeButton>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <HeroBg>
                            <HeroBgAnimation />
                        </HeroBg>
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </>
    )
}

export default HeroSection