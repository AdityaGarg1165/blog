import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useFetch from './fetchData'
import styles from '../../styles/Home.module.css'


function Blog() {
  const router = useRouter()
  const {blog} = router.query
  const [title,settitle] = useState(null)
  const [content,setcontent] = useState(null)
  const [id,setid] = useState(null)
  //@ts-ignore
  useEffect(async ()=>{
    if (router.isReady){
      const title = await fetch(`http://localhost:1337/api/blogs/?filters[slug][$eq]=${blog}`)
      const json = await title.json()
      const data = json.data
      data.map((item)=>{
        settitle(item.attributes.title)
        setcontent(item.attributes.content)
        setid(item.id)
      })
      
    }

  })
  
  
  
  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <pre className={styles.paragraph}>{content}</pre>
    </div>
    
  )
}

export default Blog
