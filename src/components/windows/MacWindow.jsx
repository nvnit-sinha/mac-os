import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"
const MacWindow = ({children, width="40vw", height="50vh", windowName, setWindowsState}) => {
  const [isMaximized, setisMaximized] = useState(false)

  const [size, setsize] = useState({
    width,
    height
  })

  const [position, setPosition] = useState({
    x: 200,
    y: 50
  });

  const handleMaximize = () => {
    if(!isMaximized){
      setsize({
        width: "100vw",
        height: "100vh"
      })
      setPosition({x: 0,y: 0})
    } else{
      setsize({
        width,
        height
      })
      setPosition({x: 200,y: 50})
    }
    setisMaximized(!isMaximized);
  }


  return (
    <div>
      <Rnd
        size={size}
        position={position}
        onDragStop={(e, d) => {
          setPosition({ x: d.x, y: d.y });
      }}
        onResizeStop={(e, direction, ref, delta, pos) => {
          setSize({
            width: ref.style.width,
            height: ref.style.height
          });
          setPosition(pos);
      }}
      dragHandleClassName="nav"
      bounds="window"
      disableDragging={isMaximized}   
      enableResizing={!isMaximized} 
>

        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div 
                    onClick={() => {setWindowsState(state => ({...state, [windowName]:false}))}}
                    className="dot red"></div>
                    <div 
                    onClick={() => {setWindowsState(state => ({...state, [windowName]:false}))}}
                    className="dot yellow"></div>
                    <div 
                    onClick={handleMaximize}
                    className="dot green"></div>
                </div>
                <div className="title"> <p>nvnitsinha - zsh</p> </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
      </Rnd>
    </div>
  )
}

export default MacWindow
