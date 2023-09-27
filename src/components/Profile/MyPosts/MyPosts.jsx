import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControl';
const maxLength10 = maxLengthCreator(5);
const MyPosts = React.memo(props => {
    let onPostChange = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onPostChange}/>
            </div>
            <div className={s.posts}>
                {props.posts.map((post, index) => <Post key={index} message={post.message} likeCount={post.likesCount} />)}
            </div>
        </div>
    );
});
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength10]} component={Textarea} name={"newPostText"} />
            <div className={s.btn}>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({
    form:'addNewPost',
})(AddPostForm)


export default MyPosts;
