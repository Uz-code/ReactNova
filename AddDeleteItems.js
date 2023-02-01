import { useState } from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { Wrapper } from './components/Wrapper';
import { MainHeader } from './components/MainHeader';
import { Title } from './components/Title';
import * as Icons from "@heroicons/react/outline";

let x = 3;
export default function AddDeleteItems() {
  const [items, setItems] = useState([1, 2, 3]);

  function addItem() {
    x++;
    setItems((items) => [...items, x]);
  }

  function removeItem(item) {
    setItems((items) => items.filter((i) => i !== item));
  }

  return (
    <>
    <Wrapper>
			    <MainHeader>
              <Title title= { `Listado de items`} />
          </MainHeader>

        <div className="mx-auto  rounded-2xl bg-white ">
  
        <ul className="mt-8 border rounded p-8 ">
        <li>
          <button onClick={addItem} className="border -mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200">
          <Icons.PlusIcon className="h-5 w-5 text-gray-500" />
          </button>
        </li>
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  height: { duration: 0.4 },
                }}
              >

          <div className="flex-1 border px-8 py-8 mb-5 mt-5">
            <h1 className="h-8 rounded bg-slate-100 text-2xl font-bold" />
              <div className="mt-8 space-y-6">
                <div className="space-y-2 text-sm">
                  <p className="h-4 w-5/6 rounded bg-slate-100" />
                  <p className="h-4 rounded bg-slate-100" />
                  <p className="h-4 w-4/6 rounded bg-slate-100" />
                  <button onClick={() => removeItem(item)} className="border rounded px-2 py-1 center hover:bg-slate-100 ">
                  <Icons.TrashIcon className="h-5 w-5 text-gray-400 hover:text-gray-500 " />
                  </button>
              </div>

       

            
          </div>
        
        </div>
  
  
               
             
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      </Wrapper>
      
    </>
  );
}

function TR({ item, removeItem } ) {
  let isPresent = useIsPresent();

  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
      style={{
        position: isPresent ? "relative" : "absolute",
        display: isPresent ? "table-row" : "flex",
        alignItems: isPresent ? "" : "center",
      }}
      className="w-full"
    >
      <td className="w-1/3">item</td>
      <td className="w-1/3">{item}</td>
      <td className="w-1/3 text-center">
        <button
          onClick={() => removeItem(item)}
          className="w-8 h-8 border rounded"
        >
          &times;
        </button>
      </td>
    </motion.tr>
  );
}