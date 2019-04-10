import React,{Component} from 'react'
import CommentItem from '../comment-item/comment-item'
import './comment-list.css'
class CommentList extends Component{
    constructor(prop){
        super(prop);
        this.state={
            comments:this.props.comments,

        }
    }
    render(){
    //    const comments=this.state.comments;
       const {deleteComment,comments} =this.props;
       const display=comments.length===0?'block':'none';
        return(
            <div>
                <p className='comment-response' >评论回复：</p>
               <h3 style={{display}}>暂无评论，请点击左侧添加评论！</h3>
               <ul>
                   {
                       comments.map((c,index)=>
                           <CommentItem  comment={c} key={index}  index={index} deleteComment={deleteComment}/>
                       )
                   }
               </ul>
            </div>
        )
    }
}


export default CommentList