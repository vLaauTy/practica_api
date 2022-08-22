import React from 'react'
import { Button, Container } from '../../GlobalStyles'
import { Heading, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine,ImgWrapper,Img } from './InfoSection.elements'
import {Link} from 'react-router-dom'


const InfoSection = ({lightBg,imgStart,lightTopLine,lightText,lightTextDesc,buttonLabel,description,headLine,topLine,primary,img,start,alt, }) => {
  return (
    <div id='home'>
        <InfoSec lightBg={lightBg}>
    <Container>
        <InfoRow imgStart={imgStart}>
            <InfoColumn>
                <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <Link to='sign-up'>
                        <Button big fontBig primary={primary}>
                            {buttonLabel}
                        </Button>
                    </Link>
                </TextWrapper>
            </InfoColumn>
            <InfoColumn >
                <ImgWrapper start={start}>
                    <Img src={img} alt={alt}/>
                </ImgWrapper>
            </InfoColumn>
        </InfoRow>
    </Container>
        </InfoSec>
        </div>
    
  )
}

export default InfoSection