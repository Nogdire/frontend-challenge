import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { CatCard } from "../../components/CatCard/CatCard";
import { removeFromFavorites } from "../../store/slices/favoritesSlice";
import { ICatObject } from "../../store/slices/types";
import { MainPortal } from "../../MainPortal/MainPortal";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

export const FavoriteCats: React.FC = () => {
  const [modal, setModal] = useState<null | ICatObject>(null);
  const cats = useAppSelector((state) => state.favoriteReducer.favoriteCats);
  const dispatch = useAppDispatch();

  const removeCatFromFavorites = (item: ICatObject) => {
    dispatch(removeFromFavorites(item));
    setModal(null);
  };

  return (
    <div className="elements">
      {cats.length ? (
        cats.map((item) => {
          return (
            <CatCard
              img={item.url}
              key={item.id}
              inFavorites={true}
              onClick={() => setModal(item)}
            />
          );
        })
      ) : (
        <div>У вас пока нет любимых котиков</div>
      )}
      {modal && (
        <MainPortal>
          <Modal
            onAgree={() => removeCatFromFavorites(modal)}
            onDisagree={() => setModal(null)}
          />
        </MainPortal>
      )}
    </div>
  );
};
