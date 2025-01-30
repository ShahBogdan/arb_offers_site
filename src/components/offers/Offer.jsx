"use client";
import React, { useState } from "react";
import OfferInfo from "./OfferInfo";
import { Xcircle, Check, Document } from "../icons/Index";
import PopoverBlock from "../PopoverBlock";
const MainInfoItem = ({ label, text }) => {
  return (
    <div className=" flex flex-col text-sm ">
      <span className=" text-gray-600 font-normal">{label}</span>
      <span className=" font-bold">{text}</span>
    </div>
  );
};

const MainTagItem = ({ text, active, popoverText = null }) => {
  return (
    <div className=" flex flex-row gap-1 align-middle items-center text-sm md:text-base  ">
      {active ? (
        <Xcircle className={" text-gray-500 w-4 h-4 md:w-6 md:h-6 "} />
      ) : (
        <Check
          className={" text-green-600 rounded-full w-4 h-4 md:w-6 md:h-6 "}
        />
      )}
      <span className=" text-gray-700">{text}</span>
      {/* {popoverText && <PopoverBlock text={popoverText} />} */}
    </div>
  );
};

const handleMailClick = (e, offer) => {
  e.preventDefault();
  window.location.href = offer.offer_url;
};

export default ({ offer, imagePath }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="inline-block w-full  ">
      <div className="flex flex-col mt-4 shadow-lg  border-gray-300 rounded-md p-5 bg-gray-50 border border-transparent hover:border-green-500 ">
        <h3 className=" font-semibold">
          <span className=" font-light">Кредит від:</span> {offer.name}
        </h3>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <div className="flex border border-gray-200 rounded-md items-center justify-center bg-white">
            <img
              alt={"кредит від" + offer.name}
              className={"object-contain  w-40 h-20 p-4 "}
              src={imagePath + offer.image}
            />
          </div>
          <div className="flex-1 grid grid-rows-3 md:grid-rows-2 grid-flow-col  gap-1 md:gap-4">
            <MainInfoItem
              label="Перший кредит"
              text={"до" + " " + offer.first_amount + " " + "грн."}
            />
            <MainInfoItem
              label="Повторний кредит"
              text={"до" + " " + offer.second_amount + " " + "грн."}
            />
            <MainInfoItem
              label="Реальна річна ставка"
              text={
                "від " +
                offer.real_annual_rate_from +
                " до " +
                offer.real_annual_rate_to +
                " %"
              }
            />
            <MainInfoItem
              label="Ставка на день"
              text={offer.percent_per_day + " %"}
            />
            <MainInfoItem
              label="Термін кредиту"
              text={
                offer.term_from == offer.term_to
                  ? offer.term_from + " днів"
                  : "від " + offer.term_from + " до " + offer.term_to + " днів"
              }
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 mt-2 md:mt-0">
            <div className="grid grid-cols-2 gap-2 ">
              <MainTagItem
                text="Пере-кредит."
                active={offer.on_lending}
                popoverText={
                  "Можна отримати позику, навіть якщо у вас є незакриті кредити в інших банках чи організаціях."
                }
              />
              <MainTagItem text="На картку" active={offer.bank_card} />
              <MainTagItem
                popoverText={
                  "BankID дозволяє автоматично заповнити особисті дані, підтягнувши їх з державних реєстрів "
                }
                text="BankID"
                active={offer.bankID}
              />
              <MainTagItem text="Готівкою" active={offer.cash} />
            </div>
            <div className="inline-block mt-2 md:mt-0">
              <button
                onClick={(e) => handleMailClick(e, offer)}
                className=" w-full shadow-md bg-green-600 text-white text-lg font-bold rounded-md p-2 text-center hover:bg-green-700 cursor-pointer"
              >
                Оформити
              </button>

              <button
                onClick={(e) => setShowInfo(!showInfo)}
                className=" flex flex-row gap-2 group justify-center mt-2 px-4 py-1 w-full border border-gray-400 text-center rounded-md hover:bg-gray-700 hover:text-white cursor-pointer"
              >
                <Document
                  className={"w-6 h-6 text-gray-600 group-hover:text-white"}
                />
                {!showInfo
                  ? " Повна інформація про кредитора"
                  : "Сгорнути інформацію "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showInfo && <OfferInfo offer={offer} setShowInfo={setShowInfo} />}
    </div>
  );
};
