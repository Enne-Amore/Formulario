const nome = window.document.getElementById('nome')
const email = window.document.getElementById('email')
const conemail = window.document.getElementById('conemail')
const senha = window.document.getElementById('senha')
const consenha = window.document.getElementById('consenha')
const aviso_nome = window.document.getElementsByClassName('aviso')[0]
const aviso_email = window.document.getElementsByClassName('aviso')[1]
const aviso_conemail = window.document.getElementsByClassName('aviso')[2]
const aviso_senha = window.document.getElementsByClassName('aviso')[3]
const aviso_consenha = window.document.getElementsByClassName('aviso')[4]

function limpar() {
    nome.value = ''
    nome.innerHTML = ''
    email.value = ''
    email.innerHTML = ''
    conemail.value = ''
    conemail.innerHTML = ''
    senha.value = ''
    senha.innerHTML = ''
    consenha.value = ''
    consenha.innerHTML = ''
    aviso_nome.innerHTML = ''
    aviso_email.innerHTML = ''
    aviso_conemail.innerHTML = ''
    aviso_senha.innerHTML = ''
    aviso_consenha.innerHTML = ''
    alert('Tudo limpo com sucesso!')
}
function enviar() {
    if (nome.value == '') {
        aviso_nome.innerHTML = 'Preencha o nome*'
        nome.focus()
    } else {
        aviso_nome.innerHTML = ''
    }
    if (email.value == '') {
        aviso_email.innerHTML = 'Preencha o email*'
        email.focus()
    } else {
        aviso_email.innerHTML = ''
    }
    if (conemail.value == '') {
        aviso_conemail.innerHTML = 'Preencha a confirmação de email*'
        conemail.focus()
    } else {
        aviso_conemail.innerHTML = ''
    }
    if (senha.value == '') {
        aviso_senha.innerHTML = 'Preencha a senha*'
        senha.focus()
    } else {
        aviso_senha.innerHTML = ''
    }
    if (consenha.value == '') {
        aviso_consenha.innerHTML = 'Preencha a confirmação de senha*'
        consenha.focus()
    } else {
        aviso_consenha.innerHTML = ''
    }
    if (nome.value == '' || email.value == '' || conemail.value == '' || senha.value == '' || consenha.value == '') {
        window.alert('Faltam dados! Preencha o que estiver faltando.')
    } else {
        if (email.value != conemail.value) {
            alert('A confirmação de EMAIl precisa ser IGUAL!')
        } else if (senha.value != consenha.value) {
            alert('A confirmação de SENHA precisa ser IGUAL!')
        } else {
            alert('Formulário preenchido com suceso!')
            nome.value = ''
            nome.innerHTML = ''
            email.value = ''
            email.innerHTML = ''
            conemail.value = ''
            conemail.innerHTML = ''
            senha.value = ''
            senha.innerHTML = ''
            consenha.value = ''
            consenha.innerHTML = ''
        }
    }
}