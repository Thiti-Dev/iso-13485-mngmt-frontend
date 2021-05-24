import React from 'react'
import { Menu, message, Button} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Navbar from '../../common/navbar'
import { MenuIcon, MidMainContainer, BgContainer, DashboardMainContainer, DateP, DetailP, DivBox, MenuDivButton, MenuDivInner, MenuLeft, MidBody, NotificationContainer, NotificationListContainer, Notih1, TitleP, MenuButtonText, MidTopContainer, GoTaskBtn, TopPicBox, NameText, SelectDropDown} from './dashboard.styles'

export default function Landing() {

    function handleMenuClick() {
        message.info('Click on menu item.');
        console.log('click');
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );

    return (
        <>
        
            <Navbar/>
            <BgContainer/>
            <DashboardMainContainer>
                
                <MenuLeft>
                    <MenuDivInner>
                        <MenuDivButton><MenuIcon icon_name='home'></MenuIcon><MenuButtonText>Home</MenuButtonText></MenuDivButton>
                        <MenuDivButton><MenuIcon icon_name='bar'></MenuIcon><MenuButtonText>My Tasks</MenuButtonText></MenuDivButton>
                        <MenuDivButton><MenuIcon icon_name='chat'></MenuIcon><MenuButtonText>Threads</MenuButtonText></MenuDivButton>
                        <MenuDivButton><MenuIcon icon_name='group'></MenuIcon><MenuButtonText>Members</MenuButtonText></MenuDivButton>
                        <MenuDivButton><MenuIcon icon_name='settings'></MenuIcon><MenuButtonText>Settings</MenuButtonText></MenuDivButton>
                    </MenuDivInner>
                </MenuLeft>
                
                {/* /////////  Pink BG ZONE //////////// */}
                <MidBody>
                    <MidTopContainer>
                        <TopPicBox></TopPicBox>
                        <NameText>Thiti Mahawannakit</NameText>
                        <SelectDropDown overlay={menu}>
                            <Button>
                                เลือกอะไรสักอย่าง <DownOutlined />
                            </Button>
                        </SelectDropDown>
                    </MidTopContainer>
                    <MidMainContainer>Hello</MidMainContainer>
                    <GoTaskBtn>
                        ไปที่หน้างาน
                    </GoTaskBtn>
                </MidBody>
                {/* ///////////////////////////////////////// */}

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