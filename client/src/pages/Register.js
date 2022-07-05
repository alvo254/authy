import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
     linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
     url("https://www.investigo.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNk40Qmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9b8088b8ca7747465c2b046df4ddef04836f0f8e/shutterstock_746441521.jpg")
     center;
     background-size: cover
     ;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 1.25rem;
    background-color: white;
    
`;

const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1.25rem 0.625rem 0 0;
    padding: 0.625rem;
    border:none;
    border-bottom: 1px solid lightgray;
    outline: none
`;

const Agreement = styled.span`
    font-size: 0.75rem;
    margin: 1.25rem 0;
`;

const Button = styled.button`
     width: 40%;
     background-color: #4d7b99;
     color: white;
     padding: 1rem 1.25rem;
     cursor: pointer;
     border: none;
`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input  name="fName" placeholder="First Name" />
                <Input  name="lName" placeholder="Last Name" />
                <Input  name="username" placeholder="Username" />
                <Input  name="email" placeholder="Email" />
                <Input  name="password" placeholder="Password" />
                <Input  name="confPassword" placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal 
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button >CREATE</Button>
                {/* {error && <span style={{color: "red", marginTop:"0.625rem"}}>Password does not match!</span>} */}
            </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
