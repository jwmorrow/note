### 标题
```md
# 一级标题  
## 二级标题  
### 三级标题
...
###### 六级标题  
```

### 段落和换行
  - 段落：直接编写文字即可，Markdown 会根据空行来判断是否为新的段落。(>=1 个空格)
  * 换行：在行尾插入至少1个空格，然后回车。

### 列表
- 无序列表：使用 -、* 或 + 符号作为列表项标记。效果如下:
  - 列表项 1  
  - 列表项 2  
    - 子列表项 1  
    - 子列表项 2

```md
- 列表项 1  
- 列表项 2
    - 子列表项 1  
    - 子列表项 2  
```

- 有序列表：使用数字加英文 . 作为列表项标记,效果如下：
  1. 列表项 1  
  2. 列表项 2
      1. 子列表项 1  
      2. 子列表项 2

  ```md
  1. 列表项 1  
  2. 列表项 2
      1. 子列表项 1  
      2. 子列表项 2  
  ```
### 引用
  - 引用：使用 > 符号作为引用标记。
  ```md
  > 这是一个引用
  >> 这是一个嵌套引用
  ```
  效果：  
  > 这是一个引用

  >> 这是一个嵌套引用
### 粗体和斜体
  - 粗体：使用两个 * 或 _ 将文字包围起来。
  - 斜体：使用 * 或 _ 将文字包围起来。
  ```md
  **粗体**  
  *斜体*
  **_粗体且斜体_**  
  ```
  效果： **粗体**  *斜体*  **_粗体且斜体_**

### 链接

  ```md
  用法：[链接文本](链接地址)  如:[百度](https://www.baidu.com)
  ```
  效果：[百度](https://www.baidu.com)

### 图片
  ```md
  用法：![图片描述alt属性](图片链接)  如:![vrepress](https://vitepress.dev/vitepress-logo-mini.svg)
  ```
  效果如下：  ![vrepress](https://vitepress.dev/vitepress-logo-mini.svg)

### 代码块
  - 单行代码：使用反引号 ` 包围代码。
  
  ```md
    `这是一个代码片段`
  ```
  - 多行代码（代码块）：使用三个反引号 ```(可选js) 包围代码，并指定语言（可选）

  ```js
    const a = 1;
  ```
### 列表

  ```md
  | 姓名  | 年龄  | 地址 |  
  | ----  | ---- | ---- |  
  | jw    | 18   | 江西 |  
  | moxi  | 28   | 广东 |

  ```
  效果如下:

  | 姓名  | 年龄  | 地址 |  
  | ----  | ---- | ---- |  
  | jw    | 18   | 江西 |  
  | moxi  | 28   | 广东 |
    
### 分隔线
  
  使用三个或以上的 -、* 或 _ 来创建分隔线。

  ```md
  ----
  **** 
  ```

  效果如下:
  ***
### 自定义容器(info、tip、warning、danger、details)

```md
::: info
This is an info box.
:::
```
效果如下：
::: info
This is an info box.
:::

```md
::: tip
This is a tip.
:::
```
效果如下：
::: tip
This is a tip.
:::

```md
::: warning
This is a warning.
:::
```
效果如下：
::: warning
This is a warning.
:::

```md
::: danger
This is a dangerous warning.
:::
```
效果如下：
::: danger
This is a dangerous warning.
:::


```md
::: details
This is a details block.
:::
```
效果如下：
::: details
This is a details block.
:::



        



      
