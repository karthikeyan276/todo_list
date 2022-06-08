import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react'
import "./todoapp.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';



export default class Todo_andorid extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            count: 0,
            products: [], total: 0,
            task: "",

            reload: false


        }
    }
    validateForm = (e) => {
        e.preventDefault();

        let datas = JSON.parse(localStorage.getItem("crm")) || []

        datas.push({ task: this.state.task })
        localStorage.setItem("crm", JSON.stringify(datas));
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }

    }
    pending = (x) => {
        let a = [];

        a.push({ task: x.task })

        localStorage.setItem("crmpen", JSON.stringify(a))

        let b = [];

        b.push({ task: x.task })

        localStorage.setItem("removcrm", JSON.stringify(b))

        let c = JSON.parse(localStorage.getItem("crmcom"))

        let index1 = c.findIndex((x) => {

            return b.some((y) => {

                return x.task == y.task

            })

        })

        c.splice(index1, 1)

        localStorage.setItem("crmcom", JSON.stringify(c))

        let d = JSON.parse(localStorage.getItem("crm")) || []

        let e = JSON.parse(localStorage.getItem("crmpen"))

        let f = [...d, ...e]

        localStorage.setItem("crm", JSON.stringify(f))

        this.setState({ reload: true })

        if (this.state.reload == true) {

            this.componentDidUpdate()

        }
    }
    importand = (x) => {
        let a = [];
        a.push({ task: x.task })
        localStorage.setItem("onecrm", JSON.stringify(a))
        let b = [];
        b.push({ task: x.task })
        localStorage.setItem("remov", JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("crm"))
        let find = c.findIndex((x) => {
            return b.some((y) => {
                return x.task == y.task
            })
        })
        c.splice(find, 1)
        localStorage.setItem("crm", JSON.stringify(c))
        let d = JSON.parse(localStorage.getItem("importantcrm")) || []
        let e = JSON.parse(localStorage.getItem("onecrm"))
        let f = [...d, ...e]
        localStorage.setItem("importantcrm", JSON.stringify(f))
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }

    }
    clear = (x) => {
        let a = []
        a.push({ task: x.task })

        localStorage.setItem("twocrm", JSON.stringify(a))

        let b = [];

        b.push({ task: x.task })

        localStorage.setItem("remov", JSON.stringify(b))

        let c = JSON.parse(localStorage.getItem("importantcrm"))

        let index1 = c.findIndex((x) => {

            return b.some((y) => {

                return x.task == y.task

            })

        })

        c.splice(index1, 1)

        localStorage.setItem("importantcrm", JSON.stringify(c))

        let d = JSON.parse(localStorage.getItem("crm")) || []

        let e = JSON.parse(localStorage.getItem("twocrm"))

        let f = [...d, ...e]

        localStorage.setItem("crm", JSON.stringify(f))
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }

    }
    remov = (x) => {
        let a = [];
        a.push({ task: x.task })
        localStorage.setItem("three", JSON.stringify(a))

        let c = JSON.parse(localStorage.getItem("crm"))
        let index1 = a.findIndex((x) => {
            return c.some((y) => {
                return x.task == y.task
            })
        })
        c.splice(index1, 1)


        localStorage.setItem("crm", JSON.stringify(c))
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }
    }


    finish = (x) => {

        let a = JSON.parse(localStorage.getItem("crmcom")) || []
        a.push({ task: x.task })
        localStorage.setItem("crmcom", JSON.stringify(a))
        let b = [];
        b.push({ task: x.task })
        localStorage.setItem("remove", JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("crm"))
        let indes1 = c.findIndex((x) => {
            return b.some((y) => {
                return x.task == y.task
            })
        })
        c.splice(indes1, 1)
        localStorage.setItem("crm", JSON.stringify(c))

        // let b=[];
        // b.push({task:x.task});
        // localStorage.setItem("removefrom",JSON.stringify(b))

        // let index1=a.findIndex((x)=>{
        //     return b.some((y)=>{
        //         return x.task==y.task
        //     })
        // })
        // a.splice(index1,1)


        // let datas = JSON.parse(localStorage.getItem("Andorid")) || []

        // datas.push({ task: this.state.task })
        // localStorage.setItem("Android", JSON.stringify(datas));
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }



    }




    render() {
        let Jean = JSON.parse(localStorage.getItem("crm")) || []
        let remove = JSON.parse(localStorage.getItem("crmcom")) || []
        let mark = JSON.parse(localStorage.getItem("importantcrm")) || []

        return (
            <Box sx={{mt:10}} >

<h2>Todo List</h2>
                <TableContainer   >
                    <Table>
                        <TableHead>
                            {
                                Jean.map((x) => {
                                    return <>
                                        <TableRow sx={{ border: 1, background: "lightgray" }} >
                                            <TableCell sx={{ border: 1 }} align='center'>
                                                {x.task}
                                            </TableCell>
                                            <TableCell sx={{ border: 1 }}>{<Button className="delete" style={{ marginTop: "10px" }} onClick={() => this.finish(x)}><CheckIcon /></Button>}</TableCell>
                                            <TableCell sx={{ border: 1 }}>{<Button onClick={() => this.importand(x)}> <StarIcon /> </Button>}</TableCell>
                                            <TableCell sx={{ border: 1 }}>{<Button onClick={() => this.remov(x)}> <DeleteRoundedIcon sx={{ color: "red" }} /></Button>}</TableCell>
                                        </TableRow>
                                    </>
                                })
                            }
                        </TableHead>
                    </Table>

                </TableContainer>



                <Table sx={{  height: 10 }}>
                    <TableHead >
                        <h1>Completed</h1>
                        {
                            remove.map((x) => {
                                return <>
                                    <TableRow sx={{ background: "#efebe9" }}>
                                        <TableCell sx={{ border: 1, width: 10 }} align='center'>
                                            {x.task}
                                        </TableCell >
                                        <TableCell sx={{ border: 1, height: 10 }}>{<Button style={{ height: "20px", width: "50px", Top: "60px" }} onClick={() => this.pending(x)}><MinimizeIcon /></Button>}</TableCell>
                                        {/* <TableCell>{ <Button onClick={()=>this.remov(x)}> -</Button>}</TableCell> */}
                                    </TableRow><br />
                                </>
                            })
                        }
                    </TableHead>
                </Table>



                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <h1 style={{ color: "red" }}>Importent</h1>
                            {
                                mark.map((x) => {
                                    return <>
                                        <TableRow sx={{ background: "#9e9e9e" }}>
                                            <TableCell sx={{ border: 1 }} align='center'>
                                                {x.task}
                                            </TableCell >
                                            <TableCell sx={{ border: 1 }}>{<TableCell >{<Button style={{ height: "20px", width: "50px", Top: "60px" }} onClick={() => this.clear(x)}><MinimizeIcon /></Button>}</TableCell>
                                            }</TableCell>
                                            {/* <TableCell>{ <Button onClick={()=>this.remov(x)}> -</Button>}</TableCell> */}
                                        </TableRow><br />
                                    </>
                                })
                            }
                        </TableHead>
                    </Table>

                </TableContainer>




                <form onSubmit={this.validateForm}>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ border: 1, background: "#e3f2fd" }} >  {<input type="task" style={{ width: "800px", background: "#e3f2fd", border: "none", color: "black", height: "30px" }} placeholder="Add Task"
                                        onChange={e => this.setState({ task: e.target.value })} />}</TableCell>
                                </TableRow>
                            </TableHead>

                        </Table>
                    </TableContainer>
                    <div style={{ position: "fixed", top: "90%", background: "lightblue" }}>





                    </div>
                </form>




            </Box>
        )
    }
}
