# 用 Markdown 写第一篇笔记

这是一篇示例笔记，同时也是「笔记」功能的使用说明。你可以把它删掉，换成自己的内容。

## 笔记放在哪里

所有 Markdown 文件都放在 `notes/post/` 目录里：

```text
compiling-space/
├── notes/
│   ├── index.html      笔记列表页
│   ├── note.html       笔记详情页
│   ├── notes.json      笔记清单（标题、日期、摘要）
│   └── post/
│       └── first-note.md   你的 Markdown 笔记
├── assets/
└── styles.css
```

## 需要填写的元数据

正文之外，只需要在 `notes/notes.json` 里加一条记录：

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `slug` | 必填 | 网址里用的短名，只用小写字母、数字和连字符 |
| `title` | 必填 | 列表页和标签页显示的标题 |
| `date` | 必填 | 写作日期，格式 `YYYY-MM-DD`，列表按它从新到旧排序 |
| `summary` | 选填 | 列表页的摘要，一句话即可 |
| `file` | 必填 | Markdown 文件路径，相对于 `notes/` |

这篇示例的日期写的是它创建当天（2026-11-20），你新建笔记时按真实日期填写即可。

## 支持的写法

标题、**加粗**、*斜体*、`行内代码`、列表、引用、表格、代码块和链接都可以直接用。

1. 有序列表
2. 第二条
3. 第三条

> 引用块适合放结论或提醒。

```c
#include <stdio.h>

int main(void) {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("%d\n", sum);
    return 0;
}
```

图片用标准语法 `![说明](images/xxx.png)`，把图片放在 `notes/post/images/` 下，路径会自动按笔记所在目录解析：

```markdown
![运行效果](images/result.png)
```

## 发布一篇新笔记

1. 在 `notes/post/` 新建一个 `.md` 文件，例如 `notes/post/pointer-basics.md`；
2. 在 `notes/notes.json` 的 `posts` 数组里加一条记录，`file` 写成 `post/pointer-basics.md`；
3. 本地预览：在仓库根目录运行 `python -m http.server 8000`，打开 `http://localhost:8000/notes/`；
4. 提交并推送：

```bash
git add notes
git commit -m "Add note: pointer basics"
git push origin main
```

推送后 GitHub Pages 会自动更新，通常一两分钟内生效。

## 一点说明

- 笔记由浏览器在访问时读取并渲染 Markdown，所以不需要本地构建，也不用为每篇笔记手写 HTML；
- 因为内容由 JavaScript 渲染，关闭 JavaScript 时详情页会显示提示而不会显示正文；
- 目前笔记只有中文版，将来需要英文笔记时，可以在 `notes.json` 里增加字段区分语言。
