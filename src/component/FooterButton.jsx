import React from 'react'

export const FooterButton = ({icon, name}) => {
  return (
    <>
    <div className="text-center">
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center justify-center">
          {icon}
          <span>{name}</span>
        </button>
      </div>
    </>
  )
}
