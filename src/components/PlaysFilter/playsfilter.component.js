import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
      <Disclosure className="bg-slate-800">
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-300">
            <div className="flex items-center gap-3 flex-wrap">
              {props.tags.map((tag) => (
                <>
                  <div className="border-2 border-gray-300 p-3">
                    <span className="text-red-600">{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;
