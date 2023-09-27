import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer.ts';
import MyPosts from './MyPosts';
import {selectNewPostText, selectPost} from "../../../redux/profile-selectors";

const mapStateToProps = (state) => {
    return {
        posts: selectPost(state),
        newPostText: selectNewPostText(state),
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
export default MyPostsContainer;
