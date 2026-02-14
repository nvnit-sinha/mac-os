import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"

const MacWindow = ({
  children,
  width = 600,
  height = 400,
  windowName,
  setWindowsState
}) => {

  const [isMaximized, setIsMaximized] = useState(false)

  const [size, setSize] = useState({
    width,
    height
  })

  const [position, setPosition] = useState({
    x: 200,
    y: 50
  })

  const handleMaximize = () => {
    if (!isMaximized) {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      setPosition({ x: 0, y: 0 })
    } else {
      setSize({
        width,
        height
      })
      setPosition({ x: 200, y: 50 })
    }

    setIsMaximized(prev => !prev)
  }

  return (
    <Rnd
      size={size}
      position={position}
      bounds="window"
      dragHandleClassName="nav"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y })
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight
        })
        setPosition(pos)
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowsState(state => ({
                  ...state,
                  [windowName]: false
                }))
              }
              className="dot red"
            />
            <div
              onClick={() =>
                setWindowsState(state => ({
                  ...state,
                  [windowName]: false
                }))
              }
              className="dot yellow"
            />
            <div
              onClick={handleMaximize}
              className="dot green"
            />
          </div>
          <div className="title">
            <p>nvnitsinha - zsh</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow
