import React from "react";

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        // alert(this.textInput.value);
        if (this.textInput.value === '') {
            alert('输入留言后再提交!')
            event.preventDefault();
            this.textInput.value = ''
        }
        else {
            this.props.onAddComment(this.textInput.value)
            event.preventDefault();
            this.textInput.value = ''
        }
    }

    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容..."
                        ref={(textInput) => {this.textInput = textInput}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    留言
                </button>
                <p>
                    已有{this.props.commentsLength}条评论
                </p>
            </form>
        );
    }
}

export default CommentBox;