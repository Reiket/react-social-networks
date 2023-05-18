import { useParams } from "react-router-dom";
export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        debugger;
        //let location = useLocation();
        //let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ params }}
            />
        );
    }
    return ComponentWithRouterProp;
}