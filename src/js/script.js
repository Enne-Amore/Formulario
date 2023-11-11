// Chamada de todos os inputs e divs de aviso que serão usados
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

// Funcionalidade de limpar todo o formulário
const limpar = document.getElementById('limpar')
limpar.addEventListener('click', () => {
    const ok = confirm("Tem certeza que deseja apagar todos os dados já informados?")
    if (ok) {
        nome.value = ''
        nome.textContent = ''
        email.value = ''
        email.textContent = ''
        conemail.value = ''
        conemail.textContent = ''
        senha.value = ''
        senha.textContent = ''
        consenha.value = ''
        consenha.textContent = ''
        aviso_nome.textContent = ''
        aviso_email.textContent = ''
        aviso_conemail.textContent = ''
        aviso_senha.textContent = ''
        aviso_consenha.textContent = ''
        alert('Tudo limpo com sucesso!')
    }
})

// Funcionalidadde de enviar todos os dados do formulário
const enviar = document.getElementById('enviar')
enviar.addEventListener('click', (e) => {
    const ok = confirm("Tem certeza que deseja enviar todos os dados já informados?")
    if (ok) {
        if (consenha.value == '') {
            e.preventDefault()
            aviso_consenha.textContent = 'Preencha a confirmação de senha*'
            consenha.focus()
        } else {
            aviso_consenha.textContent = ''
        }

        if (senha.value == '') {
            e.preventDefault()
            aviso_senha.textContent = 'Preencha a senha*'
            senha.focus()
        } else {
            aviso_senha.textContent = ''
        }

        if (conemail.value == '') {
            e.preventDefault()
            aviso_conemail.textContent = 'Preencha a confirmação de email*'
            conemail.focus()
        } else {
            aviso_conemail.textContent = ''
        }

        if (email.value == '') {
            e.preventDefault()
            aviso_email.textContent = 'Preencha o email*'
            email.focus()
        } else {
            aviso_email.textContent = ''
        }

        if (nome.value == '') {
            e.preventDefault()
            aviso_nome.textContent = 'Preencha o nome*'
            nome.focus()
        } else {
            aviso_nome.textContent = ''
        }

        if (nome.value == '' || email.value == '' || conemail.value == '' || senha.value == '' || consenha.value == '') {
            e.preventDefault()
            window.alert('Faltam dados! Preencha o que estiver faltando.')
        } else {
            if (email.value != conemail.value) {
                e.preventDefault()
                alert('A confirmação de EMAIL precisa ser IGUAL!')

            } else if (senha.value != consenha.value) {
                e.preventDefault()
                alert('A confirmação de SENHA precisa ser IGUAL!')
                
            } else {
                alert('Formulário preenchido com suceso!')
                nome.value = ''
                nome.textContent = ''
                email.value = ''
                email.textContent = ''
                conemail.value = ''
                conemail.textContent = ''
                senha.value = ''
                senha.textContent = ''
                consenha.value = ''
                consenha.textContent = ''
            }
        }
    }
})