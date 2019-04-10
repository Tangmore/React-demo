import React,{Component} from 'react'
import './comment-item.css'
class CommentItem extends Component{

    hanleDelete=()=>{
        const {comment,deleteComment,index}=this.props;
        window.confirm('确认删除'+comment.username+'的评论');
        deleteComment(index);
    }
    render(){
        const {comment} =this.props;
        return(
            <li>
                <button onClick={this.hanleDelete}>删除</button>
                <p className='comment-user'>{comment.username}:</p>
                <p className='comment-content'>{comment.content}</p>
            </li>
        )
    }
}


export default CommentItem