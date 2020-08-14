import React from "react";
import CommentList from "./component/commentList";
import CommentBox from "./component/commentBox";
import ThemeContext from "./theme-context";
import ThemedBar from "./component/themedBar";

const themes = {
    light: {
        classnames: 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classnames: 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ['这是我的第一条留言'],
            themeMode: themes.light
        }
        this.addComment = this.addComment.bind(this)
        this.changeLight = this.changeLight.bind(this)
        this.changeDark = this.changeDark.bind(this)
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    changeLight() {
        this.setState({
            themeMode: themes.light
        })
    }

    changeDark() {
        this.setState({
            themeMode: themes.dark
        })
    }

    render() {
        const comments = this.state.comments;
        const themeMode = this.state.themeMode;

        return (
            <ThemeContext.Provider value={themeMode}>
                <div>
                    <a href="#theme-switcher" className="btn btn-light" onClick={this.changeLight}>浅色主题</a>
                    <a href="#theme-switcher" className="btn btn-secondary" onClick={this.changeDark}>深色主题</a>
                    <CommentList comments={comments}/>
                    <CommentBox
                        commentsLength={comments.length}
                        onAddComment={this.addComment}
                    />
                    <ThemedBar />
                </div>
            </ThemeContext.Provider>

        );
    }
}

export default App;