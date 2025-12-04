export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <div className="max-w-7xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Painel do Personal</h1>
            <p className="text-sm text-slate-500">
              Visão geral do estúdio — gerencie alunos, treinos e pagamentos
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 cursor-pointer">
              Novo Aluno
            </button>
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
              FP
            </div>
          </div>
        </header>

        <main className="grid grid-cols-12 gap-6">
          <section className="col-span-8 space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
                <div className="text-sm text-slate-500">Alunos ativos</div>
                <div className="text-2xl font-extrabold mt-2">24</div>
                <div className="text-xs text-slate-400 mt-1">+3 este mês</div>
              </div>

              <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
                <div className="text-sm text-slate-500">Receita (mês)</div>
                <div className="text-2xl font-extrabold mt-2">R$ 5.420</div>
                <div className="text-xs text-slate-400 mt-1">
                  R$ 860 esta semana
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
                <div className="text-sm text-slate-500">Atrasos</div>
                <div className="text-2xl font-extrabold mt-2 text-rose-600">
                  3
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Enviar lembrete
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
                <div className="text-sm text-slate-500">Treinos pendentes</div>
                <div className="text-2xl font-extrabold mt-2">5</div>
                <div className="text-xs text-slate-400 mt-1">
                  Atribuir treinos
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 soft-card border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full">
                <input
                  placeholder="Buscar aluno, exercício ou telefone"
                  className="flex-1 p-3 rounded-lg border border-slate-200 focus:outline-none"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">
                  Pesquisar
                </button>
              </div>
              <div className="flex gap-3">
                <button className="px-3 py-2 border rounded-lg cursor-pointer">
                  Exportar CSV
                </button>
                <button className="px-3 py-2 border rounded-lg cursor-pointer">
                  Env. Lembrete
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 soft-card border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Próximas Sessões</h2>
                <a className="text-sm text-indigo-600 hover:underline">
                  Ver agenda completa
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left table-auto">
                  <thead>
                    <tr className="text-xs text-slate-500">
                      <th className="py-2 pr-4">Horário</th>
                      <th className="py-2 pr-4">Aluno</th>
                      <th className="py-2 pr-4">Treino</th>
                      <th className="py-2 pr-4">Status</th>
                      <th className="py-2 pr-4">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 pr-4 text-sm">08:00 • 12/12</td>
                      <td className="py-3 pr-4">Marcos Silva</td>
                      <td className="py-3 pr-4 text-sm text-slate-500">
                        A (Peito/Tríceps)
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                          Confirmado
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded cursor-pointer">
                          Ver
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="py-3 pr-4 text-sm">09:30 • 12/12</td>
                      <td className="py-3 pr-4">Ana Pereira</td>
                      <td className="py-3 pr-4 text-sm text-slate-500">
                        B (Costas/Pernas)
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          Pendente
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <button className="text-sm px-3 py-1 border rounded cursor-pointer">
                          Confirmar
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="py-3 pr-4 text-sm">11:00 • 12/12</td>
                      <td className="py-3 pr-4">João Costa</td>
                      <td className="py-3 pr-4 text-sm text-slate-500">
                        C (Perna/Glúteo)
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                          Atrasado
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <button className="text-sm px-3 py-1 border rounded cursor-pointer">
                          Cobrar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 soft-card border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Alunos</h2>
                <div className="flex items-center gap-2 text-sm">
                  <button className="px-3 py-1 border rounded cursor-pointer">Filtrar</button>
                  <button className="px-3 py-1 border rounded cursor-pointer">Ordenar</button>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-200"></div>
                    <div>
                      <div className="font-semibold">Marcos Silva</div>
                      <div className="text-sm text-slate-500">
                        Plano: Mensal • 3 treinos/sem
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Próx: 12/12</div>
                    <div className="text-xs text-slate-400">Status: Em dia</div>
                  </div>
                </li>

                <li className="flex items-center justify-between p-3 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-200"></div>
                    <div>
                      <div className="font-semibold">Ana Pereira</div>
                      <div className="text-sm text-slate-500">
                        Plano: Mensal • 2 treinos/sem
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Próx: 12/12</div>
                    <div className="text-xs text-slate-400">
                      Status: Pendente
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <aside className="col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700">
                Receita (30 dias)
              </h3>
              <div className="mt-3 w-full h-36 bg-linear-to-b from-indigo-50 to-white rounded-md flex items-center justify-center text-slate-400">
                Gráfico
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
              <div className="flex flex-row items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-700">
                  Pagamentos
                </h3>
                <button className="mt-3 w-fit p-2 cursor-pointer bg-white text-black border border-gray-100 rounded-lg">
                  Ver todos os pagamentos
                </button>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">R$ 5.420</div>
                    <div className="text-xs text-slate-400">
                      Receita este mês
                    </div>
                  </div>
                  <div className="text-sm text-emerald-600 font-semibold">
                    +12%
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-lg bg-slate-100"></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Vencimentos</div>
                    <div className="text-xs text-slate-400">3 atrasados</div>
                  </div>
                  <button className="px-3 py-1 border rounded cursor-pointer">
                    Ver
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 soft-card border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700">
                Criar treino rápido
              </h3>
              <form className="mt-3 space-y-3">
                <input
                  placeholder="Nome do treino (A/B/C)"
                  className="w-full p-2 rounded border"
                />
                <select className="w-full p-2 rounded border">
                  <option>1 treino</option>
                  <option>2 treinos</option>
                  <option>3 treinos</option>
                  <option>4 treinos</option>
                  <option>5 treinos</option>
                </select>
                <button className="w-full py-2 bg-indigo-600 text-white rounded cursor-pointer">
                  Criar
                </button    >
              </form>
            </div>

            <div className="bg-white rounded-xl p-4 soft-card border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700">
                Atividades recentes
              </h3>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>Marcos concluiu treino — 08:45</li>
                <li>Ana pagou plano mensal — 07:12</li>
                <li>João está atrasado — 05:30</li>
              </ul>
            </div>
          </aside>
        </main>

        <footer className="mt-8 text-center text-xs text-slate-400">
          SnapFitness — Admin v1 • Design protótipo
        </footer>
      </div>
    </div>
  );
}
