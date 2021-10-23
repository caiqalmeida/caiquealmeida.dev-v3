import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
`

export const Logo = styled.img`
  width: 64px;
  margin-right: 125px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const MenuItem = styled.li`
  margin-right: 72px; 

  & a {
    position: relative;
    color: ${(props) => props.theme.colors.white_700};

    &.active, &:hover {
      color: ${(props) => props.theme.colors.white};
    }

    transition: color .3s ease-in-out;
  }

  & a.active::after {
    position: absolute;
    content: '';
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradient};
  }
`;