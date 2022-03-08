import {React,useState,useEffect} from 'react';


const useFetch = (url) => {
  const [error,setError] = useState(null)
  const [title,setTitle] = useState(null)
  const [content,setContent] = useState(null)
  const [slugs,setSlug] = useState(null)
  const slugarr = []
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await fetch(url)
        const json = await res.json()
        const jsondata = await json['data']
        setTitle(jsondata.attributes.title)
        setContent(jsondata.attributes.content)
      }
      catch{

      }
     

    }
  fetchData()
  },[url])
  return {title,content,error}
}
export default useFetch
