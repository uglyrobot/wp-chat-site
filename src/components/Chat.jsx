import { useEffect, useState } from 'react'
import {
  ArrowPathIcon,
  ChatBubbleLeftEllipsisIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { remark } from 'remark'
import html from 'remark-html'
import Alert from '@/components/Alert'

// These were generated using ChatGPT
const sillyPhrases = [
  'The WordPress wonder is brewing, what brilliance will it be showing?',
  'Plugins, themes, and codes galore, what will the WordPress AI explore?',
  'The WordPress wheel is turning, what exciting answers will it be yearning?',
  'A symphony of digital delights, what WordPress answers will come to sight?',
  'The WordPress engine is revving, what creative solutions will it be giving?',
  'The power of open-source on display, what WordPress wonders will come our way?',
  'The WordPress genius is at work, what ideas will its circuits perk?',
  'The WordPress magic is in the air, what exciting insights will it share?',
  'The WordPress brain is ticking, what website-building knowledge will it be kicking?',
  'The WordPress master has the floor, what captivating answers will it have in store?',
  'The WordPress mind is alive, what stunning answers will it arrive?',
  'The WordPress spirit is bold, what innovative ideas will it unfold?',
  'The WordPress voice is clear, what captivating answers will it hold dear?',
  'The WordPress pulse is strong, what insightful answers will it prolong?',
  'The WordPress soul is bright, what brilliant answers will it ignite?',
  'The WordPress heart beats true, what magnificent answers will it accrue?',
]

const exampleQuestions = [
  'How do you list cron events with WP CLI? Show an example of the output.',
  'What are WordCamps and how do I find one near me?',
  'List the default WordPress blocks.',
  'Show me how to add a custom block to the WordPress block editor.',
  'How do I filter post content when it is saved? Show an example of the code.',
  'List the default WordPress user roles and their capabilities.',
  'Who is the founder of WordPress?',
]

export default function Chat() {
  const [question, setQuestion] = useState('')
  const [resultHtml, setResultHtml] = useState('')
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingPhrase, setLoadingPhrase] = useState(sillyPhrases[0])
  const [errorText, setErrorText] = useState(null)
  const [openAIKey, setOpenAIKey] = useState('')
  const [showKeyModal, setShowKeyModal] = useState(true)

  //save openAIKey to local storage
  useEffect(() => {
    localStorage.setItem('openAIKey', JSON.stringify(openAIKey))
  }, [openAIKey])

  //get key from local storage on load
  useEffect(() => {
    const key = JSON.parse(localStorage.getItem('openAIKey'))
    if (key) {
      setOpenAIKey(key)
    }
  }, [])

  //save key to local storage
  const saveKey = (e) => {
    e.preventDefault()
    setOpenAIKey(openAIKey)
    setShowKeyModal(false)
    setErrorText(null)
  }

  //if errorText is cleared, close key modal
  useEffect(() => {
    if (!errorText) {
      setShowKeyModal(false)
    }
  }, [errorText])

  //set random loading phrase
  useEffect(() => {
    //set random phrase on loading
    if (loading) {
      setLoadingPhrase(
        sillyPhrases[Math.floor(Math.random() * sillyPhrases.length)]
      )
    }
  }, [loading])

  //clear error text when question changes
  useEffect(() => {
    setErrorText(null)
  }, [question])

  // make api call to ask question
  const askQuestion = async () => {
    if (!question || question.length < 10) {
      setErrorText('Please enter a full question.')
      return
    }
    setLoading(true)
    setErrorText(null)
    setResultHtml('')
    setSources([])

    const data = { query: question, format: 'markdown' }
    if (openAIKey) {
      data.openai_api_key = openAIKey
    }

    //track ask event
    if ( window.bento ) {
        window.bento.track( 'ask', { question, customKey: Boolean(openAIKey) } )
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        const data = await response.json()
        //if trimmed answer is empty, show error
        if (data.error) {
          setErrorText(data.error)
          setLoading(false)
        } else if (!data.answer.trim()) {
          setErrorText('No answer found, please try again.')
          setLoading(false)
        } else {
          // Use remark to convert markdown into HTML string
          remark()
            .use(html)
            .process(data.answer)
            .then((html) => {
              setResultHtml(html.toString())
              setSources(data.sources)
              setLoading(false)
            })
        }
      } else {
        try {
          const data = await response.json()
          setErrorText(data.error || 'Something went wrong, please try again.')
          //if 403 due to openAI key, clear it
          if (response.status === 403) {
            setOpenAIKey('')
          }
          if (response.status === 429) {
            setShowKeyModal(true)
          }
        } catch (e) {
          setErrorText('Something went wrong, please try again.')
        }
        setLoading(false)
      }
    } catch (e) {
      console.warn(e)
      setErrorText('Something went wrong, please try again.')
      setLoading(false)
    }
  }

  return (
    <div id="ask" className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-600">Let's chat</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ask me about WordPress
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Ask me anything about WordPress and I'll do my best to answer! Be
            sure to check my sources as I might occassionally make things up!{' '}
            <Link href="#faq" className="underline">
              Questions?
            </Link>
          </p>
        </div>
        <div className="mt-12">
          <Alert title={errorText} type="warning">
            {showKeyModal && (
              <>
                <div className="mt-2 max-w-2xl text-left text-sm">
                  <p>
                    Sorry, but API costs add up quickly so we have to limit
                    requests per user. Enter your OpenAI API key to bypass our
                    daily limits. You can{' '}
                    <Link
                      target="_blank"
                      href="https://openai.com/api/"
                      className="underline"
                    >
                      create a free account
                    </Link>{' '}
                    to{' '}
                    <Link
                      target="_blank"
                      href="https://platform.openai.com/account/api-keys"
                      className="underline"
                    >
                      get your own key
                    </Link>
                    . Your key will only be stored locally and not saved or
                    logged by our servers.
                  </p>
                </div>
                <form
                  className="mt-5 sm:flex sm:items-center"
                  onSubmit={saveKey}
                >
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="openai_key" className="sr-only">
                      OpenAI API Key
                    </label>
                    <input
                      type="text"
                      name="openai_key"
                      id="openai_key"
                      value={openAIKey}
                      onChange={(e) => setOpenAIKey(e.target.value)}
                      required
                      className="block w-full rounded-md border-gray-500 px-4 py-2 text-black shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      placeholder="OpenAI API Key"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 font-bold text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                </form>
              </>
            )}
          </Alert>

          {loading ? (
            <>
              <div className="mt-6 flex justify-center">
                <div className="relative w-20">
                  <ChatBubbleLeftEllipsisIcon className="absolute m-6 h-8 w-8 animate-pulse text-teal-500" />
                  <div className="h-20 w-20 rounded-full border-2 border-teal-400"></div>
                  <div className="absolute left-0 top-0 h-20 w-20 animate-spin rounded-full border-t-4 border-cyan-600"></div>
                </div>
              </div>
              <blockquote
                className="mt-2 text-center text-sm text-cyan-800"
                title="AI-generated loading phrase"
              >
                "{loadingPhrase}"
              </blockquote>
            </>
          ) : (
            <form
              className="flex justify-center"
              onSubmit={(e) => {
                console.log('submit')
                askQuestion()
                e.preventDefault()
              }}
              disabled={loading}
            >
              <div className="mt-1 flex w-full rounded-md shadow-sm">
                <div className="relative flex w-full flex-grow items-stretch">
                  <input
                    type="text"
                    name="query"
                    id="query"
                    value={question}
                    maxLength={200}
                    minLength={10}
                    required
                    onChange={(e) => setQuestion(e.target.value)}
                    onClick={() => {
                      //highlight the text
                      document.getElementById('query').select()
                    }}
                    className="block w-full rounded-none rounded-l-md border-gray-300 pl-6 text-sm focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 sm:text-lg"
                    placeholder="What do you want to know about WordPress?"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4"
                    title="Random Question"
                    onClick={(e) => {
                      e.preventDefault()
                      //insert a random question
                      setQuestion(
                        exampleQuestions[
                          Math.floor(Math.random() * exampleQuestions.length)
                        ]
                      )
                    }}
                  >
                    <ArrowPathIcon className="h-6 w-6 text-gray-400 hover:rotate-6 hover:brightness-110 active:brightness-110" />
                  </button>
                </div>
                <button
                  type="submit"
                  className="shadow relative -ml-px inline-flex w-28 items-center justify-center space-x-2 rounded-r-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-sm font-bold text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-32 sm:text-lg"
                >
                  Ask
                </button>
              </div>
            </form>
          )}
        </div>

        {resultHtml && (
          <>
            <div className="relative mt-16 rounded-sm bg-white text-left shadow-sm sm:rounded-lg ">
              <div className="absolute -inset-6 flex h-12 items-center text-4xl font-extrabold tracking-tighter text-gray-800 opacity-25">
                <svg
                  className="mr-2 h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                Answer:
              </div>
              <div
                className="wpchat-code prose min-w-full p-4 sm:p-8"
                dangerouslySetInnerHTML={{ __html: resultHtml }}
              />
            </div>

            <div className="relative mt-16 pt-1">
              <div className="absolute -inset-6 flex h-12 items-center text-4xl font-extrabold tracking-tighter text-gray-800 opacity-25">
                Sources:
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {sources.map((source) => (
                  <div
                    key={source.url}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                  >
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                        <LinkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={source.url}
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-left text-sm font-medium text-gray-900">
                          {source.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
