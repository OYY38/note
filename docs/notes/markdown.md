# markdown

## 1. 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 2. 段落格式

### 2.1 段落

段落的换行是使用两个以上空格加上回车

```markdown
第一行  
第二行
```

第一行  
第二行

### 2.2 字体

```markdown
*斜体文本*  
_斜体文本_  
**粗体文本**  
__粗体文本__  
***粗斜体文本***  
___粗斜体文本___
```

*斜体文本*  
_斜体文本_  
**粗体文本**  
__粗体文本__  
***粗斜体文本***  
___粗斜体文本___

### 2.3 分隔线

```markdown
***
---
```

***
---

### 2.4 删除线

```markdown
GOOGLE.COM  
~~BAIDU.COM~~
```

GOOGLE.COM  
~~BAIDU.COM~~

### 2.5 下划线

```markdown
<u>带下划线文本</u>
```

<u>带下划线文本</u>

## 3. 列表

### 3.1 无序列表


```markdown
- 第一项
- 第二项
- 第三项
```

- 第一项
- 第二项
- 第三项

### 3.2 有序列表

```markdown
1. 第一项
2. 第二项
3. 第三项
4. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
5. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```

1. 第一项
2. 第二项
3. 第三项

1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素

## 4. 区块

```markdown
> 区块引用  
> 百度  
> 百度一下，你就知道  
```

> 区块引用  
> 百度  
> 百度一下，你就知道

### 4.1 区块嵌套

```markdown
> 最外层  
>> 第一层嵌套  
>>> 第二层嵌套
```

> 最外层
>> 第一层嵌套
>>> 第二层嵌套

### 4.2 区块中使用列表

```markdown
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> - 第一项
> - 第二项
> - 第三项
```

> 区块中使用列表
> 1. 第一项
> 2. 第二项
> - 第一项
> - 第二项
> - 第三项

### 4.3 列表中使用区块

```markdown
* 第一项
  > 百度  
  > 百度一下，你就知道
* 第二项
```

* 第一项
  > 百度  
  > 百度一下，你就知道
* 第二项

## 5. 链接

```markdown
这是一个链接 [百度](https://www.baidu.com)

这个链接用 百度 作为网址变量 [百度][baidu]
然后在文档的结尾为变量赋值(网址)

[baidu]: http://www.baidu.com/
```

这是一个链接 [百度](https://www.baidu.com)

这个链接用 百度 作为网址变量 [百度][baidu]
然后在文档的结尾为变量赋值(网址)

[baidu]: http://www.baidu.com/

## 6. 图片

```markdown
![百度 图标](https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)
```

![百度 图标](https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)

## 7. 表格

制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行

```markdown
|  表头   | 表头  |
|  ----  | ---- |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :---| ---: | :---: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

|  表头   | 表头  |
|  ----  | ---- |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :---| ---: | :---: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |