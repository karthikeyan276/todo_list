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



export default class TodoDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            task: "",
            name:"",
            empty:"",
            reload: false


        }
    }
    validateForm = (e) => {
        e.preventDefault();

        let datas = JSON.parse(localStorage.getItem("Andorid")) || []

        datas.push({ task: this.state.task , current:this.props.list })
        localStorage.setItem("Andorid", JSON.stringify(datas));
        
        this.setState({ reload: true,name:"",current:this.props.list ,empty:new Date()})
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }
    }

    // click =()=>{
    //     let s = JSON.parse(localstorage.getItem("an"))||[]
    //     s.push({})
    // }
componentDidUpdate(){

}
    click=()=>{
        let s = JSON.parse(localStorage.getItem("hh"))||[]
        s.push({name:"karthi"})
        localStorage.setItem("hh",JSON.stringify(s))
    }
    pending = (x) => {
        let a = [];

        a.push({ task: x.task, current:this.props.list })

        localStorage.setItem("pending1", JSON.stringify(a))

        let b = [];

        b.push({ task: x.task,current:this.props.list })

        localStorage.setItem("removefromcompleted", JSON.stringify(b))

        let c = JSON.parse(localStorage.getItem("completed"))

        let index1 = c.findIndex((x) => {

            return b.some((y) => {

                return x.task == y.task

            })

        })

        c.splice(index1, 1)

        localStorage.setItem("completed", JSON.stringify(c))

        let d = JSON.parse(localStorage.getItem("Andorid")) || []

        let e = JSON.parse(localStorage.getItem("pending1"))

        let f = [...d, ...e]

        localStorage.setItem("Andorid", JSON.stringify(f))

        this.setState({ reload: true })

        if (this.state.reload == true) {

            this.componentDidUpdate()

        }
    }
    importand = (x) => {
        let a = [];
        a.push({ task: x.task, current:this.props.list })
        localStorage.setItem("one", JSON.stringify(a))
        let b = [];
        b.push({ task: x.task ,current:this.props.list })
        localStorage.setItem("remov", JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("Andorid"))
        let find = c.findIndex((x) => {
            return b.some((y) => {
                return x.task == y.task
            })
        })
        c.splice(find, 1)
        localStorage.setItem("Andorid", JSON.stringify(c))
        let d = JSON.parse(localStorage.getItem("important")) || []
        let e = JSON.parse(localStorage.getItem("one"))
        let f = [...d, ...e]
        localStorage.setItem("important", JSON.stringify(f))
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }

    }
    clear = (x) => {
        let a = []
        a.push({ task: x.task ,current:this.props.list})

        localStorage.setItem("two", JSON.stringify(a))

        let b = [];

        b.push({ task: x.task })

        localStorage.setItem("remov", JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("important"))
        let index1 = c.findIndex((x) => {

            return b.some((y) => {

                return x.task == y.task

            })

        })

        c.splice(index1, 1)

        localStorage.setItem("important", JSON.stringify(c))

        let d = JSON.parse(localStorage.getItem("Andorid")) || []

        let e = JSON.parse(localStorage.getItem("two"))

        let f = [...d, ...e]

        localStorage.setItem("Andorid", JSON.stringify(f))
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }

    }
    remov = (x) => {
        let a = [];
        a.push({ task: x.task, current:this.props.list })
        localStorage.setItem("three", JSON.stringify(a))

        let c = JSON.parse(localStorage.getItem("Andorid"))
        let index1 = a.findIndex((x) => {
            return c.some((y) => {
                return x.task == y.task
            })
        })
        c.splice(index1, 1)


        localStorage.setItem("Andorid", JSON.stringify(c))
        this.setState({ reload: true })
        if (this.state.reload == true) {
            this.componentDidUpdate()
        }
    }


    finish = (x) => {

        let a = JSON.parse(localStorage.getItem("completed")) || []
        a.push({ task: x.task , current:this.props.list})
        localStorage.setItem("completed", JSON.stringify(a))
        let b = [];
        b.push({ task: x.task })
        localStorage.setItem("remove", JSON.stringify(b))
        let c = JSON.parse(localStorage.getItem("Andorid"))
        let indes1 = c.findIndex((x) => {
            return b.some((y) => {
                return x.task == y.task
            })
        })
        c.splice(indes1, 1)
        localStorage.setItem("Andorid", JSON.stringify(c))

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
        let Jean = JSON.parse(localStorage.getItem("current")) || []
        let remove = JSON.parse(localStorage.getItem("completed")) || []
        let mark = JSON.parse(localStorage.getItem("important")) || []


        let qw = JSON.parse(localStorage.getItem("Andorid"))||[]

     
let andorid =  qw.filter((x)=>{
   return  Jean.some((d)=>{
        return x.current==d.name
    })
})

console.log(andorid)
let name = Jean.map((d)=>{
    return d.name
})
let importent = mark.filter((x)=>{

    return x.current==name 

})

let complete  = remove.filter((x)=>{
    return x.current==name
})


        return (
            <Box sx={{mt:8}} >

<center>
    <h1 style={{color:"white"}}>  {name} </h1> 

    </center>               

{/* <button onClick={()=>this.click()}>ss</button> */}

             
                <TableContainer   >
                    <Table style={{height:"10px"}} >
                        <TableHead >
                            {
                                andorid.map((x) => {
                                    return <>
                                        <TableRow sx={{ border: 2, background: "white",borderRadius:"20px" ,height:"60%"}} >
                                            <TableCell  align='center'>
                                                {x.task}
                                            </TableCell>
                                            <TableCell   align='right' >{<Button className="delete" style={{ marginTop: "10px" }} onClick={() => this.finish(x)}><CheckIcon /></Button>}
                                            {<Button onClick={() => this.importand(x)}> <StarIcon /> </Button>}
                                            {<Button onClick={() => this.remov(x)}> <DeleteRoundedIcon sx={{ color: "red" }} /></Button>}</TableCell>
                                        </TableRow><br/>
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
                            complete.map((x) => {
                                return <>
                                    <TableRow sx={{ background: "white" }}>
                                        <TableCell sx={{ width: 10 }} align='center'>
                                            {x.task}
                                        </TableCell >
                                        <TableCell sx={{  height: "30%" }}>{<Button style={{ height: "20px", width: "50px", Top: "60px" }} onClick={() => this.pending(x)}><MinimizeIcon /></Button>}</TableCell>
                                        {/* <TableCell>{ <Button onClick={()=>this.remov(x)}> -</Button>}</TableCell> */}
                                    </TableRow><br />
                                </>
                            })
                        }
                    </TableHead>
                </Table>



               

                               


                <form onSubmit={this.validateForm}>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{position:"fixed",height:"38px",borderRadius:"15px", top:"93%",width:"79%"}} sx={{  background: "lightgray" ,border:"none"}} >  {<input type="task" key={this.state.empty} style={{width:"100%",height:"20px",background:"lightgray",border:"none"}} placeholder="Add Task"
                                        onChange={e => this.setState({ task: e.target.value })} />}</TableCell>
                                </TableRow>
                            </TableHead>

                        </Table>
                    </TableContainer>
                    
                </form>




            </Box>
        )
    }
}
