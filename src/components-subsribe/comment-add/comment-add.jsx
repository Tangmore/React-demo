import React,{Component} from 'react'
import './comment-add.css'
class CommentAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            content:''
        }
    }

    handlenameChange=(e)=>{
        const username=e.target.value;
        this.setState({username});    
        // e.target.value='';
    }    
    handlecommentChange=(e)=>{
        const content=e.target.value;
        this.setState({content})     
        // e.target.value='';
    }
    handleSubmit=()=>{
        if((!this.state.username)|| (!this.state.content)){
            return;
        }
        const comment=this.state;
        // console.log(comment)
        // 传递参数
        this.props.addComment(comment);
        this.setState({
            username:'',
            content:''
        })
    }
    render(){
        return(
            <div>
              <p>
                <input type='text' placeholder='请输入用户名' value={this.state.username} onChange={this.handlenameChange} className='input-user'/>
              </p>

              <p>
                <textarea placeholder='请输入评论内容' rows='6' value={this.state.content} onChange={this.handlecommentChange}></textarea>
              </p>

                <button className='comment-public' onClick={this.handleSubmit}>发表</button>
            </div>
        )
    }
}


export default CommentAdd