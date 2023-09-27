import s from './Post.module.css';

const Post = ({message, likeCount}) => {
    return (
        <div className={s.item}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            {message}
            <div>
                <span>Like: {likeCount}</span>
            </div>
        </div>
    );
}

export default Post;
