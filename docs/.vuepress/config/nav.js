module.exports = [
  // Nav 1
  {
    text: "Home",
    link: "/"
  },
  // Nav 2
  {
    text: "前端笔记",
    //ariaLabel: 'Language Menu',
    //link: "/note/",
    items:[{text: "JS学习笔记",link: "/fe-note/js-note/"},
           {text: "node.js学习笔记",link: "/fe-note/node-note/"},
           {text: "Vue学习笔记",link: "/fe-note/vue-note/"},
           {text: "前端工具集",link: "/fe-note/tools-note/"},
          ],
  },
  {
    text: "后端笔记",
    //ariaLabel: 'Language Menu',
    //link: "/note/",
    items:[{text: "Go学习笔记",link: "/be-note/go-note/"},
           {text: "Python学习笔记",link: "/be-note/python-note/"},
           {text: "Shell学习笔记",link: "/be-note/shell-note/"}
          ],
  },
  //Nav 3
  {
    text: "工具使用",
    link: "/tool/"
  },
  //Nav 4
  {
    text: "技术方案",
    link: "/tech/"
  },
  //Nav 5
  {
    text: "文档编写",
    link: "/doc/"
  },
];
