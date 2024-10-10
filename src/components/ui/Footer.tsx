import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Link } = Typography;

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer style={{ backgroundColor: "#001529", color: "#fff", padding: "20px 50px" }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Text style={{ color: "#fff" }}>
            © {currentYear} ReserveIt. All rights reserved.
          </Text>
        </Col>
        <Col>
          <Space size="large">
            <Link href="https://facebook.com" target="_blank" style={{ color: "#fff" }}>
              <FacebookOutlined style={{ fontSize: "20px" }} />
            </Link>
            <Link href="https://twitter.com" target="_blank" style={{ color: "#fff" }}>
              <TwitterOutlined style={{ fontSize: "20px" }} />
            </Link>
            <Link href="https://instagram.com" target="_blank" style={{ color: "#fff" }}>
              <InstagramOutlined style={{ fontSize: "20px" }} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" style={{ color: "#fff" }}>
              <LinkedinOutlined style={{ fontSize: "20px" }} />
            </Link>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterSection;
