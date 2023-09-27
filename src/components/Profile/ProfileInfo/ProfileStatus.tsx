import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}
class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode= () =>{
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode =() =>{
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <b>Status:</b> <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
};


// const ProfileStatusWithHooks = (props) => {
//     const [editMode, setEditMode] = React.useState(false);
//     const [status, setStatus] = React.useState(props.status);
//     React.useEffect(() => {
//         setStatus(props.status);
//     }, [props.status])
//     const activateEditMode = () => {
//         setEditMode(true);
//     }
//     const deactivateEditMode = () => {
//         setEditMode(false);
//     }
//     const onStatusChange = (e) => {
//         setStatus(e.currentTarget.value);
//         props.updateUserStatus(status);
//     }
//     return (
//         <div>
//             {!editMode &&
//                 <div>
//                     <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
//                 </div>
//             }
//             {editMode &&
//                 <div>
//                     <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
//                 </div>
//             }
//         </div>
//     );
// }




export default ProfileStatus;
