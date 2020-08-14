import React from "react";
import ThemeContext from "../theme-context";

const ThemedBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        <div
                            className="alert mt-5"
                            style={{backgroundColor: theme.bgColor, color: theme.color}}
                        >
                            <h1 className="h1">样式区域</h1>
                            <button className={theme.classnames}>
                                样式按钮
                            </button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemedBar;