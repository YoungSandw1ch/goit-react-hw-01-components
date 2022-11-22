import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  box-shadow: ${({ theme }) => theme.shadows.greyShadow};
  background-color: ${({ theme }) => theme.colors.white};
`;
export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableRow};
  }
  :hover {
    background-color: yellow;
  }
`;
export const TableHeader = styled.th`
  padding: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.tableBorder};
  background-color: ${({ theme }) => theme.colors.tableHead};
  color: ${({ theme }) => theme.colors.white};
`;
export const DataCell = styled.td`
  padding: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.tableBorder};
  color: ${({ theme }) => theme.colors.tableFont};
`;
