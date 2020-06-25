import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  url?: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        display: flex;
      }
      a {
        width: 76px;
        height: 24px;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
      #list {
        ${({ url }) =>
          url === '/'
            ? css`
                color: #ffffff;
              `
            : css`
                color: #ffffff;
                opacity: 0.8;
              `}
      }
      #import {
        ${({ url }) =>
          url === '/import'
            ? css`
                color: #ffffff;
              `
            : css`
                color: #ffffff;
                opacity: 0.8;
              `}
      }
    }
  }
`;
