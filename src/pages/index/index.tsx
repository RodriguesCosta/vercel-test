import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

export const Home = (): JSX.Element => {
  return (
    <>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title>VERCEL TEST</Title>
        </Col>
        <Col span={4}></Col>
      </Row>

      <br />

      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <a
            href="https://vercel.com/?utm_source=vercel-test"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/powered-by-vercel.svg"
              width="175"
              alt="Powered by Vercel"
            />
          </a>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
};

export default Home;
