import { Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import _default from '../../themes/default';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${_default.colors.background1};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled(LinkS)`
    color: ${_default.colors.text};
    font-weight: 500;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      font-size: 18px;
      color: ${_default.colors.primary1};
    }

    &.active {
      border-bottom: 2px solid ${_default.colors.primary1};
    }
`;


export const GitHubButton = styled.a`
  border: 1.8px solid ${_default.colors.primary1};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${_default.colors.primary1};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${_default.colors.primary1};
      color: ${_default.colors.text};      
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${_default.colors.text};
  }
`

