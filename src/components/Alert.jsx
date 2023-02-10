import { useState, useEffect, useRef } from 'react'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { InformationCircleIcon } from '@heroicons/react/20/solid'

export const noop = (f) => f;

export default function Alert({ title, type, children, onClose = noop }) {
  const [show, setShow] = useState(true)
  const alertRef = useRef(null);

  let icon = null
  let color = null
  if (type === 'error') {
    icon = <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
    color = 'red'
  } else if (type === 'warning') {
    icon = (
      <ExclamationTriangleIcon
        className="h-5 w-5 text-yellow-400"
        aria-hidden="true"
      />
    )
    color = 'yellow'
  } else if (type === 'success') {
    icon = (
      <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
    )
    color = 'green'
  } else {
    icon = (
      <InformationCircleIcon
        className="h-5 w-5 text-blue-400"
        aria-hidden="true"
      />
    )
    color = 'blue'
  }

  //show whenever params change
  useEffect(() => {
    setShow(true)
    const ref = alertRef.current
    return () => {
      if (ref && type === 'error') {
        ref.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [title, children, type])
  

  if (!show || !title) return null

  return (
    <div
      className={
        'my-4 rounded-md p-4 ' +
        (type === 'error'
          ? 'bg-red-50'
          : type === 'warning'
          ? 'bg-yellow-50'
          : type === 'success'
          ? 'bg-green-50'
          : 'bg-blue-50')
      }
      ref={alertRef}
    >
      <div className="flex">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3 text-left">
          <h3
            className={
              'text-md font-semibold ' +
              (type === 'error'
                ? 'text-red-800'
                : type === 'warning'
                ? 'text-yellow-800'
                : type === 'success'
                ? 'text-green-800'
                : 'text-blue-800')
            }
          >
            {title}
          </h3>
          {children && (
            <div
              className={
                'mt-2 text-sm overflow-hidden ' +
                (type === 'error'
                  ? 'text-red-700'
                  : type === 'warning'
                  ? 'text-yellow-700'
                  : type === 'success'
                  ? 'text-green-700'
                  : 'text-blue-700')
              }
            >
              {children}
            </div>
          )}
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={() => {
                setShow(false)
                onClose()
              }}
              className={
                'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2' +
                (type === 'error'
                  ? 'bg-red-50 text-red-500 hover:bg-red-100  focus:ring-red-600 focus:ring-offset-red-50'
                  : type === 'warning'
                  ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50'
                  : type === 'success'
                  ? 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50'
                  : 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50')
              }
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
