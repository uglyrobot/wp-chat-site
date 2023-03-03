import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        setSubmitted(true)
        //redirect to link
        window.location.href =
          'https://app.bentonow.com/f/a72c79ffb06a248333be6e1de58f63cf/cool-tree-1274'
      })
      .catch((error) => {
        console.error('Error:', error)
        setSubmitted(false)
      })
  }

  return (
    <div id="signup" className="bg-white">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-teal-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-cyan-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-teal-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-cyan-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Join the Waitlist
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
                  We are launching DocsBot in a matter of days. Save your spot and be
                  the first to be notified. We&rsquo;ll be giving special
                  introductory pricing and features to our early users!
                </p>
              </div>
              {submitted ? (
                <div className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                  <div className="min-w-0 flex-1">
                    <p className="text-center text-2xl font-medium text-white">
                      Thanks for signing up! We'll be in touch soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
                  onSubmit={handleSubmit}
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="shadow block w-full rounded-md border border-cyan-600 bg-gradient-to-b from-teal-300 to-cyan-400 px-5  py-3 text-center text-base font-medium text-cyan-900 hover:bg-teal-200 hover:from-teal-200 hover:to-cyan-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              )}
              <div className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <Link
                  href="https://docsbot.ai"
                  className="mx-auto flex items-center text-2xl text-white hover:underline"
                >
                  <span>Find out more about DocsBot AI</span>
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
