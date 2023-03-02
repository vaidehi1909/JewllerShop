import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const colProps = {
  lg: 8,
  md: 8,
  sm: 12,
  xs: 12,
  xl: 6,
  className: "antd-col-text-align",
};

const AppFooter = () => {
  return (
    <Footer className="antd-footer-bottom">
      <Row gutter={16}>
        <Col {...colProps}>
          <h4> About Us</h4>
          <p>
            We have the largest selection of sparkling diamond and gemstone
            necklace, rings, bracelets and earrings.
          </p>
        </Col>
        <Col {...colProps}>
          <h4> Customer Service</h4>
          <h6>Shipping</h6>
          <h6> Returns</h6>
        </Col>
        <Col {...colProps}>
          <h4> Contact Us</h4>
          <h6>
            <a href="mailto:modivaidehi1909@gmail.com">Email Us</a>
          </h6>
          <h6> 9137676625</h6>
        </Col>

        <Col {...colProps}>
          <h4>Follow Us</h4>
          <span>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookOutlined className="antd-icons-margin" />
            </a>
            <a
              href="https://www.linkedin.com/in/modivaidehi1909"
              target="_blank"
            >
              <LinkedinOutlined className="antd-icons-margin" />
            </a>
            <a href="https://github.com/vaidehi1909" target="_blank">
              <GithubOutlined className="antd-icons-margin" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <TwitterOutlined className="antd-icons-margin" />
            </a>
          </span>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
