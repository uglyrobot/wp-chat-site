import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  Cog6ToothIcon,
  CogIcon,
  LifebuoyIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/20/solid'
import imajinnLogo from '@/images/chatwp.svg'
import imajinnDarkLogo from '@/images/chatwp.svg'
import qaHeader from '@/images/qa-illustration-teal-cyan.svg'
import avatar from '@/images/avatars/aaroned.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Signup from '@/components/Signup'
import Faq from '@/components/Faq'
import Chat from '@/components/Chat'

const navigation = []
const features = [
  {
    name: 'Question/Answer Bots',
    description:
      'Make you documentation interactive with our Q/A bot. Get detailed and direct answers about your product, including code examples and formatted output.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Embeddable Widgets',
    description:
      'We make it simple to add DocsBot chats to your website in minutes. Just add a script tag or WordPress plugin and you are ready to go. (coming soon)',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Custom Copywriting',
    description:
      'Need help writing marketing copy and blog posts? With DocsBot, you can do that too. Use a customized ChatGPT that knows everything about your product, so it can help you generate high-quality content in no time.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Reply to Support Tickets',
    description:
      'Tired of writing the same responses to support tickets over and over again? Train your DocBot on your support history and docs so it can reply to new tickets automatically, saving you time and money.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Internal Knowledge Bases',
    description:
      'Employees spend too much time just searching for what they need. DocsBot can help them find answers instantly by indexing your internal knowledge base and documentation.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Our API allows you to integrate AI chat into your own products. Provide answers to your users from your site, app, or WordPress plugin.',
    icon: Cog6ToothIcon,
  },
]

