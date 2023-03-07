import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    text-align: center;

    && img{
        width: 250px;

    }
`

export const LoginHeader = (props) => {
    return (
        <Container>
            <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.414/static/media/trello-logo-blue.f7627b3a.svg" alt="trello" />
        </Container>
    )
    
}