import React from 'react'
import { Rate } from 'antd';
import { BgContainer, CommentImage, CSSText, FSContainer, GiveScoreContainer, GiveScoreText, PrimaLogo, RateCommentBox, RateCommieBtn, RateContainer, RateText, TextP } from './Feedbacksurvey.styles'

export default function Feedbacksurvey() {
    return (
        <>
            <BgContainer>
                <FSContainer>
                    <PrimaLogo/>
                    <CSSText>แบบสำรวจความพึงพอใจของลูกค้า</CSSText>
                    <GiveScoreContainer>
                        <GiveScoreText>
                            <CommentImage/>
                        </GiveScoreText>
                        <RateContainer>
                            <RateText>คุณภาพสินค้า</RateText>
                            <Rate defaultValue={0} />
                            <RateText>ความคุ้มค่า</RateText>
                            <Rate defaultValue={0} />
                            <RateText>ความรวดเร็วในการจัดส่ง</RateText>
                            <Rate defaultValue={0} />
                            <RateText>บริการหลังการขาย</RateText>
                            <Rate defaultValue={0} />
                        </RateContainer>
                    </GiveScoreContainer>
                    <TextP>ความคิดเห็น</TextP>
                    <RateCommentBox placeholder="แสดงความคิดเห็น..."/>
                    <RateCommieBtn>ส่งแบบสำรวจ</RateCommieBtn>
                </FSContainer>        
            </BgContainer>
        </>
    )
}
