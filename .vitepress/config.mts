/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2023-08-22 11:34:10
 * @LastEditTime: 2023-09-02 21:53:30
 * @LastEditors: 安知鱼
 */
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "一个快速、强大的 javascript 数学库";
const ogImage = "../public/cover.png";
const ogTitle = "Mathm";
const ogUrl = "https://math.js.org";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mathm 官方文档",
  description: "一个快速、强大的 javascript 数学库",
  lang: "zh",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@anzhiyu" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bfb308357e73d7e9c856af04a77e822d";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
       `,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Github", link: "https://github.com/Scientifiction/mathm.git" }],

    sidebar: [
      {
        text: "快速上手",
        items: [
          { text: "安装Mathm包💻", link: "/initall" },
          {
            text: "虚数 I",
            collapsed: false,
            items: [
              { text: "整体介绍", link: "/page/I/abouti" },
              { text: "复数的计算", link: "/page/I/fun_i" },
            ],
          },
          {
            text: "行列式 Det",
            collapsed: false,
            items: [
              { text: "整体介绍", link: "/page/Det/aboutdet" },
              { text: "行列式的计算", link: "/page/Det/fun_det" },
            ],
          },
          {
            text: "矩阵 Matrix",
            collapsed: false,
            items: [
              { text: "整体介绍", link: "/page/Matrix/aboutmatrix" },
              { text: "矩阵的计算", link: "/page/Matrix/fun_matrix" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Scientifiction/mathm.git" }],

    algolia: {
      appId: "CITURDDECN",
      apiKey: "e5c83518b67da17a254574c31759596b",
      indexName: "anheyu",
      // searchParameters: {
      //   facetFilters: ["tags:en"],
      // },
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: "Copyright © 2023 AnZhiYu",
    },

    editLink: {
      pattern: "https://github.com/Scientifiction/mathm:path",
      text: "Edit this page on GitHub",
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
