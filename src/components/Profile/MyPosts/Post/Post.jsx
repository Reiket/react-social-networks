import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            {props.message}
            <div>
                <span>Like: {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;
