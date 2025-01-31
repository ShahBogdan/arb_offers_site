import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default ({ text }) => {
  return (
    <Popover className="relative">
      <PopoverButton
        className={
          " rounded-full  text-white text-xs bg-gray-400 h-4 w-4 active:border-transparent"
        }
      >
        ?
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="flex z-10 flex-col bg-gray-700 rounded-md p-4 text-white"
      >
        {text}
      </PopoverPanel>
    </Popover>
  );
};
