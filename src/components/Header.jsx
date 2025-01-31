"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Star } from "./icons/Index";
import Link from "next/link";
export default function Header({ menuItems, settings, imagePath }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log("menuItems", menuItems);
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
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Star aria-hidden="true" className=" text-red-600 fill-current " />
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
            <Link href={"/"} className="-m-1.5 p-1.5">
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
              <span className="sr-only">Close menu</span>
              <Star
                aria-hidden="true"
                className=" text-blue-600 fill-current "
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href={"/faq"} className=" font-semibold text-gray-900">
                  FAQ (Запитання\відповідь)
                </Link>

                {settings.show_pages && (
                  <Link
                    href={"/pages"}
                    className=" font-semibold text-gray-900"
                  >
                    Статті
                  </Link>
                )}
                <Link
                  href={"/ranking"}
                  className=" font-semibold text-gray-900"
                >
                  Рейтинг МФО
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
