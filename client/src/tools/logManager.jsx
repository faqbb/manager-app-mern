const createLog = async (name) => {
    try {
        const response = await fetch('/logs/createLog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                date: Date.now()
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data)
        } else {
            console.log('Error :(')
        }
    } catch (error) {
        console.log(error)
    }
}


export {
    createLog
}