import React from "react"
import { render } from 'react-dom'


export class Header extends React.Component {
    render() {
        return (
            // <!-- As a heading -->
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Scratch Tutorial</span>
            </nav>
        )
    }
}
