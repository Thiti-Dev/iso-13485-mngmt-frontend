import React, { useState } from 'react'
import Navbar from '../../common/navbar'
import { ItemModal, ThHeaderUniq, TdContent, BgContainer, SaleActivityText, SalesContainer, Table, TbodyContent, TheadHeader, ThHeader, TrContent, TrHeader, TdContentUniq, BodyWrapper, SalesInnerHeaderContainer, HeaderTopRightZone, AddSalesBtn, AddactivityModal } from './popr.styles'

export default function Sales() {
    const [visible, setVisible] = useState(false);
    const [tdcontainervisible, tdcontainersetVisible] = useState(false);
    return (
        <>
            <Navbar/>
            <BgContainer/>
            <SalesContainer>
                <SalesInnerHeaderContainer>
                    <SaleActivityText>กิจกรรมการขาย</SaleActivityText>
                    <HeaderTopRightZone>
                        <AddSalesBtn> etc,. </AddSalesBtn>
                        <AddSalesBtn> etc,. </AddSalesBtn>
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
