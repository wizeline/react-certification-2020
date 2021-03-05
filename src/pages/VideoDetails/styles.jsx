/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const VideoContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: calc(
    100vh -
      ${(props) =>
        props && props.theme && props.theme.appBar && props.theme.appBar.height.desktop
          ? props.theme.appBar.height.desktop
          : '64px'}
  );
  overflow-y: scroll;
`;

export const ContentContainer = styled.div`
  padding: 10px 24px;
  overflow-wrap: break-word;
`;

export const Title = styled.h2`
  color: ${(props) =>
    props &&
    props.theme &&
    props.theme.typography &&
    props.theme.typography.title &&
    props.theme.typography.title.color};
`;

export const Description = styled.p`
  color: ${(props) =>
    props &&
    props.theme &&
    props.theme.typography &&
    props.theme.typography.text &&
    props.theme.typography.text.color};
`;
