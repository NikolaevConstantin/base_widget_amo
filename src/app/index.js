import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import AppAdvancedSettings from '@Components/advancedSettings/AppAdvancedSettings'

console.log('!!!!! START App React Widget !!!!!')
console.log(window.location)

window.appWidget = {
    render(self) {
        console.log('app render')
        return true
    },
    init(self) {
        console.log('app init')
        return true
    },
    bind_actions(self) {
        console.log('app bind_actions')
        return true
    },
    settings(self) {
        console.log('app settings')
        return true
    },
    dpSettings(self) {
        console.log('app settings')
        return true
    },
    advancedSettings(self) {
        ReactDOM.render(
            <AppAdvancedSettings />,
            document.getElementById('work_area')
        )
        console.log('app advanced settings')
        console.log(self)
        return true
    },
    onSave() {},
    destroy() {},
}
