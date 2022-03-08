// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    let title = await fetch("http://localhost:1337/api/blogs")
    const json = await title.json()
    res.status(200).json(json)
    
}
  