let ch
ch = {
    "U": "勾",
    "U'": "回",
    "U2": "勾勾",
    "U'2": "回回",
    "u": "双勾",
    "u'": "双回",
    "u2": "双勾",
    "u'2": "双回回",
    "F":"顺",
    "F'":"提",
}

function test(obj){
    let id = obj.id
    let name = document.getElementById('name').innerHTML
    let content = document.getElementById('content').innerText
    // alert("/video/" + id + ".gif")
    alert(`${name}\n正向公式：${content}\n逆向公式：`)

    console.log(id, name, content)
}
