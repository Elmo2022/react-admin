/* Footer 页面底部 */
import React from "react";
import { Layout } from "antd";
import "./index.less";

const { Footer } = Layout;

interface Props {
  className?: string;
}

export default function FooterCom(props: Props) {

var now = new Date();
// 获取当前的年份
var year = now.getFullYear();
// 获取当前月份，注意getMonth()返回的月份是从0开始的，所以1月是0，2月是1，以此类推
var month = now.getMonth() + 1;

// 获取当前的日期（日）
var day = now.getDate();
  return (
    <Footer className={`footer ${props.className}`}>
      ©Elmo {year+"/"+month+"/"+day}
    </Footer>
  );
}
