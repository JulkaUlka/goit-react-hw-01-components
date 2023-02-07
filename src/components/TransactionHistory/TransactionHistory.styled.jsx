import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 50%;
  border-collapse: collapse;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  box-shadow: -2px 3px 23px -4px rgba(0, 0, 0, 0.75);
  
`;

export const TableHead = styled.thead`
  font-weight: bold;
  background-color: #3faecf;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #b6e7e5;
  }
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;
