import Form from 'components/Form';
import Header from 'components/Header';
import List from 'components/List';
import Cappadocia from 'img/Cappadocia.jpg';
import styled from 'styled-components';
import '../App.css';

function Home() {
  return (
    <>
      <StSection />
      <StLayout>
        <Header />
        <Form />
        <List />
      </StLayout>
    </>
  );
}

export default Home;

const StSection = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(185, 98, 239, 0.8),
      rgba(114, 166, 250, 0.8)
    ),
    url(${Cappadocia});
  background-size: cover;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  position: relative;
  top: -230px;
  background: none;
  flex-direction: column;
  align-items: center;
`;
