import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home/Home.vue'
import CadastroPaciente from './components/CadastroPaciente/Cadastro.vue'
import Consulta from './components/Consulta/Consulta.vue'
import Agenda from './components/Agenda/Agenda.vue'
import Relatorio from './components/Relatorios/Relatorio.vue'
import ConfigGeral from './components/Configuracoes/ConfiguracoesGeral.vue'
import Financeiro from './components/Financeiro/Financeiro.vue'
import Impressao from './components/Impressao/ImpressaoFicha.vue'
import Login from './components/Login/Login.vue'
import ImpressaoAtestado from './components/Consulta/Atestado.vue'
import ImpressaoLaudo from './components/Consulta/Laudo.vue'
import CadastroClinica from './components/CadastroClinica/CadastroClinica.vue'


import LoginService from "./services/login";


Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/CadastroPaciente',
        component: CadastroPaciente,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Consulta',
        component: Consulta,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Agenda',
        component: Agenda,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Relatorio',
        component: Relatorio,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ConfiguracaoGeral',
        component: ConfigGeral,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Financeiro',
        component: Financeiro,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Impressao/:uuid',
        component: Impressao,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/CadastroClinica',
        component: CadastroClinica,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/Impressao/atestado/:uuid',
        component: ImpressaoAtestado,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/Impressao/laudo/:uuid',
        component: ImpressaoLaudo,
        meta: {
            requiresAuth: true
        }
    }

]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach(async (to, from, next) => {

    if (to.path == '/') {
        return next()
    }



    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!sessionStorage.getItem('token')) {
            return next({
                path: '/',
            })
        }
        try {
            const result = LoginService.logar(this.login.cpfcnpj, this.login.senha)
            sessionStorage.setItem("token", result.data.token);
            return next()
        } catch (error) {
            return next()
        }
    }

    next()
})

export default router;