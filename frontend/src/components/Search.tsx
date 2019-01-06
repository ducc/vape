import * as React from "react";
import {SearchRequest} from "../protos/protos_pb";
import {SearchServiceClient} from "../protos/protos_grpc_web_pb";

export class Search extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(event) {
        this.setState({
            value: event.target.value,
            results: await this.search(event.target.value),
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        let n = 0;
        const results = this.state.results.map(e => (
            <a className={"list-group-item"} key={n++} href={"#"}>
                {e}
            </a>
        ));

        return (
            <form onSubmit={this.handleSubmit}>
                <div className={"form-group"}>
                    <input className={"form-control form-control-lg"} type={"text"} placeholder={"Search for liquids, kids, mods, tanks etc."} value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div className={"text-left"}>
                    <div className={"list-group"}>
                        {results}
                    </div>
                </div>
            </form>
        );
    }

    search(query: string): Promise<Array<string>> {
        if (query.length == 0) {
            return Promise.resolve([]);
        }

        /*return new Promise((resolve, reject) => {*/
            const request = new SearchRequest();
            request.setQuery(query);

            const service = new SearchServiceClient("http://127.0.0.1:9001", null, null);
            service.search(request, {}, (err, response) => {
                console.log("ye finished");
                if (err) {
                    console.log("err");
                    console.log(err);
                    // reject(err);
                } else {
                    console.log("res");
                    console.log(response);
                    // resolve(response);
                }
            });
        /*});*/

        return Promise.resolve(["hello", "no"]);
    }
}
