import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
     linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
     url("https://www.parallels.com/blogs/ras/app/uploads/2021/05/How-to-Fix-the-Windows-Virtual-Desktop-Black-Screen-on-Log-On-When-Using-FSLogix.jpg")
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0.625rem 0;
    padding: 0.625rem;
    outline:none;
`;



const Button = styled.button`
     width: 40%;
     background-color: #4d7b99;
     color: white;
     padding: 1rem 1.25rem;
     cursor: pointer;
     border: none;
     margin-bottom: 0.625rem;
     &:disabled{
       cursor: not-allowed;
       color: green;
     }
`;

const Link = styled.a`
  margin: 5px 0;  
  font-size: 12px;
  text-decoration: underline; 
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input
             placeholder="Username"
             name="username"
             
              />
            <Input
             placeholder="Password"
             type="password"
             
              />
            <Button >LOGIN</Button>
            
            <Link>DO NOT REMEMBER PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
  </Wrapper>
</Container>
  )
}

export default Login