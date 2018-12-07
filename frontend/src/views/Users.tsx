import * as React from "react";
import {RouteProps} from "react-router-dom";

export class Users extends React.Component<RouteProps> {
    public render() {
        return (
            <div>all users.. {this.props.match.params.id}</div>
        )
    }
}
