import FormWrap from "../components/FormWrap";
import Container from "../components/container";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return ( 
        <Container>
            <FormWrap>
                <RegisterForm/>
            </FormWrap>
        </Container>
     );
}
 
export default Register;