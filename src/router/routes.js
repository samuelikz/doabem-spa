const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'casos', component: () => import('pages/Casos.vue') },
      { path: 'sobre', component: () => import('pages/Sobre.vue') },
      { path: 'cadpessoa', component: () => import('pages/CadPessoa.vue') },
      { path: 'cadpessoajuridica', component: () => import('pages/CadPesJur.vue') },
      { path: 'cadbeneficiario', component: () => import('pages/CadBeneficiario') },
      { path: 'mapa', component: () => import('pages/Mapa.vue') ,
      { path: 'Politica-de-Privacidade', component: () => import('pages/Politica-Privacidade.vue') },
      { path: 'duvidas', component: () => import('pages/Duvidas.vue') }
  },
  {
    path: '/controle',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'selecao', component: () => import('pages/Selecao.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
