import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Work With Me", href: "/workwithme", newTab: false },
  { name: "Projects", href: "/projects", newTab: false },
  { name: "Blog", href: 'https://typefully.com/RoxCodes', newTab: true },
  { name: "Experience", href: "/experience", newTab: false },
  { name: "Content", href: "https://linktr.ee/roxcodes", newTab: true },
  { name: "Story", href: "/story", newTab: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;

  const firstHalfNavigation = navigation.slice(
    0,
    Math.floor(navigation.length / 2)
  );
  const secondHalfNavigation = navigation.slice(
    Math.floor(navigation.length / 2),
    navigation.length
  );
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="sm:hidden flex flex-shrink-0 items-center">
                  <div className='text-white font-bold text-xl cursor-pointer' onClick={() => router.push('/')}>
                    Rox.codes
                  </div>
                </div>
                <div className="hidden flex-row w-full sm:flex items-center">
                  <div className="flex flex-row justify-center space-x-4  w-1/3">
                    {firstHalfNavigation.map((item) => (
                      <Link
                        key={item.name + "nav"}
                        href={item.href}
                        className={classNames(
                          pathname == item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          pathname == item.href ? "page" : undefined
                        }
                        target={item.newTab ? "_blank" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div
                    className="cursor-pointer w-1/3  text-center px-4 py-[3px] text-xl font-bold text-white"
                    onClick={() => router.push("/")}
                  >
                    Rox.codes
                  </div>    
                  <div className="flex space-x-4  justify-center w-1/3">
                    {secondHalfNavigation.map((item) => (
                      <Link
                        key={item.name + "nav"}
                        href={item.href}
                        className={classNames(
                          pathname == item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          pathname == item.href ? "page" : undefined
                        }
                        target={item.newTab ? "_blank" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name + "mobile"}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname == item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={pathname == item.href ? "page" : undefined}
                  target={item.newTab ? "_blank" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
