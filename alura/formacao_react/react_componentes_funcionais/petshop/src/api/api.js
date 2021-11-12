import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const busca = async(url, setDado) => {
    console.log(url)
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const salvar = async(url, dados) => {
    const resposta = await api.post(url, dados)
}

