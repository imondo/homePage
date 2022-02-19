import React from 'react'
import '../styles/Projects.css'
import MINE_PROJECTS from '../config/list'

const Projects = props => {
    return (
        <article className='projects'>
            <h1>Works</h1>
            <div className="meta-line">
                <a className="meta-back" href="/">Back</a>
            </div>
            <ul>
                {
                    MINE_PROJECTS.map(v => {
                        return (
                            <div className="post-item" key={v.title}>
                                <h3>
                                    <a className="post-item-title" href={v.url} target="_blank">{v.title}</a>
                                </h3>
                                <p className="post-item-desc">
                                    {v.rich}
                                    <a className="post-item-more" href={v.url} target="_blank">↗</a>
                                </p>
                            </div>
                        )
                    })
                }
            </ul>
        </article>
    )
}

export default Projects