import { styled } from 'styled-components';
import BackgroundImage from './Assets/Images/Rectangle2.png';
export const DemoContainer = styled.div({
  position: 'absolute',
  right: '3rem',
  bottom: '3rem',

  '@media (max-width: 768px)': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    border: 0,
    borderRadius: 0,
  },
});

export const Slide = styled.div`
  position: relative;
  width: 410px;
  height: 602.5px;
  border-radius: 25px;
  left: 25px;
  top: 25px;
  background-color: #a3a3a3;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SHeader = styled.div`
  display: flex;
  position: sticky;
  top: -125px;
  margin-top: -100px;
  justify-content: space-around;
  padding-top: 25px;
  width: 100%;
  height: 310px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  border-radius: 25px;
  z-index: 1;
  color: white;
`;
export const SHeaderNav = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  height: 83px;
  border-radius: 25px;
  z-index: 10;
  background-color: black;
`;

export const SlideImage = styled.img`
  width: 52.5px;
  height: 52.5px;
  border-radius: 50%;
`;
export const CompanyName = styled.div`
  font-family: 'Fredoka One', sans-serif;
  width: 107.5px;
  height: 25px;
  font-size: 20px;
  font-weight: 300;
  top: 25px;
  color: #ffffff;
`;

export const CloseButton = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  right: 25px;
  top: 25px;
  background-color: rgba(217, 217, 217, 0.26);
  cursor: pointer;
`;
export const Sbody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 5;
  position: relative;
`;
export const SFooter = styled.div`
  position: sticky;
  bottom: 6px;
  left: 6px;
  width: 397.5px;
  height: 85px;
  background-color: aliceblue;
  background-size: cover;
  border-radius: 20px;
  z-index: 5;
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const BuyButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const BuyIcon = styled.img`
  width: 27.5px;
  height: 27.5px;
`;

export const BuyText = styled.div`
  font-size: 15px;
`;

export const Hline = styled.div`
  width: 2.5px;
  height: 73px;
  background-color: rgba(8, 7, 7, 0.23);
  margin-top: 2px;
`;

export const SellButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const SellIcon = styled.img`
  width: 27.5px;
  height: 27.5px;
`;

export const SellText = styled.div`
  font-size: 15px;
`;

export const TextGroup = styled.div`
  margin-top: 80px;
`;

export const HelloText = styled.div`
  font-size: 35px;
  font-family: 'Fredoka One', sans-serif;
  font-weight: 800;
`;

export const QText = styled.div`
  font-size: 32px;
  font-family: 'Fredoka One', sans-serif;
`;

export const QGroup = styled.div`
  margin-top: -75px;
`;

export const QButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 345px;
  height: 47.5px;
  background-color: white;
  opacity: 0.59;
  border-radius: 25px;
  cursor: pointer;
`;

export const QButtonIcon = styled.img`
margin-left: 20px;
margin-right: 10px;
  width: 25px;
`;

export const QButtonPlacefolder = styled.div`
  font-size: 17.5px;
  font-family: 'Fredoka One', sans-serif;
`;

export const QButtonNexticon = styled.img`
  width: 12.5px;
  height: 18px;
  margin-right: 10px;
  position: absolute;
  right: 40px;
`;

export const PicGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Pictitle = styled.div`
  font-size: 20px;
  font-family: 'Fredoka One', sans-serif;
  color: white;
  font-weight: lighter;
`;

export const Pic = styled.img`
  width: 342.5px;
  height: 77.5px;
  margin-top: 20px;
`;

export const BookCalendar = styled.div`
  width: 380px;
  background-color : white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
`;


export const Avatarimage = styled.img`
  width: 62.5px;
  margin-top: 20px;

`;


export const Avatartitle = styled.div`
  font-size: 25px;
  line-height: 2.5;
`;


export const AvatarDes = styled.div`
  font-size: 20px;
`;

export const ChatBox = styled.div`
  margin: 20px;
`;


