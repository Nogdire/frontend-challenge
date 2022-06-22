import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import React, { useEffect, useState } from "react";
import { catsRequest } from "../../store/slices/catsSlice";
import { CatCard } from "../../components/CatCard/CatCard";
import { addToFavorites } from "../../store/slices/favoritesSlice";
import { ICatObject } from "../../store/slices/types";
import { Loader } from "../../components/Loader/Loader";
import { setLoading } from "../../store/slices/catsSlice";

export const AllCats: React.FC = () => {
  const { data, loading } = useAppSelector((state) => state.catsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(catsRequest());
    }
  }, [loading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const addCatToFavorites = (item: ICatObject) => {
    dispatch(addToFavorites(item));
  };

  const scrollHandler: EventListener = (e: Event) => {
    const target = e.target as Document;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setLoading());
    }
  };

  return (
    <>
      <div className="elements">
        {data.map((item) => {
          return (
            <CatCard
              img={item.url}
              onClick={() => addCatToFavorites(item)}
              key={item.id}
              inFavorites={false}
            />
          );
        })}
      </div>
      {loading && <Loader />}
    </>
  );
};
