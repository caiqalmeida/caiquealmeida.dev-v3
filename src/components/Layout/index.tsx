import Navbar from '../Navbar';

import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <Navbar />
      {children}
    </S.Layout>
  )
}

export default Layout