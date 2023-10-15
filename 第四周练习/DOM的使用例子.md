# DOM的使用例
##### 2021212198  金语晗
---
我找到了https://www.bilibili.com 网页，它使用了`document.createElement()`方法创建了一个`<script>`元素，并使用了`document.head`和`element.appendChild()`方法将该元素添加到文档中。  
### 代码
![bilibili主页源码](https://github.com/bupt-zhangleihan/webappdev-assignment-1-TaijinKyofushou/blob/main/%E7%AC%AC%E5%9B%9B%E5%91%A8%E7%BB%83%E4%B9%A0/bilibiliIndex.png "哔哩哔哩主页")
```javascript
!function() {
  var e = document,
      t = e.createElement("script");
  
  if (!("noModule" in t) && "onbeforeload" in t) {
    var n = !1;
    
    e.addEventListener("beforeload", function(e) {
      if (e.target === t)
        n = !0;
      else if (!e.target.hasAttribute("nomodule") || !n)
        return;
      
      e.preventDefault();
    }, !0);
    
    t.type = "module";
    t.src = ".";
    e.head.appendChild(t);
    t.remove();
  }
}();
```
### 代码中使用的DOM元素和相关方法：
- `document.createElement("script")`：创建一个`<script>`元素。
- `document.head`：表示文档中的`<head>`元素。
- `element.appendChild(t)`：将创建的`<script>`元素`t`添加为`<head>`元素的子元素。
- `t.remove()`：从文档中移除`<script>`元素`t`。

这段代码实现了创建、添加和移除`<script>`元素的操作。

### 代码的流程：
1. 创建一个`<script>`元素，并将其赋值给变量`t`。
2. 检测浏览器是否支持`noModule`属性和`onbeforeload`事件。如果不支持这两个特性，则继续执行后续的操作。
3. 在`beforeload`事件监听器中，判断事件的目标元素是否为之前创建的`<script>`元素`t`。如果是，则将变量`n`设置为`true`。如果不是，并且目标元素没有`nomodule`属性，或者`n`为`false`，则阻止事件的默认行为（即不加载该脚本）。
4. 将`t`的`type`属性设置为`"module"`。
5. 将`t`的`src`属性设置为`"."`，表示脚本的路径为当前路径。
6. 将`t`元素添加到文档的`<head>`元素中。
7. 移除`t`元素。
