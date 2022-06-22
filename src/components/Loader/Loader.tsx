import "./style.scss";

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <p>Загружаем котиков...</p>
      <div className="loader" />
    </div>
  );
};
