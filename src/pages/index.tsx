import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styled from "styled-components";

// const Title = styled.h1`
//   color: ${props => props.theme.colors.primary};
// `;

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Caique Almeida</title>
        <meta name="description" content="Personal website of Caique Almeida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Title>Hello World !</Title> */}
      <h1>Hello</h1>
    </div>
  )
}

export default Home
