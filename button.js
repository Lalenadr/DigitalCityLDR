function button(){              
    alert("I am an alert")
}

const user = document.getElementById('user');
const pass = document.getElementById('pass')

let i = 0
function login() {
    i=i+1
    let userx = {
        id:i,
        user: user.value,
        pass: pass.value
    }

    console.log(userx)
}