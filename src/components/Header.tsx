import KommyLink from './Link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <Popover className="sticky top-0 z-10 bg-white/95 backdrop-blur dark:bg-gray-900/95">
      <header className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b border-gray-00 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <KommyLink href="#">
              <span className="sr-only">Ekom Enyong</span>
              <KommyLink href="/">
                <h2 className="text-2xl font-bold uppercase jelly">
                  ekom<span className="italic font-normal">enyong</span>
                </h2>
              </KommyLink>
            </KommyLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 rounded bg-gray-50 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700 dark:bg-gray-900">
              <span className="sr-only">Open menu</span>
              <RiMenuLine className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
            <ThemeToggle />
          </div>
          <div className="hidden space-x-10 md:flex"></div>
          <nav className="items-center justify-end hidden md:flex md:flex-1 md:space-x-8 lg:w-0">
            <KommyLink
              href="/about"
              className="tracking-wide uppercase hover:underline"
            >
              About
            </KommyLink>
            {/* <KommyLink
              href="/projects"
              className="tracking-wide uppercase hover:underline"
            >
              Projects
            </KommyLink> */}
            <KommyLink
              href="/posts"
              className="tracking-wide uppercase hover:underline"
            >
              Posts
            </KommyLink>
            <KommyLink
              href="#"
              className="flex items-center justify-center px-4 py-1 text-base font-medium tracking-wider text-white uppercase border border-transparent rounded shadow-sm bg-primary-600 hover:underline dark:border-primary-600 dark:hover:bg-transparent"
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
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <header className="border border-gray-200 divide-y-2 rounded-lg shadow-lg divide-gray-50 bg-gray-50 ring-1 ring-primary-500 ring-opacity-5 dark:border-gray-700 dark:bg-gray-900">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <KommyLink href="/">
                    <h2 className="text-xl font-bold jelly">
                      ekom<span className="italic font-normal">enyong</span>
                    </h2>
                  </KommyLink>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:bg-gray-800 ">
                    <span className="sr-only">Close menu</span>
                    <RiCloseLine className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6">
                  <KommyLink
                    href="/about"
                    className="tracking-wide uppercase hover:underline"
                  >
                    About
                  </KommyLink>
                  {/* <KommyLink
                    href="/projects"
                    className="tracking-wide uppercase hover:underline"
                  >
                    Projects
                  </KommyLink> */}
                  <KommyLink
                    href="/posts"
                    className="tracking-wide uppercase hover:underline"
                  >
                    Posts
                  </KommyLink>
                  <KommyLink
                    href="mailto:hello@ekomenyong.com"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium tracking-wider text-white uppercase border border-transparent rounded shadow-sm bg-primary-600 hover:underline dark:border-primary-600"
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
