import React, { useEffect } from 'react';
import styled from 'styled-components';
import logoBlue from 'assets/img/logo-blue.png';
import buildingGray from 'assets/img/building-gray.png';
import { ClickAway } from 'hooks/useClickAway';

type Sidebar = Pick<ClickAway, 'clickRef' | 'isOpened'>;

function Sidebar({ clickRef, isOpened }: Sidebar) {
  useEffect(() => {
    if (clickRef.current) {
      clickRef.current.style.transform = isOpened
        ? 'translateX(0)'
        : 'translateX(-100%)';
    }
  }, [isOpened]);

  return (
    <>
      <Wrapper ref={clickRef}>
        <Header>
          <LogoImg src={logoBlue} alt="블루로고" />
        </Header>
        <Container>
          <ul>
            <Menu>
              <MenuImg src={buildingGray} alt="회색빌딩" />
              <Text>파트너정밀가공</Text>
            </Menu>
          </ul>
          <Logout>로그아웃</Logout>
        </Container>
      </Wrapper>
      {isOpened && <Background />}
    </>
  );
}

const Background = styled.div.attrs({
  className: 'background',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 50%;
  z-index: 2;
`;

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.defaultWhite};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transform: translateX(-100%);
  transition: all 0.2s ease-in;
  z-index: 3;
`;

const Header = styled.header`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.backgroundGray};
`;

const LogoImg = styled.img`
  width: 91.52px;
  height: 12px;
`;

const Container = styled.div`
  padding: 30px 0 0 30px;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
`;

const MenuImg = styled.img`
  width: 15px;
  height: 15px;
`;

const Text = styled.p`
  padding-left: 8px;
  height: 20px;
  font-size: ${({ theme }) => theme.fontSize.middle};
  line-height: calc(${({ theme }) => theme.fontSize.middle} * 2);
`;

const Logout = styled.button`
  margin-top: 15px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: ${({ theme }) => theme.fontWeight.large};
  line-height: calc(${({ theme }) => theme.fontSize.middle} * 2);
`;

export default Sidebar;
