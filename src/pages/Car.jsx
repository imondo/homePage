import React from 'react';
import '../styles/Car.css'
const Car = () => (
    <section className="login-page">
    <section className="inner">
      <section className="main">
        <p className="method">
          微信扫码访问
        </p>
        <section className="inner invalid">
          <img src="https://imondo.cn/files/carapp.jpg" alt="二维码" />
        </section>
      </section>
      <section className="main">
        <p className="method">
          Android 移动端
          <a
            href="https://pan.baidu.com/s/1p7CLGqLRS-lVxHfyH-iknA"
            target="_blank"
            className="method-tips"
            >提取码：cars</a
          >
        </p>
        <section className="inner invalid">
          <img src="https://pic.imgdb.cn/item/62109c542ab3f51d9157b021.jpg" alt="二维码" />
        </section>
      </section>
      <img src="https://pic.imgdb.cn/item/62109c542ab3f51d9157b01d.png" alt="书桌" className="decoration" />
    </section>
  </section>
)

export default Car