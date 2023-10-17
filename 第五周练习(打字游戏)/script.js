// 引文内容
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// 储存单词列表及目前要输入的单词索引
let words = [];
let wordIndex = 0;
let startTime = Date.now(); // 开始时间
// 连接网页中的元素
const quoteElement = document.getElementById('quote');
const typedValueElement = document.getElementById('typed-value');
const messageModal = document.getElementById('messageModal'); // 恭喜窗格（模态窗） 
const messageText = document.getElementById('messageText'); // 恭喜文本
const closeButton = document.getElementsByClassName('close')[0]; // 模态窗关闭按钮
/*
var:具有函数作用域或全局作用域 没有块级作用域 可以被重复声明 可以在声明之前使用(变量提升) 不推荐使用
let:具有块级作用域(只在该块内可见) 不能被重复声明 在声明之前使用会引发错误
const:具有块级作用域 声明常量(赋值后不能修改)
*/

// 事件监听器：开始
document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);// quoteIndex作为从quotes中取得数据的索引
    const quote = quotes[quoteIndex]; // 取得一句引文存入quote
    words = quote.split(' '); // 以空格分隔单词存入words 形成矩阵
    wordIndex = 0;
  
    // 使用页面
    const spanWords = words.map(function(word) { return `<span>${word} </span>`}); //把每一个单词包在span中，并map成新数组
    quoteElement.innerHTML = spanWords.join(''); //以innerHTML显示取得的quote `.join`使其变为string
    quoteElement.childNodes[0].className = 'highlight'; // 高亮第一个字
  
    // 设定文本框
    typedValueElement.value = ''; //清除文本框
    typedValueElement.focus();
  
    // 开始计时器
    startTime = new Date().getTime();

    // 启用输入框
    typedValueElement.disabled = false;
    typedValueElement.focus();
});

// 事件监听器：输入
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex]; // 取得目前需要输入的单词
    const typedValue = typedValueElement.value; // 取得目前输入的数值
    
    // 已经输入到最后一个词（成功）
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      const elapsedTime = new Date().getTime() - startTime; // 计算输入时长
      typedValueElement.disabled = true; //关闭输入框 
      // 保存最高分到localStorage
      const highScore = localStorage.getItem('highScore');
      if(!highScore||elapsedTime < highScore){
        localStorage.setItem('highScore', elapsedTime);
      }
      // 显示恭喜消息
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds. The best score is ${highScore / 1000} seconds.`;
      messageText.innerText = message;
      messageModal.style.display = 'block'; // 使用模态窗的block样式
    } 
    
    // 单词输入完成（输入到空格）
    else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      typedValueElement.value = ''; // 清除输入数值（准备输入新单词）
      wordIndex++; //移动到下一个单词
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      } // 重设所有quote子元素的类名 清除highlight样式
      quoteElement.childNodes[wordIndex].className = 'highlight'; // 标记新单词
    } 
    
    // 当前字母输入正确   
    else if (currentWord.startsWith(typedValue)) {
      typedValueElement.className = ''; // 清除输入数值（准备输入下一个字母）
    } 
    
    // 当前字母输入错误
    else {
      typedValueElement.className = 'error'; // style中设置的错误样式
    }
});

// 事件监听器：关闭模态窗
closeButton.addEventListener('click', () => {
    messageModal.style.display = 'none';
});
