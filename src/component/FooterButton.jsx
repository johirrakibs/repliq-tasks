import React from 'react'

export const FooterButton = ({icon, name}) => {
  return (
    <>
    <div className="">
        <button className="bg-red-500 ">
          {icon}
          <span>{name}</span>
        </button>
      </div>
    </>
  )
}
