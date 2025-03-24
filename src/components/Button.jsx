export const Button = ({ onClick }) => {
  const showMessage = () => {
    console.log("Кнопка була успішно клікнута!");
    setInterval(() => {
        
    }, 1000);
    if (onClick) onClick();
  };

  return <button onClick={showMessage}></button>;
};
