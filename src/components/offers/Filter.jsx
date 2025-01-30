"use client";
import React, { useState } from "react";

export default ({ offers, filteringOffers, setFilteringOffers }) => {
  const biggestAmount = offers.reduce(
    (max, offer) => (offer.second_amount > max ? offer.second_amount : max),
    0
  );
  const smallestAmountFrom = offers.reduce(
    (min, offer) => (offer.amount_from < min ? offer.amount_from : min),
    Infinity
  );
  const [amount, setAmount] = useState(1000);

  function handleChangeSortingType(e) {
    const type = parseInt(e.target.value);
    let sortedOffers = filteringOffers;
    if (type == 0) {
      sortedOffers = filteringOffers.sort((a, b) => a.id - b.id);
    }
    if (type == 1) {
      sortedOffers = filteringOffers.sort(
        (a, b) =>
          parseFloat(a.real_annual_rate_to) - parseFloat(b.real_annual_rate_to)
      );
    }
    if (type == 2) {
      sortedOffers = filteringOffers.sort((a, b) => b.term_to - a.term_to);
    }
    if (type == 3) {
      sortedOffers = filteringOffers.sort(
        (a, b) => a.time_to_get - b.time_to_get
      );
    }

    setFilteringOffers([...sortedOffers]);

    // <option value={0}>Всі</option>
    // <option value={1}>Найменьша річна ставка</option>
    // <option value={2}>Найдовший термін</option>
    // <option value={3}>Найшвидша видача</option>
  }

  function handleFilter(amount) {
    setAmount(amount);
    const newArr = offers.filter((el) => el.second_amount >= amount);
    setFilteringOffers(newArr);
  }

  function handleReset() {
    setAmount(smallestAmountFrom);
    setFilteringOffers(offers);
  }

  return (
    <>
      <div
        id="filter"
        className=" flex flex-col md:flex-row gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500  p-2 rounded-md "
      >
        <div className="flex-1 flex flex-col justify-center align-middle p-2 ">
          <p className=" text-lg font-medium text-white">
            Скористайтесь налаштуваннями та підберіть оптимальну пропозицію:
          </p>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-col border border-gray-100 text-gray-800 font-semibold rounded-md p-2 ">
          <p className="my-2">
            <span className=" text-base ">Максимальна сума:</span>{" "}
            <span className=" text-lg font-bold text-blue-700">
              {amount} грн
            </span>
          </p>
          <input
            id="amountSlider"
            type="range"
            min={smallestAmountFrom}
            max={biggestAmount}
            value={amount}
            onChange={(e) => handleFilter(parseInt(e.target.value))}
            step="500"
          />
          <div className=" flex flex-row justify-between">
            <span className=" text-gray-600 font-thin">
              {smallestAmountFrom}
            </span>
            <span className="text-gray-600 font-thin">{biggestAmount}</span>
          </div>
        </div>
        <div className=" flex-1 bg-gray-50  rounded-md p-2 border border-gray-100 text-gray-800 font-semibold  ">
          <p className="my-2">Сортування пропозицій:</p>
          <select
            onChange={handleChangeSortingType}
            className="w-full border-2 border-blue-500 p-2 rounded-md"
          >
            <option value={0}>Всі МФО</option>
            <option value={1}>Найменьша річна ставка</option>
            <option value={2}>Найдовший термін</option>
            <option value={3}>Найшвидша видача</option>
          </select>
        </div>
      </div>
    </>
  );
};
