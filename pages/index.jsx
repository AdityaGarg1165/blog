import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect,useState } from 'react'
export default function Home() {
  let [jsondata,setdat] = useState(null)
  //@ts-ignore
  useEffect(async ()=>{
    const title = await fetch("https://adchat.herokuapp.com/api/blogs")
    let res = await title.json()
    setdat(res['data'])
  },[])
  return (
    <div>
      <div>
        <h1 className={styles.name}>&lt;Crazy Choder/&gt;</h1>
          {jsondata && jsondata.map((post)=>(
            <Link href={"/blogpost/" + post.attributes.slug} key={post.attributes.slug}>
            <div className={styles.titlecontainer} key={post.attributes.slug}>
              <h1 className={styles.title} >{post.attributes.title}</h1>
              <p className={styles.desc} >{post.attributes.desc}</p>
            </div>
            </Link>
          ))}
        
      </div>
    </div>
    
  )
}
