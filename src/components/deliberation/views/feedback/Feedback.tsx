import React from 'react'
import Navbar from '../../../common/navbar'
import { List, Avatar } from 'antd';
import { BodyWrapper, TbodyContent, TdContent, TdContentUniq,TrContent, BgContainer, FeedbackContainer, FeedbackText, MainFeedbackContainer, TableContainer, ThHeader, ThHeaderUniq, TopInnerContainer, TrHeader, FeedbackList } from '../feedback/feedback.styles'
import { TheadHeader } from '../feedback/feedback.styles'

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
];

export default function Feedback() {
    return (
        <div>
            <Navbar/>
            <BgContainer/>
            <FeedbackContainer>
                {/* Top Text and Button */}
                <TopInnerContainer>
                    <FeedbackText> ผลตอบรับ </FeedbackText>
                </TopInnerContainer>

                {/* Table Detail*/}
                <TableContainer>
                    <table>
                        <TheadHeader>
                            <TrHeader>
                                <ThHeaderUniq width={310}>ลูกค้า</ThHeaderUniq>
                                <ThHeader width={280}>ช่องทางติดต่อ</ThHeader>
                                <ThHeader width={230}>เบอร์ติดต่อภายใน</ThHeader>
                                <ThHeader width={300}>สินค้า</ThHeader>
                                <ThHeader width={500}>ซีเรียลนัมเบอร์ (S/N)</ThHeader>
                                
                                {/* <ThHeader > ลูกค้า </ThHeader>
                                <th> ช่องทางติดต่อ </th>
                                <th> เบอร์ติดต่อภายใน </th>
                                <th> สินค้า </th>
                                <th> ซีเรียลนัมเบอร์ (S/N) </th> */}
                            </TrHeader>
                        </TheadHeader>
                        <BodyWrapper>
                            <TbodyContent>
                                <TrContent>
                                    <TdContentUniq width={310}>Thiti Mahawannakit</TdContentUniq>
                                    <TdContent width={280}>-</TdContent>
                                    <TdContent width={230}>02-487-8822</TdContent>
                                    <TdContent width={300}>หมวกสมาร์ท</TdContent>
                                    <TdContent width={500}>BK0207442087</TdContent>
                                </TrContent>
                            </TbodyContent>
                        </BodyWrapper>
                    </table>
                </TableContainer>

                {/* Feedback form result*/}
                <MainFeedbackContainer>
                    <FeedbackList>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                            )}
                        />
                    </FeedbackList>
                </MainFeedbackContainer>
            </FeedbackContainer>
        </div>
    )
}

