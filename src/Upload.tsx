import * as React from 'react'

enum UploadStyleType {
  default = 'default',
  primary = 'primary'
}

interface UploadProps {
  text?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  ghost?: boolean
  type?: UploadStyleType
  style?: React.CSSProperties
  onChange?: (files: FileList) => void
}

const style_upload = {
  outline: 0,
  display: 'inline-block',
  fontWeight: 400,
  cursor: 'pointer',
  border: '1px solid #d9d9d9',
  padding: '6px 15px',
  fontSize: '14px',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  color: 'rgba(0, 0, 0, .65)'
}

const style_upload_disabled = {
  color: 'rgba(0, 0, 0, 0.25)',
  backgroundColor: '#f5f5f5',
  cursor: 'not-allowed'
}

const style_upload_primary = {
  color: '#fff',
  backgroundColor: '#1890ff',
  border: '1px solid #1890ff'
}

const style_upload_ghost = {
  backgroundColor: 'transparent'
}

export default class Upload extends React.PureComponent<UploadProps> {
  private $upload: React.RefObject<HTMLInputElement>

  constructor(props: UploadProps) {
    super(props)
    this.$upload = React.createRef()
  }

  handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    this.props.onChange(this.$upload.current.files)
  }

  render() {
    const { text, accept, multiple, disabled, style, type, ghost } = this.props
    let finalStyle = style_upload
    if (disabled) {
      finalStyle = {
        ...style_upload,
        ...style_upload_disabled
      }
    } else {
      if (type === UploadStyleType.primary) {
        finalStyle = {
          ...style_upload,
          ...style_upload_primary
        }
      }
      if (ghost) {
        finalStyle = {
          ...finalStyle,
          ...style_upload_ghost
        }
        if (type === UploadStyleType.primary) {
          finalStyle = {
            ...finalStyle,
            color: style_upload_primary.backgroundColor
          }
        } else {
          finalStyle = {
            ...finalStyle,
            color: '#d9d9d9',
            border: '1px solid #d9d9d9'
          }
        }
      }
    }
    return (
      <label
        htmlFor="@aximario/upload_input"
        style={{
          ...finalStyle,
          userSelect: 'none',
          ...style
        }}
      >
        <input
          type="file"
          id="@aximario/upload_input"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={this.handleUploadChange}
          ref={this.$upload}
          style={{ display: 'none' }}
        />
        <span>{text || '点击上传'}</span>
      </label>
    )
  }
}