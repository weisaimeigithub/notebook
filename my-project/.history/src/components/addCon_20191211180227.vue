<template>
    <div>
        <h2>添加联系人</h2>
        <div  class="form">
            <label  for="name">
                <span>姓名</span>
                <input  type="text"
                         id="name"
                         v-model="name"
                         :class="{'error':nameIn}"
                         placeholder="请输入姓名">
               <em v-show="telIn">*不能为空且全部为数字组成</em>
            </label>
            <label>
                <span>与我联系</span>
                <select  v-model="status">
                    <option selected>朋友</option>
                    <option>亲人</option>
                    <option>同学</option>
                </select>
            </label>
            <label>
                <span></span>
                <button :class="{}">
            </label>
        </div>
    </div>
</template>