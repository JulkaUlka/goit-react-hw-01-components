import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  box-shadow: -2px 3px 23px -4px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  background-color: white;
`;

export const CardHeader = styled.div`
  background-color: white;
  margin: 0 auto;
`;

export const CardAvatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 150px;
  border: 1px solid black;
`;

export const CardName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const CardTag = styled.p`
  color: grey;
  font-style: italic;
`;
export const CardLocation = styled.p`
  color: grey;
`;
export const CardInfo = styled.ul`
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  gap: 20px;
  background-color: #ed9e92b3;
`;
export const CardInfoList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const CardLabel = styled.span`
  color: #d14040;
`;
export const CardQuantity = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #d14040;
`;
