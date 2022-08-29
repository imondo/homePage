import React from 'react';
import './AppCar.css';

function AppCar() {
    return <div className='app-car'>
        <div className='app-car-left'>
            <div className='app-logo'>
                <img src="https://imondo.cn/files/car_app_icons/car_logo.png" alt="logo"/>
                <h4>查车牌</h4>
            </div>
            <div className='intro'>一个查询车牌归属地、汽车品牌介绍、今日油价的工具 APP</div>
            <div className='intro-tips'>
                <span>反馈与帮助</span>
                mondo@imondo.cn</div>
        </div>
        <div className='app-car-right'>
            <img src="https://imondo.cn/files/car_app_icons/phone-car.png" alt="" />
        </div>
    </div>
}

export default AppCar;