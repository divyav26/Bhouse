import React from 'react'

const Pagination = () => {
  return (
    <div>
      <div className="">
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <p
              className="inline-flex size-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </li>

          <li>
            <p
              className="block size-10 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
            >
              1
            </p>
          </li>

          <li className="block size-10 rounded border-indigo-500 bg-indigo-500 text-center leading-10 text-white">
            2
          </li>

          <li>
            <p
              className="block size-10 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
            >
              3
            </p>
          </li>

          <li>
            <p
              className="block size-10 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
            >
              4
            </p>
          </li>

          <li>
            <p
              className="inline-flex size-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </li>
        </ol>
                </div>
    </div>
  )
}

export default Pagination
