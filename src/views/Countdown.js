import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
    state = {
        count: 5
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                this.props.onTimesup();
            }
        }
    }

    render() {

        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            props.onTimesup()
            return;
        }
        let timerLoop = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timerLoop)
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export { CountDown, NewCountDown }