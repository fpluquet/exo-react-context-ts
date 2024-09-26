import express from 'express'
import cors from "cors"

const app = express()
const port = 3005

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/login", (req, res) => {
  const body = req.body
  const username = body.username
  const password = body.password

  if (username === 'admin' && password === 'admin') {
    res.json({
      name: 'Administrateur', secrets: [
        "L'admin est un vrai dieu",
        "L'admin sent bon",
        "L'admin va sauver le monde"
      ]
    })
  } else if (username === 'emilien' && password === 'password') {
    res.json({
      name: 'Emilien BA3', secrets: [
        "Emilien ne sait pas faire de DAB",
        "Emilien peut aller plus vite que le prof pour coder",
        "Emilien n'aura pas son diplome s'il continue à coder plus vite que le prof"
      ]
    })
  } else {

    res.status(401).json({message: 'Unauthorized'})
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

