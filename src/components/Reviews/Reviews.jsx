import noAvatar from '../../img/no-photo.jpg';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(({ id, author, text, details }) => {
          console.log(details.avatar_path);
          return (
            <li key={id}>
              <img
                src={
                  details.avatar_path
                    ? 'https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
                    : noAvatar
                }
                alt={details.name}
                width="50px"
              />
              <h3>{author}</h3>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
