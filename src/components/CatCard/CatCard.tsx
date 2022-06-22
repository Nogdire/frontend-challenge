import "./style.scss";
import { SvgHeart } from "../SvgHeart/SvgHeart";

interface CatCardProps {
  img: string;
  inFavorites?: boolean;
  onClick?: () => void;
}

export const CatCard: React.FC<CatCardProps> = ({
  img,
  inFavorites,
  onClick,
}) => {
  return (
    <div className={inFavorites ? "cat-card favorite" : "cat-card"}>
      <img src={img} alt="some cat" className="cat-card__img" />
      <div onClick={onClick}>
        <SvgHeart />
      </div>
    </div>
  );
};
