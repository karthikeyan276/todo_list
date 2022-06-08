import React, { useState, useEffect } from 'react'
import { Button, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



function Todoapi({ }) {
  const [Users, fetchUser] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const [name, setName] = useState([])
  const [id, setId] = useState([])
  const [seachbyid, setSeacbyid] = useState('')
  const [todo, setTodo] = useState([])
  const[searchuse,setSearchuse]=useState([])

  console.log(seachbyid)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {

        fetchUser(res)
        setId(res)
        d1()
        d2()
        dd()
      })
  }, [])

  const dd = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((response) => {

        setTodo(response)
      })
  }
  const d1 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({

        title: "shjsdjksd",
        completed: false


      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
  }

  const d2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'PUT',
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((ress) => ress.json())
      .then((json) => console.log(json))
  }


  const d3 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "PATCH",
      body: JSON.stringify({

      })
    })
  }



  let completed = Users.filter((x) => x.completed == true);
  let pending = Users.filter((x) => x.completed == false)




  const clear = (e) => {
    e.preventDefault()

    let c = Users.filter(x => x.id == searchTerm)
    console.log(c)
    setName(c)
    console.log(searchTerm)
  }

  const serachid = (e) => {
    e.preventDefault()

    let listuser = Users.filter(x => x.userId == seachbyid)
    // console.log(seachbyid)
    setSearchuse(listuser)
    console.log(listuser)
  }


  return (
    <>

      <form >

        <input type="text" placeholder='search ' onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={clear}>Search</button><br />

      </form >

      <form >
        <input type="text" placeholder='search...' onChange={(event) => setSeacbyid(event.target.value)} />
        <button onClick={serachid}>Search</button>
      </form>

      {

        
      }

      <TableContainer sx={{ border: 1, mt: 3 }} component={Paper}>


        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
          <TableHead sx={{ border: 1 }} >
            <TableRow sx={{ border: 1 }} >

              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center">UserId</TableCell>
              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center">Id</TableCell>
              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center" >Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {searchuse.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >

                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.userId}</TableCell>
                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.id}</TableCell>
                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.title}</TableCell>

              </TableRow>

            ))}

          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer sx={{ border: 1, mt: 3 }} component={Paper}>


        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
          <TableHead sx={{ border: 1 }} >
            <TableRow sx={{ border: 1 }} >

              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center">UserId</TableCell>
              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center">Id</TableCell>
              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center" >Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {name.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >

                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.userId}</TableCell>
                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.id}</TableCell>
                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.title}</TableCell>

              </TableRow>

            ))}

          </TableBody>
        </Table>
      </TableContainer>

      <h1 align="center" style={{ color: "green" }}>Completed</h1>
      <TableContainer sx={{ border: 1, mt: 3 }} component={Paper}>


        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
          <TableHead sx={{ border: 1 }} >
            <TableRow sx={{ border: 1 }} >

              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center">UserId</TableCell>
              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center">Id</TableCell>
              <TableCell sx={{ border: 1, background: "#d8f7b5" }} align="center" >Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completed.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >

                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.userId}</TableCell>
                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.id}</TableCell>
                <TableCell sx={{ border: 1, background: "#f7e2b5" }} align="center">{row.title}</TableCell>

              </TableRow>

            ))}

          </TableBody>
        </Table>
      </TableContainer>


      <TableContainer component={Paper}>
        <h1 style={{ marginTop: "10px", color: "red" }} align="center">Pending</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell sx={{ border: 1, background: "#00ffff" }} align="center">UserId</TableCell>
              <TableCell sx={{ border: 1, background: "#00ffff" }} align="center">Id</TableCell>
              <TableCell sx={{ border: 1, background: "#00ffff" }} align="center" >Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {pending.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1, background: "#708090" } }}
              >

                <TableCell sx={{ border: 1, background: "#708090" }} align="center">{row.userId}</TableCell>
                <TableCell sx={{ border: 1, background: "#708090" }} align="center">{row.id}</TableCell>
                <TableCell sx={{ border: 1, background: "#708090" }} align="center" >{row.title}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )

}




export default Todoapi