import 'react-calendar/dist/Calendar.css';

import { Chat, ChatWindow, Header, Launcher, RuntimeAPIProvider, SessionStatus, SystemResponse, TurnType, UserResponse } from '@voiceflow/react-chat';
import { useContext, useState } from 'react';
import { match } from 'ts-pattern';
import Avatar from './Assets/Images/profile1.png';
import CloseB from './Assets/Images/X.png';
import Buyicon from './Assets/Images/2825588.png';
import Sellicon from './Assets/Images/1826721.png';
import QuestionIcon from './Assets/Images/message_bubble_chat_icon_1540031.png';
import VQuestionIcon from './Assets/Images/phone-call-thin-line-icon-social-icon-set-png1.png';
import NextIconimage from './Assets/Images/asdfas.png';
import Imagefirst from './Assets/Images/40613242_31.png';
import Imagesecond from './Assets/Images/w8320918_13.png';
import Imagethrid from './Assets/Images/w9263407_71.png';

import { LiveAgentStatus } from './components/LiveAgentStatus.component';
import { StreamedMessage } from './components/StreamedMessage.component';
import { RuntimeContext } from './context';
import { CustomMessage } from './custom-message.enum';
import { CalendarMessage } from './messages/CalendarMessage.component';
import { VideoMessage } from './messages/VideoMessage.component';
import {
  CloseButton,
  CompanyName,
  DemoContainer,
  Slide,
  SlideImage,
  SHeader,
  Sbody,
  SFooter,
  ButtonGroup,
  BuyButton,
  BuyIcon,
  BuyText,
  Hline,
  SellIcon,
  SellText,
  SellButton,
  TextGroup,
  HelloText,
  QText,
  QGroup,
  QButton,
  PicGroup,
  Pictitle,
  Pic,
  BookCalendar,
  QButtonIcon,
  QButtonPlacefolder,
  QButtonNexticon,
  SHeaderNav,
  Avatarimage,
  Avatartitle,
  AvatarDes,
  ChatBox,
} from './styled';
import { useLiveAgent } from './use-live-agent.hook';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

const IMAGE = 'https://picsum.photos/seed/1/200/300';
const AVATAR = 'https://picsum.photos/seed/1/80/80';

