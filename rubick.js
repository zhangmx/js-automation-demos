const { newRubickBase } = require('rubickbase')

// init rubickbase
const rubickBase = newRubickBase()

setInterval(async () => {
	// start rubickbase and get APIs
	const api = await rubickBase.getAPI()
	// print Cursor Position
	// console.log(api.getCursorPosition())
    api.sendEvent({
        device: 'KeyBoard',
        action: 'Press',
        info: 'KeyA'
    })
    api.sendEvent({
        device: 'KeyBoard',
        action: 'Release',
        info: 'KeyA'
    })

    api.sendEvent({
        device: 'KeyBoard',
        action: 'Press',
        info: 'KeyB'
    })
    api.sendEvent({
        device: 'KeyBoard',
        action: 'Release',
        info: 'KeyB'
    })

    api.sendEvent({
        device: 'KeyBoard',
        action: 'Press',
        info: 'KeyC'
    })
    api.sendEvent({
        device: 'KeyBoard',
        action: 'Release',
        info: 'KeyC'
    })

    api.sendEvent({
        device: 'KeyBoard',
        action: 'Press',
        info: 'KeyD'
    })
    api.sendEvent({
        device: 'KeyBoard',
        action: 'Release',
        info: 'KeyD'
    })

    api.sendEvent({
        device: 'KeyBoard',
        action: 'Press',
        info: 'KeyE'
    })
    api.sendEvent({
        device: 'KeyBoard',
        action: 'Release',
        info: 'KeyE'
    })
}, 1000)