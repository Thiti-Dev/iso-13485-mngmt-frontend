import React from 'react'
import Navbar from '../../common/navbar'
import { BgContainer, DashboardMainContainer, DateP, DetailP, DivBox, MenuLeft, MidBody, NotificationContainer, NotificationListContainer, Notih1, TitleP} from './dashboard.styles'

export default function Landing() {
    return (
        <>
            <Navbar/>
            <BgContainer/>
            <DashboardMainContainer>
                
                <MenuLeft/>
                
                <MidBody/>
                
                <NotificationContainer>
                    <Notih1>การแจ้งเตือน</Notih1>
                    <NotificationListContainer>
                        <DivBox>
                            <DateP>April 18, 2021</DateP>
                            <TitleP>Your bank is almost full</TitleP>
                            <DetailP>Check out our social channels or Discord to find out what's coming in April!</DetailP>
                        </DivBox>
                        <DivBox>
                            <DateP>April 18, 2021</DateP>
                            <TitleP>Your bank is almost full</TitleP>
                            <DetailP>Check out our social channels or Discord to find out what's coming in April!</DetailP>
                        </DivBox>
                        <DivBox>
                            <DateP>April 18, 2021</DateP>
                            <TitleP>Your bank is almost full</TitleP>
                            <DetailP>Check out our social channels or Discord to find out what's coming in April!</DetailP>
                        </DivBox>
                        <DivBox>
                            <DateP>April 18, 2021</DateP>
                            <TitleP>Your bank is almost full</TitleP>
                            <DetailP>Check out our social channels or Discord to find out what's coming in April!</DetailP>
                        </DivBox>
                        <DivBox>
                            <DateP>April 18, 2021</DateP>
                            <TitleP>Your bank is almost full</TitleP>
                            <DetailP>Check out our social channels or Discord to find out what's coming in April!</DetailP>
                        </DivBox>
                        <DivBox>
                            <DateP>April 18, 2021</DateP>
                            <TitleP>Your bank is almost full</TitleP>
                            <DetailP>Check out our social channels or Discord to find out what's coming in April!</DetailP>
                        </DivBox>
                    </NotificationListContainer>
                </NotificationContainer>
            </DashboardMainContainer>
        </>
    )
}