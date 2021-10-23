import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

const menu = [
  { title: 'Home', path: '/' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Projetos', path: '/projetos' },
  { title: 'Blog', path: '/blog' },
]

const Navbar = () => {
  const router = useRouter();

  return (
    <S.Navbar>
      <S.Logo src="img/logo.png" />
      <S.Menu>
        {menu.map((item, index) => (
          <S.MenuItem key={index}>
            <Link href={item.path} passHref>
              <a className={`${router.pathname === item.path ? 'active' : ''}`}>{item.title}</a>
            </Link>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Navbar>
  )
}

export default Navbar