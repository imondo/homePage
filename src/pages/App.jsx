import React from 'react'
import Highlight from '../components/Highlight.jsx'
import { Link } from 'react-router-dom'
import '../styles/App.css'

function App() {

  return (
    <>
      <main className='home'>
        <h1>
          <span className='inline-block hell'>👋</span><span className='inline-block'>Hello,</span>
          <p className='name'>I am Mondo.</p>
        </h1>
        <div className='line'>主流<Highlight icon={['javascript']} highlightClass="moegi">前端</Highlight>开发工程师，就职于<Highlight icon={['didi']} highlightClass="orange">不出名公司</Highlight>。</div>
        <p className='line'>也做一些小小的 Node 开发。</p>
        <a href="https://github.com/imondo" target="_blank">GitHub</a>
        <a href="https://notes.imondo.cn/posts">Blog</a>
        <a href="https://imondo.github.io/docs" target="_blank">Books</a>
        <Link to="/outs">Works</Link>
      </main>
      <footer>
        <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备18003522号-1</a>
      </footer>
    </>
  )
}

export default App
