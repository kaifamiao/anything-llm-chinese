import React, { useEffect } from 'react';

export default function Kfm() {
  useEffect(() => {

    const removeElementByClass = (className) => {
      const classNames = className.split(' ');
      const allElements = document.getElementsByTagName('*');

      for (let i = allElements.length - 1; i >= 0; i--) {
        const element = allElements[i];
        if (classNames.every(cls => element.classList.contains(cls))) {
          element.parentNode.removeChild(element);
        }
      }
    };
    // removeElementByClass('flex shrink-0 max-w-[55%] items-center justify-start mx-[38px] my-[18px]');
    const replaceElementContent = (className, newContent) => {
      const classNames = className.split(' ');
      const allElements = document.getElementsByTagName('*');

      for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        if (classNames.every(cls => element.classList.contains(cls))) {
          element.innerHTML = newContent;
        }
      }
    };
    // replaceElementContenttContent("flex shrink-0 max-w-[55%] items-center justify-start mx-[38px] my-[18px]", 'Hello');

    // 调用函数替换指定 class 的元素内容
    replaceElementContent('flex shrink-0 max-w-[55%] items-center justify-start mx-[38px] my-[18px]', 'Hello');
  }, []); // 空数组作为依赖，确保只在组件挂载时执行一次

  return (
    <div>
      <title>Anything LLM 中文版 </title>

      <h1>Anything LLM 中文版 功能模块</h1>
    </div>
  );
}
