import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "@heroicons/react/outline";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Wrapper } from './components/Wrapper';
import { MainHeader } from './components/MainHeader';
import { Title } from './components/Title';

let titles = [
  ["Modelo de Control de clave Windows","Modelo Alfanumerico, debe tener 7 caracteres de longitud"],
  ["Modelo de Control de clave Linux","La contraseña debe tener 10 caracteres de longitud, La contraseña no debe repetir el mismo carácter más de dos veces"],
  ["Politica de Prueba ","La contraseña no debe repetir el mismo carácter más de dos veces"],
  ["Politica de Clave Nova","La contraseña debe tener 10 caracteres de longitud, La contraseña no debe repetir el mismo carácter más de dos veces"],

];

export default function Email() {
  const [messages, setMessages] = useState([...Array(6).keys()]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  function addMessage() {
    let newId = (messages.at(-1) || 0) + 1;
    setMessages((messages) => [...messages, newId]);
  }

  function toggleMessage(mid) {
    if (selectedMessages.includes(mid)) {
      setSelectedMessages((messages) => messages.filter((id) => id !== mid));
    } else {
      setSelectedMessages((messages) => [...messages, mid]);
    }
  }

  function archiveSelectedMessages() {
    setMessages((messages) =>
      messages.filter((id) => !selectedMessages.includes(id))
    );
    setSelectedMessages([]);
  }

  return (
    <Wrapper>
    <MainHeader>
        <Title title= { `Listado de Modelos de Password`} />
    </MainHeader>
    <div className="flex flex-col overscroll-y-contain text-slate-600">
      <div className="mx-auto flex w-full flex-1 overflow-hidden rounded-2xl bg-white " >
        <div className="flex  flex-col bg-slate-50 py-2">
          <div className="border-b px-5">
            <div className="flex justify-between py-2 text-right">
              <button
                onClick={addMessage}
                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                <Icons.PlusIcon className="h-5 w-5 " />
              </button>
              <button
                onClick={archiveSelectedMessages}
                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                <Icons.ArchiveIcon className="h-5 w-5" />
              </button>

            </div>
          </div>
          <ul className="overflow-y-scroll px-3 pt-2">
            <AnimatePresence initial={false}>
              {[...messages].reverse().map((mid) => (
                <motion.li
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ opacity: { duration: 0.2 } }}
                  key={mid}
                  className="relative"
                >
                  <div className="py-0.5 flex ">
                    <button
                      onClick={() => toggleMessage(mid)}
                      className={`${
                        selectedMessages.includes(mid)
                          ? "bg-blue-500"
                          : "hover:bg-slate-200"
                      }  w-full cursor-pointer  rounded py-3 px-3 text-left `}
                    >
                      <div className={`flex `} > 
                        <div> 
                        <p
                          className={`text-left	${
                            selectedMessages.includes(mid)
                              ? "text-white"
                              : "text-slate-500"
                          } truncate text-sm font-medium`}
                        >
                          {titles[mid % titles.length][0]}
                        </p>
                        <p
                          className={`${
                            selectedMessages.includes(mid)
                              ? "text-blue-200"
                              : "text-slate-400"
                          } truncate text-xs`}
                        >
                          {titles[mid % titles.length][1]}
                        </p>
                        </div>
                        <div className="flex" style={{justifyContent: 'flex-end'}}>
                          <button
                          className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 "
                          >
                          <Example/>
                        </button>
                       </div>
                      </div>
                    </button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
        <div className="flex-1 overflow-y-scroll border-l px-8 py-8">
          <h1 className="h-8 rounded bg-slate-100 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {[...Array(9).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-100" />
                <p className="h-4 rounded bg-slate-100" />
                <p className="h-4 w-4/6 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-700  focus:outline-none ">
        <Icons.DotsHorizontalIcon className="h-5 w-5 " />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Editar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Duplicar
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Archivar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Mover
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Eliminar
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}