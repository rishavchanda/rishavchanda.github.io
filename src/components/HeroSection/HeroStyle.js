import styled from 'styled-components';
import _default from '../../themes/default';

export const HeroContainer = styled.div`
    background: ${_default.colors.background1};
    display: flex;
    justify-content: center;
    height: 600px;
    position: relative;
    z-index: 1;
    padding: 0 30px;
`;

export const HeroBg = styled.div` 
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1250px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
`;

export const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
`
export const HeroLeftContainer = styled.div`
    width: 100%;
    position: relative;
`

export const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    position: relative;
`

export const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 4px solid ${_default.colors.primary1};
`;

export const Title = styled.div`
    font-weight: 800;
    font-size: 48px;
    color: ${_default.colors.text};
    line-height: 68px;
    margin-bottom: 32px;
`;

export const SubTitle= styled.div`
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 42px;
    color: rgba(255, 255, 255, 0.5);
`;

export const ResumeButton= styled.div`
    width: 50%;
    text-align: center;
    padding: 16px 0;
    color: ${_default.colors.text1};
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.6s ease-in-out;
    background: linear-gradient(145deg, #854CE6, #B67AFF);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
    font-size: 22px;
    width: 55%;
    padding: 18px 0;
    }        
`;