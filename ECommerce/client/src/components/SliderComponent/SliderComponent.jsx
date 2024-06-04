import { Image,Col, Row } from 'antd';
import React from 'react'
import { WrapperSliderStyle } from './style';

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImages.map((image, index) => {
                return (
                <div key={index}>
                    <Row>
                        <Col span={12} style={{ padding: "0 10px"}}>
                            <div>
                                <Image src={image} alt="slider" preview={false} width="100%" height="345px" style={{borderRadius: "10px"}}/>
                            </div>
                        </Col>
                        <Col span={12} style={{ padding: "0 10px"}}>
                            <div>
                                <Image src={arrImages[index >= arrImages.length - 1 ? 0 : index + 1]} alt="slider" preview={false} width="100%" height="345px" style={{borderRadius: "10px"}}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                );
            })}
        </WrapperSliderStyle>
    )
}

export default SliderComponent