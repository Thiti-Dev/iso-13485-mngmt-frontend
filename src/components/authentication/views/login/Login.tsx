import React from 'react'
import Navbar from '../../../common/navbar'
import { BgContainer, InputValue, LoginBtn, LoginContainer, LoginText, TextP } from './login.styles'

export default function Login() {
    return (
        <>
            <Navbar/>
            <BgContainer/>
            <LoginContainer>
                <LoginText>ลงชื่อเข้าใช้</LoginText>
                <TextP fontSize={24}>ไอดี</TextP>
                <InputValue></InputValue>
                <TextP fontSize={24}>รหัสผ่าน</TextP>
                <InputValue></InputValue>
                <TextP fontSize={18}>ไอดี คือที่อยู่อีเมลที่คุณใช้ยืนยันตัวตนกับบริษัทแล้วเพื่อใช้ เข้าสู่ระบบ</TextP>
                <LoginBtn>ลงชื่อเข้าใช้</LoginBtn>
            </LoginContainer>
        </>
    )
}