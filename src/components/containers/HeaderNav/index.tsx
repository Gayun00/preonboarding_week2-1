import React from 'react';
import styled from 'styled-components';
import MenuToggle from 'components/atoms/MenuToggle';
import useClickAway from 'hooks/useClickAway';
import logo from '../../../assets/img/logo.png';
import building from '../../../assets/img/building.png';
import Sidebar from '../Sidebar';

function HeaderNav() {
  const { clickRef, isOpened, onToggle } = useClickAway();

  return (
    <HeaderContainer>
      <MenuToggle onToggle={onToggle} />
      <Sidebar isOpened={isOpened} clickRef={clickRef} />
      <div>
        <LogoImg src={logo} alt="logo" />
      </div>
      <NavContainer>
        <NavImgBox>
          <NavImg src={building} alt="buliding" />
        </NavImgBox>
        <NavCompanyBox>
          <NavText>A 가공업체</NavText>
        </NavCompanyBox>
        <NavBarBox />
        <NavBox>
          <NavText>로그아웃</NavText>
        </NavBox>
      </NavContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  display: flex;
  justify-content: space-between;
  padding: 25px 40px 25px 40px;

  @media only screen and (max-width: 360px) {
    justify-content: flex-start;
    align-items: center;
    padding: 25px 23px;
  }
`;

const LogoImg = styled.img`
  width: 153px;
  height: 20px;
  margin-right: 10px;
`;

const NavContainer = styled.div`
  height: 50px;
  display: flex;

  @media only screen and (max-width: 360px) {
    display: none;
  }
`;

const NavBox = styled.div`
  margin-left: 32px;
  margin-top: 3px;
`;

const NavBarBox = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.defaultWhite};
  margin-left: 32px;
  margin-top: 2px;
`;

const NavImgBox = styled.div`
  margin-top: 2px;
`;

const NavCompanyBox = styled.div`
  margin-left: 8px;
  margin-top: 2px;
`;

const NavImg = styled.img`
  width: 16.67px;
  height: 15px;
`;

const NavText = styled.span`
  color: ${({ theme }) => theme.color.defaultWhite};
  font-size: ${({ theme }) => theme.fontSize.middle};
`;

export default HeaderNav;
