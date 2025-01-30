"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter.jsx";
import Offer from "./Offer.jsx";

export default ({ offers, imagePath, show_filter = true }) => {
  const [filteringOffers, setFilteringOffers] = useState([]);

  useEffect(() => {
    setFilteringOffers(offers);
  }, []);

  return (
    <div id="offers" className=" px-3 md:px-0">
      {filteringOffers && (
        <>
          {show_filter && (
            <>
              <Filter
                offers={offers}
                filteringOffers={filteringOffers}
                setFilteringOffers={setFilteringOffers}
              />
              <div className=" flex flex-row justify-between align-middle items-center w-full my-5">
                <div className="flex-1  text-gray-700">
                  <span className=" font-bold">Важливо!</span> Компанії не
                  розглядають заявки від користувачів, які вже подавали запит на
                  кредит або мають активний кредит протягом останніх 90 днів.
                </div>
                <div className=" flex-1 flex flex-row justify-end align-middle items-center">
                  <div className=" w-fit text-center border border-green-700 text-green-700 font-light px-4 py-2 rounded-md">
                    Знайдено {filteringOffers.length}{" "}
                    {filteringOffers.length < 5 ? "компанії" : "компаній"}
                  </div>
                </div>
              </div>
            </>
          )}

          {filteringOffers.map((offer, index) => {
            return <Offer imagePath={imagePath} offer={offer} key={index} />;
          })}
        </>
      )}
    </div>
  );
};
