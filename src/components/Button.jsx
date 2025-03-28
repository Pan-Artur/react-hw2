export const Button = ({ onClick }) => {
  const showMessage = () => {
    console.log("Кнопка була успішно клікнута!");
    if (onClick) onClick();
  };

  return <button onClick={showMessage}></button>;
};
