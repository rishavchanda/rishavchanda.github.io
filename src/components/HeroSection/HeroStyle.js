import styled from 'styled-components';
import _default from '../../themes/default';

export const HeroContainer = styled.div`
    background: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640) {
        padding: 32px 16px;
    }
    z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%,70% 95%, 0 100%);
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
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    
    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

export const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`
export const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }
    
    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`

export const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.primary};

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }
    
    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    } 

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    } 
`;

export const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }

    `;

export const Span = styled.span`
    color: ${({theme}) => theme.primary};
    cursor: pointer;
`;

export const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({theme}) => theme.text_primary+95};
    
    @media (max-width: 960px) {
        text-align: center;
    }

    
    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    } 
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({theme}) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(145deg, #854CE6, #B67AFF);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
  filter: brightness(1.3);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;


