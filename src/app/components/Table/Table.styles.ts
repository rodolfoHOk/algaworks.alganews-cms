import styled from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.table`
  width: 100%;
  color: #274060;
  background-color: ${transparentize(0.95, '#274060')};
`;

export const Heading = styled.thead`
  background-color: ${transparentize(0.85, '#274060')};
`;

export const HeadingRow = styled.tr``;

export const HeadingCell = styled.th`
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
`;

export const Body = styled.tbody``;

export const BodyRow = styled.tr``;

export const BodyCell = styled.td`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 8px;
`;

export const TablePagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;

  ul {
    display: flex;
    list-style: none;
    gap: 8px;

    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 32px;
        height: 32px;
        padding: 0px 6px;
        background-color: #F3F8Fa;
        color: #274060;
        text-align: center;
        cursor: pointer;
        border: 1px solid ${transparentize(0.9, '#274060')};

        transition: .25s ease;

        &:hover,
        &:focus {
          box-shadow: 0 6px 6px rgba(0,0,0,.15);
          transform: translateY(-3px);
        }
      }

      &.selected a {
        background-color: #09F;
        color: #F3F8Fa;
        pointer-events: none;
      }

      &.disabled a {
        outline: none;
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
`;
