import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import { useDarkMode } from '../contexts/Application'

import { CardNoise, StyledLink, StyledExternalLink } from '../components/utils'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 4rem;
  margin-bottom: 8rem;
  @media (max-width: 375px) {
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  @media (min-width: 1441px) {
    margin-top: 5rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;

  @media (max-width: 960px) {
    margin: 0rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 72px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1000px;
  letter-spacing: -0.05em;
  font-family: 'GT Haptik', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 2rem 0 2rem 0;
    font-weight: 400;
  }
`

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  transition: right 0.25s ease;
  margin-left: 4rem;
  @media (max-width: 960px) {
    margin-left: 0rem;
    gap: 12px;
    flex-direction: column;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  return (
    <Layout path={props.location.pathname} nofooter={false}>
      <SEO
        title=""
        path={props.location.pathname}
        description={'A decentralized protocol for employment on Ethereum'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            Ameso is a decentralized protocol for employment built on Ethereum.
          </StyledBodyTitle>
          <StyledNav>
            <StyledExternalLink href={'https://app.ameso.org'}>
              Use the app <span style={{ fontSize: '11px' }}>↗</span>
            </StyledExternalLink>
            <StyledLink to={'/docs/v2/'}>Read the docs</StyledLink>
            <StyledLink to={'/faq'}>FAQ</StyledLink>
          </StyledNav>
        </StyledTitle>
      </StyledBody>
    </Layout>
  )
}

export default IndexPage
