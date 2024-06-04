import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, styleButton, styleTextButton,onClick, textbutton, disabled, ...rests }) => {
  return (
    <Button
      style={{
        ...styleButton,
        background: disabled ? '#ccc' : styleButton.background,
        cursor:disabled ? 'not-allowed' : styleButton.cursor
      }}
      onClick={disabled ? ()=>{}: onClick}
      size={size}
      {...rests}
    >
      <span style={styleTextButton}>{textbutton}</span>
    </Button>
  )
}

export default ButtonComponent