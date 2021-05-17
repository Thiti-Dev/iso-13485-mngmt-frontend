import React, { useState } from 'react'
import Navbar from '../../common/navbar'
import { ItemModal, ThHeaderUniq, TdContent, BgContainer, SaleActivityText, SalesContainer, Table, TbodyContent, TheadHeader, ThHeader, TrContent, TrHeader, TdContentUniq, BodyWrapper, SalesInnerHeaderContainer, HeaderTopRightZone, AddSalesBtn, AddactivityModal, NoteDiv, NoteInnerContainer, NoteInnerTextP } from './calibration.styles'

export default function Sales() {
    const [visible, setVisible] = useState(false);
    const [tdcontainervisible, tdcontainersetVisible] = useState(false);
    return (
        <>
            <Navbar/>
            <BgContainer/>
            <SalesContainer>
                <SalesInnerHeaderContainer>
                    <SaleActivityText>รายการซ่อมบํารุง</SaleActivityText>
                    <HeaderTopRightZone>
                        <AddSalesBtn> etc,. </AddSalesBtn>
                        <AddSalesBtn> etc,. </AddSalesBtn>
                        <AddSalesBtn onClick={() => setVisible(true)}>เพิ่มรายการซ่อม</AddSalesBtn>
                    </HeaderTopRightZone>
                </SalesInnerHeaderContainer>

                <AddactivityModal
                    title="เพิ่ม"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    okText={"ยืนยัน"}
                    cancelText={"ยกเลิก"}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </AddactivityModal>
            
                
                {/* TableHeader */}
                
                <ItemModal
                    title="รายละเอียด"
                    centered
                    visible={tdcontainervisible}
                    onCancel={() => tdcontainersetVisible(false)}
                    width={1000}
                    cancelText={"ปิด"}
                    footer={null}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </ItemModal>

                <NoteDiv>
                    <NoteInnerContainer>
                        รายละเอียดการซ่อมบำรุง
                        <NoteInnerTextP>1. การตรวจสอบการเข้าซ่อมบำรุง...</NoteInnerTextP>
                        <NoteInnerTextP>2. ขึ้นตอนการตรวจสอบสามารถ...</NoteInnerTextP>
                        <NoteInnerTextP>3. หลังจากซ่อมบำรุง...</NoteInnerTextP>
                    </NoteInnerContainer>
                    <NoteInnerContainer>
                        ** หมายเหตุ
                        <NoteInnerTextP>1. การตรวจสอบการเข้าซ่อมบำรุง...</NoteInnerTextP>
                        <NoteInnerTextP>2. ขึ้นตอนการตรวจสอบสามารถ...</NoteInnerTextP>
                        <NoteInnerTextP>3. หลังจากซ่อมบำรุง...</NoteInnerTextP>
                    </NoteInnerContainer>
                </NoteDiv>
            
                    <Table>
                        {/* Header */}
                        <TheadHeader>
                            <TrHeader>
                                <ThHeaderUniq width={110}>ลำดับ</ThHeaderUniq>
                                <ThHeader width={200}>เครื่องจักร</ThHeader>
                                <ThHeader width={300}>รหัสเครื่องจักร (S/N)</ThHeader>
                                <ThHeader width={150}>สถานี</ThHeader>
                                <ThHeader width={250}>ผู้รับผิดชอบ</ThHeader>
                                <ThHeader width={300}>วิธีซ่อมบำรุง</ThHeader>
                                <ThHeader width={200}>วันที่</ThHeader>
                            </TrHeader>
                        </TheadHeader>

                        {/* Content */}
                        <BodyWrapper>
                            <TbodyContent>
                                    {[...Array(6)].map((_,index)=>{
                                        return (
                                            <TrContent onClick={() => tdcontainersetVisible(true)}>
                                                <TdContentUniq width={110}>{index+1}</TdContentUniq>
                                                <TdContent width={200}>หมวกสมาร์ท</TdContent>
                                                <TdContent width={300}>BK0207442087</TdContent>
                                                <TdContent width={150}>Zone A</TdContent>
                                                <TdContent width={250}>Thiti Mahawannakit</TdContent>
                                                <TdContent width={300}>1. ใส่เข้าที่ด้านหน้าของ...</TdContent>
                                                <TdContent width={200}>20/12/2020</TdContent>
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
