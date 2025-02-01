"use client";
import { useState } from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
export default function Header({ menuItems, settings, imagePath }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <img
              alt={settings.site_name}
              src={imagePath + settings.logo_img}
              className="h-14 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden align-middle  items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href={"/faq"} className=" font-semibold text-gray-900">
            FAQ (Запитання\відповідь)
          </Link>

          {settings.show_pages && (
            <Link href={"/pages"} className=" font-semibold text-gray-900">
              Статті
            </Link>
          )}
          <Link href={"/ranking"} className=" font-semibold text-gray-900">
            Рейтинг МФО
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="-m-1.5 p-1.5"
              onClick={(e) => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{settings.site_name}</span>
              <img
                alt=""
                src={imagePath + settings.logo_img}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Закрити меню</span>

              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-5">
            <Link
              href={"/faq"}
              onClick={(e) => setMobileMenuOpen(false)}
              className=" border border-gray-200 p-3 rounded-sm font-semibold text-gray-900"
            >
              FAQ (Запитання\відповідь)
            </Link>

            {settings.show_pages && (
              <Link
                onClick={(e) => setMobileMenuOpen(false)}
                href={"/pages"}
                className=" border border-gray-200 p-3 rounded-sm font-semibold text-gray-900"
              >
                Статті
              </Link>
            )}
            <Link
              onClick={(e) => setMobileMenuOpen(false)}
              href={"/ranking"}
              className="border border-gray-200 p-3 rounded-sm font-semibold text-gray-900"
            >
              Рейтинг МФО
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
