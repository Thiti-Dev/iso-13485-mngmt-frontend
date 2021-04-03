import React from 'react'
import { NavTop, LoginBtn, RegisterBtn, RegisZone, LogoPrima } from './navbar.styles'


export default function Navbar() {
    return (
        <NavTop>
            <LogoPrima/>
            <RegisZone>
                <RegisterBtn> สมัครสมาชิก </RegisterBtn>
                <LoginBtn> เข้าสู่ระบบ </LoginBtn>
            </RegisZone>
        </NavTop>
    )
}
