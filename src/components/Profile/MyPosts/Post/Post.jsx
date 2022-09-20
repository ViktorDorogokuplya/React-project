import s from './Post.module.css';

const Post = (props) => {
    return (
        
          <div className={s.item}>
            <img className={s.img} src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="#" />
            {props.message}
            <div>
                <span>like</span>
                {props.likes}
            </div>
          </div>
          
    )
} 

export default Post;