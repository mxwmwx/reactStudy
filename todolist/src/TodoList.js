import React,{Component,Fragment} from 'react'
//fragment块级占位符，可以替代react的返回div实现f12调试时代码的简洁
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleValueChange.bind(this)}></input>
                    <button onClick = {this.handleClick.bind(this)}>提交</button>
                    </div>
                <ul>
                    {this.state.list.map((item,index)=>{
                        return (
                        <li onClick = {this.handleClickDelete.bind(this,index)} key={index}>{item}</li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
    handleValueChange(e){
        //console.log(e.target.value)
        this.setState({
            inputValue : e.target.value
        })
    }
    handleClick(e){
        const list = [...this.state.list,this.state.inputValue]
        this.setState({
            inputValue:'',
            list:list
        })
    }
    handleClickDelete(index){
       const list = [...this.state.list]
       list.splice(index,1)
       this.setState({
           inputValue:'',
           list:list
       })
    }
}
export default TodoList