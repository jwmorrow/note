### Markdown 基本用法
1. 标题
```md
# 一级标题  
## 二级标题  
### 三级标题
...
###### 六级标题  
```

2. 段落和换行
  - 段落：直接编写文字即可，Markdown 会根据空行来判断是否为新的段落。(>=1 个空格)
  * 换行：在行尾插入至少1个空格，然后回车。

3. 列表
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
4. 引用
  - 引用：使用 > 符号作为引用标记。
  ```md
  > 这是一个引用
  >> 这是一个嵌套引用
  ```
  效果：  
  > 这是一个引用

  >> 这是一个嵌套引用
5. 粗体和斜体
  - 粗体：使用两个 * 或 _ 将文字包围起来。
  - 斜体：使用 * 或 _ 将文字包围起来。
  ```md
  **粗体**  
  *斜体*
  **_粗体且斜体_**  
  ```
  效果： **粗体**  *斜体*  **_粗体且斜体_**

6. 链接
  
  ```md
  用法：[链接文本](链接地址)  如:[百度](https://www.baidu.com)
  ```
  效果：[百度](https://www.baidu.com)

7. 图片
  ```md
  用法：![图片描述](图片链接) 图片不存在就会显示图片描述的对应文字  如:![vrepress](https://vitepress.dev/vitepress-logo-mini.svg)
  ```
  效果如下：  ![vrepress](https://vitepress.dev/vitepress-logo-mini.svg)

  8. 代码块
      - 单行代码：使用反引号 ` 包围代码。
      
      ```md
        `这是一个代码片段`
      ```
      - 多行代码（代码块）：使用三个反引号 ``` 包围代码，并指定语言（可选）

      ```js
        const a = 1;
      ```
9. 列表

    ```md
    | 表头1 | 表头2 | 表头3 |  
    | ---- | ----  | ----  |  
    | 内容1 | 内容2 | 内容3 |  
    | 内容4 | 内容5 | 内容6 |

    ```
    效果如下:

    | 表头1 | 表头2 | 表头3 |  
    | ----  | ----  | ---- |  
    | 内容1 | 内容2 | 内容3 |  
    | 内容4 | 内容5 | 内容6 |
    
10. 分隔线
  
    使用三个或以上的 -、* 或 _ 来创建分隔线。

    ```md
    ----
    **** 
    ```

    效果如下:
    ***
11. 自定义容器(info、tip、warning、danger、details)


     ::: brand
      This is an brand box.
     :::

    ```md
      ::: info
      This is an info box.
      :::
    ```
      ::: info
      This is an info box.
      :::

    ```md
      ::: tip
      This is a tip.
      :::
    ```
    ::: tip
    This is a tip.
    :::

    ```md
      ::: warning
      This is a warning.
      :::
    ```
      ::: warning
      This is a warning.
      :::
    
    ```md
      ::: danger
      This is a dangerous warning.
      :::
    ```
      ::: danger
      This is a dangerous warning.
      :::


    ```md
      ::: details
      This is a details block.
      :::
    ```
      ::: details
      This is a details block.
      :::



        



      
