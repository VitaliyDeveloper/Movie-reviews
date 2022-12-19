import { NoticeContainer, NoticeText } from './Notifications.styled';

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
