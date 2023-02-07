import styled from 'styled-components';

export const CardItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border: 2px solid #e7dddd;
  padding: 5px;
`;

export const CardStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const CardAvatar = styled.img``;

export const CardName = styled.p`
  font-weight: 600;
`;
