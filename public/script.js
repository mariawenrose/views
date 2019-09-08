import request from 'superagent'

document.addEventListener("DOMContentLoaded", launch)

function launch() {
    console.log('yeeet')
    var buttons = Array.from(document.getElementsByClassName('button'))
    console.log(buttons[0].id)
    buttons.map(button => button.addEventListener('click')) 
}

function deleteProject(button) {
    router.delete()
}

