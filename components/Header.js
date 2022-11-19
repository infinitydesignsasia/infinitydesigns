/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BiChevronDown, BiShoppingBag } from "react-icons/bi";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaConnectdevelop,
} from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineControl } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { TbShirt } from "react-icons/tb";

const services = [
  {
    name: "Designing",
    description:
      "We commit teams to chip away at most recent trends, design, plan advancement that addresses the issues of requesting clients.",
    href: "#",
    icon: AiOutlineAntDesign,
  },
  {
    name: "Product Development",
    description:
      "We work with factories which furnish total arrangements with specialists, chipping away at future patterns.",
    href: "#",
    icon: FaConnectdevelop,
  },
  {
    name: "Production & Quality",
    description:
      "Designers, merchants and quality assurance work with industrial facilities to get the correct sort of items that meets the customer necessities. for example, as far as design innovation, right product with right drapes and fittings.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Quality Control",
    description:
      "We dependent on our client necessity adherence to AQL 1.0 – 2.5. Quality controller sets quality standards and monitors to decrease dismissal rates.",
    href: "#",
    icon: AiOutlineControl,
  },
  {
    name: "Logistics",
    description:
      "Shipping dep facilitates with the cargo forwarders and transportation specialists.",
    href: "#",
    icon: SiYourtraveldottv,
  },
];

const products = [
  {
    name: "Apparel",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: TbShirt,
  },
  {
    name: "Accessories",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BiShoppingBag,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className='sticky top-0 left-0 right-0 bg-[#F7F5F2] z-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>Infinity Designs</span>
              <h1 className='text-xl whitespace-nowrap font-semibold tracking-wider'>
                Infinity Designs
              </h1>
            </a>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-[#F7F5F2] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              About
            </a>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-[#F7F5F2] text-base font-medium hover:text-gray-900 focus:outline-none"
                    )}>
                    <span>Services</span>
                    <BiChevronDown
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-[#F7F5F2] px-5 py-6 sm:gap-8 sm:p-8'>
                          {services.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'>
                              <item.icon
                                className='h-6 w-6 flex-shrink-0 text-[#b2a4ff]'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-[#F7F5F2] text-base font-medium hover:text-gray-900 focus:outline-none"
                    )}>
                    <span>Our Products</span>
                    <BiChevronDown
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-[#F7F5F2] px-5 py-6 sm:gap-8 sm:p-8'>
                          {products.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'>
                              <item.icon
                                className='h-6 w-6 flex-shrink-0 text-[#b2a4ff]'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Contact
            </a>
          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-8'>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              <FaFacebookF />
            </a>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              <FaInstagram />
            </a>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50'>
          <div className='divide-y-2 divide-[#000] rounded-lg bg-[#F7F5F2] shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-xl whitespace-nowrap font-semibold tracking-wider'>
                    Infinity Designs
                  </h1>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-[#F7F5F2] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'>
                      <item.icon
                        className='h-6 w-6 flex-shrink-0 text-[#eebe7a]'
                        aria-hidden='true'
                      />
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  About
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Products
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Privacy Policy
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Terms
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-[#f3d7b0] px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-[#efc78e]'>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
