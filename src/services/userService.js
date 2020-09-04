import base_service from "./base_service";
import { GET, POST } from "../Config/URLs";

export default new class extends base_service {
    register = ( params ) =>  this.submitRequestWithPromise(POST, '/register', params)

    login = ( params ) => this.submitRequestWithPromise(POST, '/login', params)
    logout = () => this.submitRequestWithPromise(POST, '/logout')
    me = () => this.submitRequestWithPromise(GET, '/user')
}
