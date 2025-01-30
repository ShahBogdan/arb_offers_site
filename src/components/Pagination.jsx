import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({ next, prev }) {
  return (
    <div className="flex flex-row justify-between">
      <a disabled={prev ? false : true} href={next}>
        Назад
      </a>
      <a disabled={next ? false : true} href={prev}>
        Наступна сторінка
      </a>
    </div>
  );
}
