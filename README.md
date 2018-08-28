# React 上传组件

这个组件没有做任何事情，只是自带简单的样式，样式还是抄的 Ant Design 的 Upload 组件样式，因此使用起来也简单，没有 Ant Design 那么复杂。纯受控组件，适用于不想关心样式的中后台开发人群，比方说我。上传细节和业务处理逻辑全靠自己写。

## 安装

```sh
npm i @aximario/react-upload -S
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accept | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | string | 无 |
| type | 上传按钮的样式 - 'default', 'primary' | string | 'default' |
| text | 按钮文字 | string | '点击上传' |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| ghost | 是否是用 ghost 按钮样式 | boolean | false |
| style | 覆盖行内样式 | React.CSSProperties | 无 |
| onChange | 当选择上传文件时的回调 | Function(FileList) | {} |

### onChange

选择文件，**取消选择**都会触发这个回调

```js
// files 是原生的 FileList 对象
onChange(files) {
  if (files.length) {
    // 说明选择了文件
  } else {
    // 说明取消了选择
  }
}
```

> [FileList 对象](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
