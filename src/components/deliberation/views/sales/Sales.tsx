import React, { useState } from 'react'
import { Input, DatePicker } from 'antd';
import Navbar from '../../../common/navbar'
import { ListBtn2, ListBtn, ItemModal, ThHeaderUniq, TdContent, BgContainer, SaleActivityText, SalesContainer, Table, TbodyContent, TheadHeader, ThHeader, TrContent, TrHeader, TdContentUniq, BodyWrapper, SalesInnerHeaderContainer, HeaderTopRightZone, AddSalesBtn, AddactivityModal, ListText, InsideModalContainer, ListInputBox, ListModalFooter, ListContainer, ListImage, ListTextDetailContainer, ListSigleContainer, ListHeaderText, ListColonText, ListDetailText } from './sales.styles'

export default function Sales() {
    const [visible, setVisible] = useState(false);
    const [tdcontainervisible, tdcontainersetVisible] = useState(false);

    const { Search } = Input;

    return (
        <>
            <Navbar/>
            <BgContainer/>
            <SalesContainer>
                <SalesInnerHeaderContainer>
                    <SaleActivityText>กิจกรรมการขาย</SaleActivityText>
                    <HeaderTopRightZone>
                        <Search 
                            placeholder="ใส่คำที่ต้องการค้นหา..." 
                            //enterButton
                        />
                        <AddSalesBtn onClick={() => setVisible(true)}> เพิ่มรายการ </AddSalesBtn>
                    </HeaderTopRightZone>
                </SalesInnerHeaderContainer>

                <AddactivityModal
                    title="เพิ่มกิจกรรมการขายใหม่"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    okText={"ยืนยัน"}
                    cancelText={"ยกเลิก"}
                    okButtonProps={{ style: {background: "gray", border: "none"}}}
                    cancelButtonProps={{ style: {border: "none"} }}
                >
                    <InsideModalContainer><ListText>รหัสสินค้า</ListText><ListInputBox></ListInputBox></InsideModalContainer>
                    <InsideModalContainer><ListText>ซีเรียลนัมเบอร์ (S/N)</ListText><ListInputBox></ListInputBox></InsideModalContainer>
                    <InsideModalContainer><ListText>ลูกค้า</ListText><ListInputBox></ListInputBox></InsideModalContainer>
                    <InsideModalContainer><ListText>ราคาสินค้า</ListText><ListInputBox></ListInputBox></InsideModalContainer>
                    <InsideModalContainer><ListText>วันที่ขาย</ListText>    <DatePicker placeholder="กรุณาเลือกวัน"/>     </InsideModalContainer>
                </AddactivityModal>
            
                
                {/* TableHeader */}
                
                <ItemModal
                    title="รายละเอียดการขาย"
                    centered
                    closable={false}
                    visible={tdcontainervisible}
                    onCancel={() => tdcontainersetVisible(false)}
                    width={1000}
                    cancelText={"ปิด"}
                    footer={null}
                >

                    <ListContainer>
                        <ListImage></ListImage>
                        <ListTextDetailContainer>
                            <ListSigleContainer><ListHeaderText>สินค้า</ListHeaderText><ListColonText>:</ListColonText><ListDetailText>หมวกสมาร์ท</ListDetailText></ListSigleContainer>
                            <ListSigleContainer><ListHeaderText>ซีเรียลนัมเบอร์ (S/N)</ListHeaderText><ListColonText>:</ListColonText><ListDetailText>BK02074asdasasdasasd42087</ListDetailText></ListSigleContainer>
                            <ListSigleContainer><ListHeaderText>ลูกค้า</ListHeaderText><ListColonText>:</ListColonText><ListDetailText>Thiti Mahawannakit</ListDetailText></ListSigleContainer>
                            <ListSigleContainer><ListHeaderText>วันที่ขาย</ListHeaderText><ListColonText>:</ListColonText><ListDetailText>20/12/2020</ListDetailText></ListSigleContainer>
                            <ListSigleContainer><ListHeaderText>ราคา</ListHeaderText><ListColonText>:</ListColonText><ListDetailText>65,000</ListDetailText></ListSigleContainer>
                        </ListTextDetailContainer>
                       
                    </ListContainer>
                    

                    <ListModalFooter>
                        <ListBtn>ดูข้อเสนอแนะ</ListBtn>
                        <ListBtn2 onClick={() => tdcontainersetVisible(false)}>ออก</ListBtn2>
                    </ListModalFooter>
                    
                </ItemModal>
            
                    <Table>
                        {/* Header */}
                        <TheadHeader>
                            <TrHeader>
                                <ThHeaderUniq width={110}>ลำดับ</ThHeaderUniq>
                                <ThHeader width={330}>สินค้า</ThHeader>
                                <ThHeader width={500}>ซีเรียลนัมเบอร์ (S/N)</ThHeader>
                                <ThHeader width={230}>ลูกค้า</ThHeader>
                                <ThHeader width={250}>วันที่ขาย</ThHeader>
                                <ThHeader width={200}>ราคา</ThHeader>
                            </TrHeader>
                        </TheadHeader>

                        {/* Content */}
                        <BodyWrapper>
                            <TbodyContent>
                                    {[...Array(6)].map((_,index)=>{
                                        return (
                                            <TrContent onClick={() => tdcontainersetVisible(true)}>
                                                <TdContentUniq width={110}>{index+1}</TdContentUniq>
                                                <TdContent width={330}>หมวกสมาร์ท</TdContent>
                                                <TdContent width={500}>BK0207442087</TdContent>
                                                <TdContent width={230}>Thiti Mahawannakit</TdContent>
                                                <TdContent width={250}>20/12/2020</TdContent>
                                                <TdContent width={200}>65,000</TdContent>
                                            </TrContent>
                                        )
                                    })}
                            </TbodyContent>
                        </BodyWrapper>
                    </Table>
            </SalesContainer>
            
        </>
    )
}
