import { Avatar, Card, Popover } from "antd";
import classes from "./App.module.css";
import road from "./assets/road.png";
import children from "./assets/children.png";
import independence from "./assets/independence.png";
import { Link, DownloadSimple } from "@phosphor-icons/react";

function App() {
  return (
    <div className={classes.container}>
      <Card
        className={classes.card}
        cover={<img alt="example" src={children} />}
        actions={[
          <Popover style={{ width: 500 }} trigger="hover">
            <Link
              size={24}
              onClick={() => {
                window.open(
                  "https://mp.weixin.qq.com/s/p3rG-wJaV5IOke0lh7Tr4Q"
                );
              }}
            />
          </Popover>,
          <DownloadSimple
            size={24}
            onClick={() => {
              window.open(
                "https://qingshanasd.cn/assets/pdf/%E5%88%9D%E8%AF%86%E7%A5%9E%E7%BB%8F%E5%A4%9A%E6%A0%B7%E6%80%A7%E6%8C%87%E5%8D%97.pdf"
              );
            }}
          />,
        ]}
      >
        <Card.Meta
          title="初识神经多样性指南"
          description="带你走进8亿NS(神经多样性)的世界——23年9月发布"
        />
      </Card>
      <Card
        className={classes.card}
        cover={<img alt="example" src={road} />}
        actions={[
          <Link
            size={24}
            onClick={() => {
              window.open("https://mp.weixin.qq.com/s/Q_0e2vrahjBncjukI1enUw");
            }}
          />,
          <DownloadSimple
            size={24}
            onClick={() => {
              window.open(
                "https://qingshanasd.cn/assets/pdf/%E7%8B%AC%E7%AB%8B%E7%94%9F%E6%B4%BB%E8%83%BD%E5%8A%9B%E6%B8%85%E5%8D%95.pdf"
              );
            }}
          />,
        ]}
      >
        <Card.Meta
          title="独立生活能力指南"
          description="独立生活能力清单电子书 Checklist——23年7月发布"
        />
      </Card>

      <Card
        className={classes.card}
        cover={<img alt="example" src={independence} />}
        actions={[
          <Popover
            style={{ width: 500 }}
            title="请查看《感官运动》专题"
            trigger="hover"
          >
            <Link
              size={24}
              onClick={() => {
                window.open(
                  "https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ==&hid=1&sn=f3f557bb16f4781bf487fe58efa0c15f&scene=1&devicetype=Windows+11+x64&version=6309062f&lang=zh_CN&nettype=WIFI&ascene=0&session_us=gh_0c09375fe977&fontScale=100&uin=&key="
                );
              }}
            />
          </Popover>,
          <DownloadSimple
            size={24}
            onClick={() => {
              window.open(
                "https://qingshanasd.cn/assets/pdf/%E4%B8%8EDCD%E5%85%B1%E5%90%8C%E7%94%9F%E6%B4%BB.pdf"
              );
            }}
          />,
        ]}
      >
        <Card.Meta
          title="成年DCD人士生活指南"
          description="与发育协调性障碍共同生活——21年9月发布"
        />
      </Card>
    </div>
  );
}

export default App;
