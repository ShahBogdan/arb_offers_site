"use client";
import React from "react";
import PopoverBlock from "../PopoverBlock";

const DetailsItem = ({ label, text, popoverText = null }) => {
  return (
    <div className=" flex flex-row justify-between">
      <div className=" text-gray-700 flex flex-row gap-1">
        {label}
        {/* {popoverText && <PopoverBlock text={popoverText} />} */}
      </div>
      <span className=" text-right">{text}</span>
    </div>
  );
};

const ItemsMap = ({ items, keyLabel, label, popoverText = null }) => {
  return (
    <>
      <p className="font-bold">{label}</p>
      <ul className="ml-10">
        {items.map((item) => {
          return (
            <li className=" list-item list-disc" key={keyLabel + item.id}>
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const LicenseItem = ({ label, text }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">{label}</p>
      <p>{text}</p>
    </div>
  );
};
export default ({ offer, setShowInfo }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mt-5 p-5 border border-gray-200 rounded-md bg-gray-50">
        <div className="flex-1 flex flex-col gap-1">
          <p className="font-bold">{"Деталі"}</p>
          <DetailsItem
            text={"до " + offer.first_amount + "грн"}
            label="Перший кредит"
          />
          <DetailsItem
            text={"до " + offer.second_amount + "грн"}
            label="Повторний кредит"
          />
          <DetailsItem
            text={offer.percent_per_day + " %"}
            label="Ставка на день"
            popoverText={
              "Знижена ставка на перший кредит. Точна відсоткова ставка доступна за умов позики."
            }
          />
          <DetailsItem
            text={offer.term_to + " днів"}
            label="Термін кредиту до"
          />
          <DetailsItem text={"від 18 до " + offer.age} label="Вік займача" />
          <DetailsItem
            text={
              "від " +
              offer.real_annual_rate_from +
              " до " +
              offer.real_annual_rate_to +
              "%"
            }
            label="Реальна річна процентна ставка"
            popoverText="Фактична річна вартість кредиту, включаючи всі додаткові витрати. Точна відсоткова ставка доступна в умовах позики."
          />
          <DetailsItem
            text={offer.on_lending ? "Так" : "Ні"}
            label="Перекредитування"
          />
          <DetailsItem text={offer.bankID ? "Так" : "Ні"} label="BankID" />
          <DetailsItem
            text={"до " + offer.time_to_get + " хв"}
            label="Швидка видача"
          />
          <DetailsItem
            text={offer.around_the_clock ? "Цілодобово" : "Тільки в день"}
            label="Розгляд заявки"
          />
          <a href={offer.basic_characteristics_href} className=" text-blue-500">
            Істотні характеристики послуги
          </a>
          <a href={offer.user_warning} className=" text-blue-500">
            Попередження для користувача про наслідки
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <ItemsMap
            label={"Необхідні документи:"}
            keyLabel={"doc_"}
            items={offer.documents}
          />
          <ItemsMap
            label={"Переваги:"}
            keyLabel={"adv_"}
            items={offer.advantages}
          />
          <ItemsMap
            label={"Способи погашення кредиту:"}
            keyLabel={"rep_method_"}
            items={offer.repayment_methods}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <LicenseItem label={"Ліцензія:"} text={offer.license} />
          <LicenseItem label={"Юридична особа:"} text={offer.legal_entity} />
          <LicenseItem label={"E-mail:"} text={offer.email} />
          <LicenseItem label={"Адреса:"} text={offer.address} />
          <LicenseItem label={"Телефон:"} text={offer.phone} />
        </div>
      </div>
      <div className=" flex justify-center items-center mt-3">
        <button
          onClick={(e) => setShowInfo(false)}
          className=" text-center cursor-pointer text-indigo-800"
        >
          Сгорнути опис
        </button>
      </div>
    </div>
  );
};
