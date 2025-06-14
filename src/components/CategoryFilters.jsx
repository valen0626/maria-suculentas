import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { FunnelIcon, XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { filters, sortOptions } from "../utils/filterOptions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoryFilters({
  categoriasSeleccionadas,
  onFilterChange,
  ordenSeleccionado,
  onSortChange,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategoria = (categoria) => {
    const nuevas = categoriasSeleccionadas.includes(categoria)
      ? categoriasSeleccionadas.filter((c) => c !== categoria)
      : [...categoriasSeleccionadas, categoria];

    onFilterChange(nuevas);
  };

  const clearFilters = () => {
    onFilterChange([]);
    onSortChange("");
  };

  const FiltroContenido = () => (
    <form className="space-y-6">
      <Disclosure as="div" className="border-b border-gray-200 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between text-sm font-medium text-gray-900">
              <span>Categorías</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 space-y-3">
              {filters[0].options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={option.value}
                    name={option.value}
                    type="checkbox"
                    checked={categoriasSeleccionadas.includes(option.value)}
                    onChange={() => toggleCategoria(option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Ordenar por</h3>
        <div className="space-y-2">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSortChange(opt.value)}
              type="button"
              className={classNames(
                ordenSeleccionado === opt.value
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50",
                "w-full text-left px-4 py-2 text-sm rounded-md"
              )}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm text-green-600 hover:underline"
        >
          Limpiar filtros
        </button>
      </div>
    </form>
  );

  return (
    <>
      {/* Botón para móvil */}
      <div className="md:hidden p-4">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 text-sm text-gray-700 font-semibold"
        >
          <FunnelIcon className="h-5 w-5" />
          Filtros
        </button>
      </div>

      {/* Panel lateral en desktop */}
      <aside className="hidden md:block w-60 border-r border-gray-200 p-7">
        {FiltroContenido()}
      </aside>

      {/* Filtros como panel móvil */}
      <Transition show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60] md:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto w-full max-w-xs h-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-3">
                  <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                  <button
                    type="button"
                    className="-mr-2"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-200 px-4">
                  {FiltroContenido()}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
