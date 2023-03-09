/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Where is ChatWP getting it's information?",
    answer:
      'We built a webcrawler to scrape all official documentation from the WordPress.org website. This includes the "Learn WordPress" tutorials and lesson plans, all articles on the "Documentation" pages (wordpress.org/documentation/), and the entire "Developer" site (developer.wordpress.org) with code references, handbooks, and commands. It is also allowed to use general knowledge about WordPress learned from the Internet with restrictions.',
  },
  {
    question: "Does it work with languages other than English?",
    answer: "Unlike traditional search, this bot inherits GPT's understanding of any language found on the Internet. So even though almost all documentation indexed was in English, you can ask it to respond in your own language. Asking your questions in another language may not be as effective right now, as it will be less likely to be able to find the best context from our embeddings index. Give it a try, we would love to learn how to improve this!"
  },
  {
    question: 'How does ChatWP work?',
    answer:
      "It's a bit technical, but here is a brief overview. We use OpenAI's GPT-3.5 embedding and completion APIs, as well as a vector database to store our index. All scraped documentation is cleaned up and divided into smaller chunks and labeled by source. We then use the GPT embedding API to generate a vector representation of each chunk and store it in our vector db index. When a user asks a question, we convert it to an embedding, and use the vector database to find the closest matches to the user's query using semantic search. Then we then take the most relevant chunks, included them as context along with the original question, and use the GPT completion API to generate a response in markdown format that we then convert to HTML and display to the user.",
  },
  {
    question: 'How much does it cost to run?',
    answer:
      'It took about 24hrs and $5 to build the vector index. Queries cost about $0.02-$0.04 each depending on how long the context, query, and response is. We also have to pay for the site and API servers to handle requests. We are covering the costs for this at the moment as a service to the community.',
  },
  {
    question: "Are you stealing WordPress contributor's content?",
    answer:
      "Hopefully it's not seen this way. We've created a unique way to help WordPress users and developers find the documentation they need, free of charge (or at cost). A really unique feature of ChatWP is that we link to the sources for the answer as much as possible to give them credit, similar to a traditional search engine.",
  },
  {
    question: "How old is the information and how often is the data updated?",
    answer: "We built our initial index in Feb 2023. Currently refreshing the index is a manual process, but if this tool proves useful we will look into automatic periodic indexing."
  },
  {
    question: "Do you have an API I can use?",
    answer: "Not currently for the full chat (internal API is limited), but you can use our embeddings API to build your own tools on top of our index. Contact us for details. Try DocsBot API for creating custom chatbots for your own documentation."
  },
  {
    question: "What are your privacy protections?",
    answer: "IPs are stored hashed for ratelimiting purposes. We do store the queries and responses in our database to be able to privide and improve on the service. Queries and responses pass through OpenAI and are subject to their privacy policy as well. If you enter your own OpenAI API key it is only stored in your browser. We use Bento (https://bentonow.com/) for usage tracking and waitlist management.",
  },
]

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
