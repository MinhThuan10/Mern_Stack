import { Button } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButttonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textbutton,
    bordered,
    backgroundColorInput = '#fff',
    backgroundcolorbutton = 'rgb(13, 92, 182)',
    colorButton = '#fff'
  } = props;
  return (
    <div style={{ display: 'flex' }}>
      <InputComponent
        size={size}   
        placeholder={placeholder}
        bordered={bordered}
        {...props}
        style={{
          backgroundColor: backgroundColorInput,
          border: bordered ? '1px solid rgba(0, 0, 0, 0.2)' : 'none',
          borderRadius: '4px',
          padding: '6px',
          fontSize: '14px',
          color: '#333',
          boxShadow: bordered ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          background: backgroundcolorbutton,
          border: bordered ? '1px solid rgba(0, 0, 0, 0.2)' : 'none',
          borderRadius: '4px',
          padding: '6px',
          fontSize: '14px',
          color: colorButton,
          boxShadow: bordered ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        }}
        icon={<SearchOutlined style={{ fontSize: '14px', marginRight: '4px' }} />}
        textbutton={textbutton}
        styleTextButton={{ fontSize: '14px', color: colorButton }}
        {...props}
      />
    </div>
  );
};

export default ButttonInputSearch;