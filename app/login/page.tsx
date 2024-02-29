import { getCurrentUser } from "@/actions/getCurrentUser";
import FormWrap from "../components/FormWrap";
import Container from "../components/container";
import LoginForm from "./Login";;

const Register = async () => {
    const currentUser = await getCurrentUser()
    return ( 
        <Container>
            <FormWrap>
                <LoginForm  currentUser = {currentUser}/>
            </FormWrap>
        </Container>
     );
}
 
export default Register;