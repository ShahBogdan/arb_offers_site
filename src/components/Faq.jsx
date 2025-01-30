import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function FaqComponent({ items }) {
  return (
    <div className="w-full md:w-2/3 mx-auto">
      {items.map((el, i) => {
        return (
          <div key={i} className="">
            <Disclosure key={el.id} as={"div"} className={""}>
              <DisclosureButton className="group  items-center justify-between border w-full my-3 p-3 rounded-md bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 text-white group flex  gap-2 font-semibold text-xl ">
                <span>{el.question}</span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-600 text-lg">
                {el.answer}
              </DisclosurePanel>
            </Disclosure>
          </div>
        );
      })}
    </div>
  );
}
