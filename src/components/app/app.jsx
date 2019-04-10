import React,{Component} from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/commrnt-list'
import './app.css'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:[
                {username:'tom',content:'my name is tom'},
                {username:'jack',content:'my name is jack'}
            ]
        }
    }
    // 添加评论
    addComment=(comment)=>{
        const comments=this.state.comments;
        comments.unshift(comment);
        this.setState({comments})
        console.log(this.state.comments)
    }
    // 删除评论
    deleteComment=(index)=>{
        const comments=this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
    }
    render(){
        return(
            <div className='comment-box'>
                <header>
                    <h2>请发表你的评论！---prop</h2>
                </header>
                <div className='container'>
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        )
    }
}


export default App