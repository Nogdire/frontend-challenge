import { Button } from "../Button/Button";
import "./style.scss";

interface ModalProps {
  onAgree: () => void;
  onDisagree: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onAgree, onDisagree }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <p>Котик может обидеться. Вы уверены?</p>
        <Button onClick={onAgree} text={"Да"} type="primary" />
        <Button onClick={onDisagree} text={"Нет, конечно!"} type="secondary" />
      </div>
    </div>
  );
};
