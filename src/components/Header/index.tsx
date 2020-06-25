import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import hover from '../../assets/hover.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { url } = useRouteMatch();

  return (
    <Container url={url} size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <div>
            <Link id="list" to="/">
              <p>Listagem</p>
              {url === '/' && <img src={hover} alt="" />}
            </Link>

            <Link id="import" to="/import">
              <p>Importar</p>
              {url === '/import' && <img src={hover} alt="" />}
            </Link>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
