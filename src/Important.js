import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { Component } from 'react'

import TextareaAutosize from '@mui/material/TextareaAutosize';
import { MinimizeOutlined } from '@mui/icons-material';

export default class Important extends Component {
    constructor(props){
        super(props);
        this.state={
          todos:[],
          count:0,
          products: [], total: 0,
          task:"",
          
          reload:false
          
    
        }
      }

      validateForm = (e) => {
        e.preventDefault();

        let datas = JSON.parse(localStorage.getItem("important")) || []

        datas.push({ task: this.state.task,current:this.props.list })
        localStorage.setItem("important", JSON.stringify(datas));
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

        b.push({ task: x.task,current:this.props.list  })

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
  render() {

    let mark = JSON.parse(localStorage.getItem("important"))||[]
    let Jean = JSON.parse(localStorage.getItem("current")) || []
        let remove = JSON.parse(localStorage.getItem("completed")) || []
       

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
    return (
      <div  style={{background:"#ffe4e9",height:"91vh"}} >

<h1 style={{color:"black", marginTop:"55px"}}>Importent</h1>
<TableContainer style={{background:"#ffe4e9"}}   component={Paper}>
<Table style={{background:"#ffe4e9"}} sx={{mt:9  }}>
    <TableHead>
        
        {
            importent.map((x)=>{
                return <>
                <TableRow sx={{background:"#ffe4e9"}}>
                    <TableCell style={{background:"#ffe4e9"}} sx={{border:1}} align='center'>
                        {x.task}
                    </TableCell >
                    <TableCell align='right' style={{background:"#ffe4e9"}} sx={{border:1}}>{   <TableCell align='center'>{ <Button   style={{height:"20px",width:"50px",Top:"60px"}} onClick={()=>this.clear(x)}><MinimizeOutlined/></Button> }</TableCell>
 }</TableCell>
 
                    {/* <TableCell>{ <Button onClick={()=>this.remov(x)}> -</Button>}</TableCell> */}
                </TableRow><br/>
                </>
            })
        }
    </TableHead>
</Table>

                </TableContainer>
                {/* <form onSubmit={this.validateForm} >

<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell style={{background:"#FF6461"}} sx={{ border: 1, background: "#e3f2fd" }} >  {<input type="task" style={{ width: "800px", background: "#FF6461", border: "none", color: "black", height: "30px" }} placeholder="Add Task"
                    onChange={e => this.setState({ task: e.target.value })} />}</TableCell>
            </TableRow>
        </TableHead>

    </Table>
</TableContainer>

</form> */}
      </div>
    )
  }
}
