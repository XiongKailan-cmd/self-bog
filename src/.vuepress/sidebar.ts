import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "配置",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Flutter笔记",
      icon: "book",
      prefix: "flutter/",
      children: "structure",
    },
    {
      text: "ThreeJs",
      icon: "book",
      prefix: "threejs/",
      children: "structure",
    },
    "intro",
  ],
});
