import styled from 'styled-components';
const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 30px;
  box-shadow: -2px 3px 23px -4px rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  background-color: white;
`;

export const CardTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  padding: 10px;
  margin: 0 auto;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
export const CardItem = styled.li`
  width: 70px;
  height: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${randomColor};
`;
export const CardLabel = styled.span`
  color: white;
  padding: 5px;
`;
export const CardQuantity = styled.span`
  font-size: 20px;
  color: white;
`;
