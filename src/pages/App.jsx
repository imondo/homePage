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
        <div className='line'><Highlight icon={['javascript']} highlightClass="moegi">Frontend</Highlight> Developer，Working at a<Highlight icon={['didi']} highlightClass="orange">lesser-known</Highlight> company.</div>
        <p className='line'>Keep coding, Keep life.</p>
        <p className='line'>Exploring a small side project.</p>
        <a href="https://github.com/imondo" target="_blank">GitHub</a>
        <a href="https://notes.imondo.cn/posts">Blog</a>
        <a href="https://imondo.github.io/docs" target="_blank">Books</a>
        <Link to="/outs">SideProjects</Link>
      </main>
      <footer>
        <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备18003522号-1</a>
      </footer>
    </>
  )
}

export default App
