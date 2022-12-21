import {
  NoticeContainer,
  NoticeText,
  TitleStyle,
} from './Notifications.styled';

export const NotificationsReviews = () => {
  return (
    <NoticeContainer>
      <NoticeText>This movie don't have any reviews</NoticeText>
    </NoticeContainer>
  );
};

export const NotificationsCast = () => {
  return (
    <NoticeContainer>
      <NoticeText>We did not find any information about the actors</NoticeText>
    </NoticeContainer>
  );
};

export const TitleHome = () => {
  return <TitleStyle>Popular movies today</TitleStyle>;
};