export const Demo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openGPT, setOpenGPT] = useState(0); // 0: home, 1: buy home, 2: sell home, 3: opengpt
  const { runtime } = useContext(RuntimeContext)!;
  const liveAgent = useLiveAgent();

  const onClickOpenGPT = () => {
    setOpenGPT(3);
  };

  const onClickHomeOpenGPT = () => {
    setOpenGPT(1);
  };

  const onClickBuyOpenGPT = () => {
    setOpenGPT(1);
  };

  const onClickSellOpenGPT = () => {
    setOpenGPT(2);
  };

  const handleLaunch = async () => {
    setOpen(true);
    await runtime.launch();
  };

  const handleEnd = () => {
    runtime.setStatus(SessionStatus.ENDED);
    setOpen(false);
  };

  const handleSend = (message: string) => {
    if (liveAgent.isEnabled) {
      liveAgent.sendUserReply(message);
    } else {
      runtime.reply(message);
    }
  };

  if (!open) {
    return (
      <span
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '2rem',
        }}
      >
        <Launcher onClick={handleLaunch} />
      </span>
    );
  }

  const HomeComponent = (
    <>
      <Sbody>
        <QGroup>
          <QButton onClick={onClickOpenGPT}>
            <QButtonIcon src={QuestionIcon}></QButtonIcon>
            <QButtonPlacefolder>I have a question</QButtonPlacefolder>
            <QButtonNexticon src={NextIconimage}></QButtonNexticon>
          </QButton>
          <QButton>
            <QButtonIcon src={VQuestionIcon}></QButtonIcon>
            <QButtonPlacefolder>Speak to an agent</QButtonPlacefolder>
            <QButtonNexticon src={NextIconimage}></QButtonNexticon>
          </QButton>
        </QGroup>
        <PicGroup>
          <Pictitle>Check out my newest listings</Pictitle>
          <Pic src={Imagefirst}></Pic>
          <Pic src={Imagesecond}></Pic>
          <Pic src={Imagethrid}></Pic>
        </PicGroup>
        <BookCalendar>
          <Avatarimage src={Avatar}></Avatarimage>
          <Avatartitle>ABC Realty</Avatartitle>
          <AvatarDes>Book a free Consultation Call</AvatarDes>
          <Datepicker display="inline" style={{ marginBottom: '20px' }} />
        </BookCalendar>
      </Sbody>
      <SFooter>
        <ButtonGroup>
          <BuyButton onClick={onClickBuyOpenGPT}>
            <BuyIcon src={Buyicon}></BuyIcon>
            <BuyText>Help me buy</BuyText>
            <BuyText>a home</BuyText>
          </BuyButton>
          <Hline></Hline>
          <SellButton onClick={onClickSellOpenGPT}>
            <SellIcon src={Sellicon}></SellIcon>
            <SellText>Help me sell</SellText>
            <SellText>a home</SellText>
          </SellButton>
        </ButtonGroup>
      </SFooter>
    </>
  );

  const BuyHomeComponent = (
    <ChatBox>
      <Chat
        title="My Assistant"
        description="welcome to my assistant"
        image={IMAGE}
        avatar={AVATAR}
        withWatermark
        startTime={runtime.session.startTime}
        hasEnded={runtime.isStatus(SessionStatus.ENDED)}
        isLoading={!runtime.session.turns.length}
        onStart={runtime.launch}
        onEnd={handleEnd}
        onSend={handleSend}
        onMinimize={handleEnd}
      >
        {liveAgent.isEnabled && <LiveAgentStatus talkToRobot={liveAgent.talkToRobot} />}
        {runtime.session.turns.map((turn, turnIndex) =>
          match(turn)
            .with({ type: TurnType.USER }, ({ id, type: _, ...rest }) => <UserResponse {...rest} key={id} />)
            .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...rest }) => (
              <SystemResponse
                {...rest}
                key={id}
                Message={({ message, ...props }) =>
                  match(message)
                    .with({ type: CustomMessage.CALENDAR }, ({ payload: { today } }) => (
                      <CalendarMessage {...props} value={new Date(today)} runtime={runtime} />
                    ))
                    .with({ type: CustomMessage.VIDEO }, ({ payload: url }) => <VideoMessage url={url} />)
                    .with({ type: CustomMessage.STREAMED_RESPONSE }, ({ payload: { getSocket } }) => <StreamedMessage getSocket={getSocket} />)
                    .with({ type: CustomMessage.PLUGIN }, ({ payload: { Message } }) => <Message />)
                    .otherwise(() => <SystemResponse.SystemMessage {...props} message={message} />)
                }
                avatar={AVATAR}
                isLast={turnIndex === runtime.session.turns.length - 1}
              />
            ))
            .exhaustive()
        )}
        {runtime.indicator && <SystemResponse.Indicator avatar={AVATAR} />}
      </Chat>
    </ChatBox>
  );

  const SellHomeComponent = (
    <ChatBox>
      <Chat
        title="My Assistant"
        description="welcome to my assistant"
        image={IMAGE}
        avatar={AVATAR}
        withWatermark
        startTime={runtime.session.startTime}
        hasEnded={runtime.isStatus(SessionStatus.ENDED)}
        isLoading={!runtime.session.turns.length}
        onStart={runtime.launch}
        onEnd={handleEnd}
        onSend={handleSend}
        onMinimize={handleEnd}
      >
        {liveAgent.isEnabled && <LiveAgentStatus talkToRobot={liveAgent.talkToRobot} />}
        {runtime.session.turns.map((turn, turnIndex) =>
          match(turn)
            .with({ type: TurnType.USER }, ({ id, type: _, ...rest }) => <UserResponse {...rest} key={id} />)
            .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...rest }) => (
              <SystemResponse
                {...rest}
                key={id}
                Message={({ message, ...props }) =>
                  match(message)
                    .with({ type: CustomMessage.CALENDAR }, ({ payload: { today } }) => (
                      <CalendarMessage {...props} value={new Date(today)} runtime={runtime} />
                    ))
                    .with({ type: CustomMessage.VIDEO }, ({ payload: url }) => <VideoMessage url={url} />)
                    .with({ type: CustomMessage.STREAMED_RESPONSE }, ({ payload: { getSocket } }) => <StreamedMessage getSocket={getSocket} />)
                    .with({ type: CustomMessage.PLUGIN }, ({ payload: { Message } }) => <Message />)
                    .otherwise(() => <SystemResponse.SystemMessage {...props} message={message} />)
                }
                avatar={AVATAR}
                isLast={turnIndex === runtime.session.turns.length - 1}
              />
            ))
            .exhaustive()
        )}
        {runtime.indicator && <SystemResponse.Indicator avatar={AVATAR} />}
      </Chat>
    </ChatBox>
  );

  const OpenGPTComponent = (
    <ChatBox>
      <Chat
        title="My Assistant"
        description="welcome to my assistant"
        image={IMAGE}
        avatar={AVATAR}
        withWatermark
        startTime={runtime.session.startTime}
        hasEnded={runtime.isStatus(SessionStatus.ENDED)}
        isLoading={!runtime.session.turns.length}
        onStart={runtime.launch}
        onEnd={handleEnd}
        onSend={handleSend}
        onMinimize={handleEnd}
      >
        {liveAgent.isEnabled && <LiveAgentStatus talkToRobot={liveAgent.talkToRobot} />}
        {runtime.session.turns.map((turn, turnIndex) =>
          match(turn)
            .with({ type: TurnType.USER }, ({ id, type: _, ...rest }) => <UserResponse {...rest} key={id} />)
            .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...rest }) => (
              <SystemResponse
                {...rest}
                key={id}
                Message={({ message, ...props }) =>
                  match(message)
                    .with({ type: CustomMessage.CALENDAR }, ({ payload: { today } }) => (
                      <CalendarMessage {...props} value={new Date(today)} runtime={runtime} />
                    ))
                    .with({ type: CustomMessage.VIDEO }, ({ payload: url }) => <VideoMessage url={url} />)
                    .with({ type: CustomMessage.STREAMED_RESPONSE }, ({ payload: { getSocket } }) => <StreamedMessage getSocket={getSocket} />)
                    .with({ type: CustomMessage.PLUGIN }, ({ payload: { Message } }) => <Message />)
                    .otherwise(() => <SystemResponse.SystemMessage {...props} message={message} />)
                }
                avatar={AVATAR}
                isLast={turnIndex === runtime.session.turns.length - 1}
              />
            ))
            .exhaustive()
        )}
        {runtime.indicator && <SystemResponse.Indicator avatar={AVATAR} />}
      </Chat>
    </ChatBox>
  );

  return (
    <DemoContainer>
      <ChatWindow.Container>
        <RuntimeAPIProvider {...runtime}>
          <Slide>
            <SHeaderNav>
              <SlideImage src={Avatar} />
              <CompanyName>ABC Realty</CompanyName>
              <CloseButton onClick={handleEnd} src={CloseB}></CloseButton>
            </SHeaderNav>
            <SHeader>
              <TextGroup>
                <HelloText>{openGPT === 0 && 'Hello!'}</HelloText>
                <QText>
                  {openGPT === 0
                    ? 'How may I help you'
                    : openGPT === 1
                    ? 'We would love to'
                    : openGPT === 2
                    ? 'We would love to help'
                    : 'How may I help you'}
                </QText>
                <QText>
                  <QText>
                    {openGPT === 0 ? 'today?' : openGPT === 1 ? 'help you find a home!' : openGPT === 2 ? 'you sell your home!' : 'today?'}
                  </QText>
                </QText>
              </TextGroup>
            </SHeader>
            {openGPT === 0 ? HomeComponent : openGPT === 1 ? BuyHomeComponent : openGPT === 2 ? SellHomeComponent : OpenGPTComponent}
          </Slide>
          {/*  */}
        </RuntimeAPIProvider>
      </ChatWindow.Container>
    </DemoContainer>
  );
};
