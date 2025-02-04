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
              <div className="hidden md:flex  flex-col md:flex-row justify-between align-middle items-center w-full my-5">
                <div className="flex-1  text-gray-700">
                  <span className=" font-bold">Важливо!</span>  Для підвищення
                  шансів ви можете подати декілька заявок вкомпанії в яких ви не
                  отримували відмову, або не кредит протягом останніх 90 днів.
                </div>
                <div className=" flex-1 flex flex-row justify-end align-middle items-center">
                  <div className="  my-3 md:my-0 w-fit text-center border border-green-700 text-green-700 font-light px-4 py-2 rounded-md">
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
