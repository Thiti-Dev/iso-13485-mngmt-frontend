import React from 'react'
import Navbar from '../../../common/navbar'
import { ThHeaderUniq, TdContent, BgContainer, SaleActivityText, SalesContainer, Table, TbodyContent, TheadHeader, ThHeader, TrContent, TrHeader, TdContentUniq, BodyWrapper } from './sales.styles'

export default function Sales() {
    return (
        <>
            <Navbar/>
            <BgContainer/>
            <SalesContainer>
                <SaleActivityText>กิจกรรมการขาย</SaleActivityText>
                
                {/* TableHeader */}
                
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
                                            <TrContent>
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
