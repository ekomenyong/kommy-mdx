import KommyLink from './Link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <Popover className="sticky top-0 z-10 bg-white/95 backdrop-blur dark:bg-gray-800/95">
      <header className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-gray-00 flex items-center justify-between border-b py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <KommyLink href="#">
              <span className="sr-only">Ekom Enyong</span>
              <KommyLink href="/">
                <h2 className="jelly text-2xl font-bold uppercase">
                  ekom<span className="font-normal italic">enyong</span>
                </h2>
              </KommyLink>
            </KommyLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded bg-white p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700 dark:bg-gray-800 dark:text-white">
              <span className="sr-only">Open menu</span>
              <RiMenuLine className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            <ThemeToggle />
          </div>
          <div className="hidden space-x-10 md:flex">
            {/* <KommyLink href="#" className="tracking-wide text-gray-800 uppercase hover:underline">
              Link Text
            </KommyLink> */}
          </div>
          <nav className="hidden items-center justify-end md:flex md:flex-1 md:space-x-8 lg:w-0">
            <KommyLink
              href="/posts"
              className="uppercase tracking-wide text-gray-800 hover:underline dark:text-white"
            >
              Posts
            </KommyLink>
            <KommyLink
              href="/projects"
              className="uppercase tracking-wide text-gray-800 hover:underline dark:text-white"
            >
              Projects
            </KommyLink>
            <KommyLink
              href="/about"
              className="uppercase tracking-wide text-gray-800 hover:underline dark:text-white"
            >
              About
            </KommyLink>
            <KommyLink
              href="#"
              className="flex items-center justify-center rounded border border-transparent bg-gray-800 px-4 py-1 text-base font-medium uppercase tracking-wider text-white shadow-sm hover:underline dark:border-white dark:hover:bg-transparent"
            >
              Contact
            </KommyLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-0 transition md:hidden"
        >
          <header className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <KommyLink href="/">
                    <h2 className="jelly text-xl font-bold">
                      ekom<span className="font-normal italic">enyong</span>
                    </h2>
                  </KommyLink>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:bg-gray-800 dark:text-white">
                    <span className="sr-only">Close menu</span>
                    <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6">
                  <KommyLink
                    href="/about"
                    className="uppercase tracking-wide text-gray-800 hover:underline dark:text-white"
                  >
                    About
                  </KommyLink>
                  <KommyLink
                    href="/projects"
                    className="uppercase tracking-wide text-gray-800 hover:underline dark:text-white"
                  >
                    Projects
                  </KommyLink>
                  <KommyLink
                    href="/posts"
                    className="uppercase tracking-wide text-gray-800 hover:underline dark:text-white"
                  >
                    Posts
                  </KommyLink>
                  <KommyLink
                    href="mailto:hello@ekomenyong.com"
                    className="flex w-full items-center justify-center rounded border border-transparent bg-gray-800 px-4 py-2 text-base font-medium uppercase tracking-wider text-white shadow-sm hover:underline dark:border-gray-200"
                  >
                    Contact
                  </KommyLink>
                </nav>
              </div>
            </div>
          </header>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
