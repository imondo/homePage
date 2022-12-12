import React from 'react'
import Highlight from '../components/Highlight.jsx'
import { Link } from 'react-router-dom'
import '../styles/App.css'

function App() {

  return (
    <main className='home'>
      <h1><span>Hello,</span>我是 Mondo.</h1>
      <div className='line'>主流<Highlight icon={['javascript']} highlightClass="moegi">前端</Highlight>开发工程师，就职于<Highlight icon={['didi']} highlightClass="orange">不出名公司</Highlight>。</div>
      <p className='line'>也做一些小小的 Node 开发。</p>
      <a href="https://github.com/imondo" target="_blank">Github</a>
      <a href="https://notes.imondo.cn/posts">Blog</a>
      <a href="https://imondo.github.io/docs" target="_blank">小册</a>
      <Link to="/outs">Works</Link>
    </main>
  )
}

export default App
