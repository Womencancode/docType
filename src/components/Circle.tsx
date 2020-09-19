import React from 'react'

type ColorProps = { bgColor: string }
export default function Circle({bgColor}: ColorProps) {
  return (
    <div style={{
        backgroundColor: bgColor,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        boxShadow: 
        `0 0 0 16px ${bgColor}, 0 1px 2px rgba(0,0,0,0.1)`
      }}>
      
    </div>
  )
}
