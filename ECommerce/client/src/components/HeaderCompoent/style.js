import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: #ffffff;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Đường viền màu xám mờ */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Đổ bóng */
    overflow-x: hiden;
   
`
    
export const WrapperTextHeader = styled(Link)`
    font-size: 14px;
    color: rgb(0, 62, 161);
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    &:hover {
        font-size: 14px;
        color: rgba(0, 62, 161,0.86);
        font-weight: 600;
    }
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 14px;
    color: #fff;
    white-space: nowrap;
    color:rgb(128, 128, 137);
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`