const footerNavigation = {
  solutions: [
    { name: 'Imajinn AI', href: 'https://imajinn.ai' },
    { name: 'Infinite Uploads', href: 'https://infiniteuploads.com' },
    {
      name: 'Big File Uploads',
      href: 'https://wordpress.org/plugins/tuxedo-big-file-uploads/',
    },
  ],
  tools: [
    {
      name: 'Imajinn WordPress Plugin',
      href: 'https://wordpress.org/plugins/imajinn-ai/',
    },
    {
      name: 'Product Photo Visualizer',
      href: 'https://imajinn.ai/product-visualizer',
    },
    { name: 'AI Photobooth', href: 'https://imajinn.ai/photobooth' },
  ],
  tools2: [
    {
      name: "AI-Personalized Children's Books",
      href: 'https://imajinn.ai/storybook',
    },
    { name: 'AI Sneaker Generator', href: 'https://imajinn.ai/sneakers' },
    {
      name: 'Printed AI Couples Portraits',
      href: 'https://imajinn.ai/portrait',
    },
  ],
  legal: [
    { name: 'Privacy', href: 'https://imajinn.ai/privacy-policy' },
    { name: 'Terms', href: 'https://imajinn.ai/terms-of-service' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/UglyRobotDev/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/uglyrobot/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Imajinn-AI/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/imajinn.ai/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Home() {

  return (
    <>
      <Head>
        <title>ChatWP - The WordPress docs chatbot</title>
        <meta
          name="description"
          content="I'm an AI chatbot that gives direct answers to your WordPress questions. I've been trained on all the official WordPress documentation and will do my best to answer your questions accurately and truthfully."
        />
      </Head>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Popover as="header" className="relative">
            <div className="bg-gray-900 pt-6">
              <nav
                className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
                aria-label="Global"
              >
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/">
                      <span className="sr-only">ChatWP</span>
                      <Image
                        className="h-8 w-auto sm:h-12"
                        src={imajinnLogo}
                        alt="ChatWP Logo"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:ml-10 md:flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-white hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                <Link
                href="https://www.producthunt.com/posts/chatwp?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-chatwp"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=379055&theme=neutral&period=weekly&topic_id=268"
                  alt="ChatWP&#0032;&#0045;&#0032;The&#0032;WordPress&#0032;Docs&#0032;Chatbot - Get&#0032;direct&#0032;answers&#0032;to&#0032;your&#0032;WordPress&#0032;questions&#0032;for&#0032;free&#0033; | Product Hunt"
                  style={{ width: '250px', height: '54px' }}
                  width="250"
                  height="54"
                />
              </Link>
                  <a
                    href="https://docsbot.ai?utm_source=buffer&utm_medium=referral&utm_campaign=ChatWP"
                    className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white hover:bg-gray-700"
                  >
                    Create your own
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        src={imajinnLogo}
                        alt="ChatWP Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 px-5">
                      <a
                        href="https://docsbot.ai?utm_source=buffer&utm_medium=referral&utm_campaign=ChatWP"
                        className="shadow block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white hover:from-teal-600 hover:to-cyan-700"
                      >
                        Create your own
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <main>
            <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                    <div className="lg:py-24">
                      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block text-6xl sm:text-8xl">
                          ChatWP
                        </span>
                        <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-4xl text-transparent sm:pb-5 sm:text-5xl">
                          The WordPress docs chatbot
                        </span>
                      </h1>
                      <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                        I'm an AI chatbot that gives direct answers to your
                        WordPress questions. I've been trained on all the
                        official WordPress documentation and will do my best to
                        answer your questions accurately and truthfully.
                      </p>
                      <div className="mt-8">
                        <a
                          href="#ask"
                          type="button"
                          className="shadow block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-bold text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Ask me anything
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                      <Image
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={qaHeader}
                        alt="WP Chat Illustration"
                        priority
                      />
                    </div>
                  </div>
                  </div>
              </div>
            </div>

            <Chat />

            {/* Feature section with screenshot */}
            <div id="features" className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="">
                  <h2 className="text-lg font-semibold text-cyan-600">
                    ChatGPT-powered customer support
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Train and deploy custom chatbots with <Link
                            href="https://docsbot.ai?utm_source=buffer&utm_medium=referral&utm_campaign=ChatWP"
                            className="underline"
                          >DocsBot AI</Link>!
                  </p>
                  <p className="mx-auto mt-5 max-w-7xl text-xl text-gray-500">
                    Are you tired of answering the same questions over and over again? Do you wish
                    you had a way to automate your customer support and give your team more time to
                    focus on other tasks? With DocsBot, you can do just that. We make it simple to
                    build ChatGPT-powered bots that are trained with your content and documentation,
                    so they can provide instant answers to your customers' most detailed questions.
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute top-1 left-1 h-5 w-5 text-cyan-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <Signup />

            <Faq />

            {/* Testimonial section */}
            <div className="mb-32 bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <div className="relative lg:-my-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                  />
                  <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full">
                      <Image
                        className="object-cover lg:h-full lg:w-full relative"
                        src={avatar}
                        alt="Aaron Edwards avatar"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                    <blockquote>
                      <div>
                        <p className="mt-6 text-2xl font-medium text-white">
                          Built by Aaron Edwards, founder of{' '}
                          <Link href="http://imajinn.ai" className="underline">
                            Imajinn AI
                          </Link>
                          ,{' '}
                          <Link
                            href="https://infiniteuploads.com"
                            className="underline"
                          >
                            Infinite Uploads
                          </Link>
                          , and{' '}
                          <Link href="https://web3wp.com" className="underline">
                            Web3 WP
                          </Link>
                          . Chief Technology Officer at{' '}
                          <Link
                            href="https://wpmudev.com"
                            className="underline"
                          >
                            WPMU DEV
                          </Link>
                          . "I just love building cool things with and for
                          WordPress, AI, and Web3."
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-cyan-100">
                          <Link
                            href="https://twitter.com/UglyRobotDev"
                            className="flex items-center"
                          >
                            <svg
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="mr-1 h-6 w-6"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            @UglyRobotDev
                          </Link>
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="mx-auto max-w-md px-6 pt-12 sm:max-w-7xl lg:px-8 lg:pt-16">
              <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 text-left xl:col-span-1">
                  <Image
                    className="mr-auto h-10 w-auto"
                    src={imajinnDarkLogo}
                    alt="ChatWP Logo"
                  />
                  <p className="text-base text-gray-500">
                    An <Link href="https://uglyrobot.com">UglyRobot</Link>{' '}
                    experiment
                  </p>
                  <div className="flex space-x-6">
                    {footerNavigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Products
                      </h3>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.solutions.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-base font-medium text-gray-900">
                        Tools
                      </h3>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.tools.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-base font-medium text-gray-900">
                        More Tools
                      </h3>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.tools2.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-base font-medium text-gray-900">
                        Legal
                      </h3>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.legal.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-200 py-8">
                <p className="text-base text-gray-400 xl:text-center">
                  &copy; 2023 UglyRobot, LLC. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
