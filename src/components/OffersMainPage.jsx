import {
  RocketLaunchIcon,
  CogIcon,
  UserCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";
const MainBtn = ({ offer_url }) => {
  return (
    <a
      href={offer_url}
      target="_blank"
      className=" flex flex-row gap-1 align-middle items-center justify-center w-full shadow-md bg-orange-500 text-white text-md md:text-lg font-bold rounded-md p-2 text-center hover:bg-green-700 cursor-pointer mt-3"
    >
      <CreditCardIcon className=" w-5 h-5" />
      Отримати гроші
    </a>
  );
};
const DetailsItem = ({ label, text, popoverText = null }) => {
  return (
    <div className=" flex flex-row justify-between">
      <div className=" text-gray-700 flex flex-row gap-1 normal-case">
        {label}
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
            <li
              className=" list-item list-disc normal-case"
              key={keyLabel + item.id}
            >
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
const ItemList = ({ label, text, icon }) => {
  return (
    <div className=" flex flex-row justify-between">
      <div className="flex  flex-row align-middle justify-center items-center gap-1">
        {icon}
        <span className=" hidden md:block text-gray-600">{label}:</span>
      </div>
      <span className="font-semibold">{text}</span>
    </div>
  );
};

export default ({ offers, imagePath }) => {
  return (
    <div>
      <div className=" grid grid-cols-2 md:grid-cols-4 align-middle justify-center gap-2 w-full ">
        {offers.map((offer, index) => {
          let percent = parseFloat(offer.percent_per_day).toFixed(2);
          return (
            <div
              key={index}
              className="border border-gray-200 flex flex-col p-2 gap-1 bg-gray-50 rounded-md"
            >
              <div className="relative border border-gray-200 rounded-md  bg-white">
                <div className="flex w-full items-center justify-center">
                  <img
                    alt={"кредит від" + offer.name}
                    className={"object-contain  w-40 h-20 p-4 "}
                    src={imagePath + offer.image}
                  />
                  {offer.recommended && (
                    <div className=" absolute top-0 left-0 bg-sky-800  text-white text-xs rounded-lg  px-5">
                      Рекомендовано
                    </div>
                  )}
                  {offer.zero_first && (
                    <div className="absolute top-0 right-0 bg-orange-700 text-white text-xs rounded-lg  px-5">
                      1й під 0,01%
                    </div>
                  )}
                </div>
              </div>
              <div className=" border border-dashed border-gray-600 rounded-md font-normal text-md text-center">
                {offer.offer_advantage}
              </div>
              <div className=" flex flex-col gap-1 m-2">
                <ItemList
                  label={"1й кредит"}
                  icon={<CogIcon className=" w-4 h-4 text-gray-600" />}
                  text={`${percent}% ${offer.first_amount}₴`}
                />
                <ItemList
                  label={"Сума"}
                  icon={<RocketLaunchIcon className=" w-4 h-4 text-gray-600" />}
                  text={`до ${offer.second_amount} ₴`}
                />
                <ItemList
                  label={"Вік"}
                  icon={<UserCircleIcon className=" w-4 h-4 text-gray-600" />}
                  text={`від 18 до ${offer.age}`}
                />
              </div>

              <MainBtn offer_url={offer.offer_url} />
            </div>
          );
        })}
      </div>
      <h2 className="p-5 md:p-0 text-2xl font-semibold text-gray-800 mt-5">
        Повна інформація по кредитам:
      </h2>
      <div className=" flex flex-col gap-2">
        {offers.map((offer, index) => {
          return (
            <div
              key={`info_${index}`}
              className="mt-5 p-5 border border-gray-200 rounded-md bg-gray-5 bg-white"
            >
              <h3 className=" text-black font-bold text-xl mb-5">
                {offer.name} ({offer.legal_entity})
              </h3>
              <div className="flex flex-col md:flex-row gap-3 0">
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
                  <DetailsItem
                    text={"від 18 до " + offer.age}
                    label="Вік займача"
                  />
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
                  <DetailsItem
                    text={offer.bankID ? "Так" : "Ні"}
                    label="BankID"
                  />
                  <DetailsItem
                    text={"до " + offer.time_to_get + " хв"}
                    label="Швидка видача"
                  />
                  <DetailsItem
                    text={
                      offer.around_the_clock ? "Цілодобово" : "Тільки в день"
                    }
                    label="Розгляд заявки"
                  />
                </div>
                {/* <div className="flex-1 flex flex-col gap-1">
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
                </div> */}
                <div className="flex-1 flex flex-col gap-1">
                  <LicenseItem label={"Ліцензія:"} text={offer.license} />
                  <LicenseItem
                    label={"Юридична особа:"}
                    text={offer.legal_entity}
                  />
                  <LicenseItem label={"E-mail:"} text={offer.email} />
                  <LicenseItem label={"Адреса:"} text={offer.address} />
                  <LicenseItem label={"Телефон:"} text={offer.phone} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full align-middle items-center justify-between">
                <div className="flex-1 flex flex-col">
                  <a
                    href={offer.basic_characteristics_href}
                    className=" text-blue-500"
                  >
                    Істотні характеристики послуги
                  </a>
                  <a href={offer.user_warning} className=" text-blue-500">
                    Попередження для користувача про наслідки
                  </a>
                </div>
                <div className="min-w-56">
                  <MainBtn offer_url={offer.offer_url} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
