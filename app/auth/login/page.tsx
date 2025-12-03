export default function Login() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-background font-sans">
      <h1 className="text-title">Seja bem vindo de volta!</h1>

      <form className="flex flex-col gap-4 mt-8 w-1/3 h-[350px] bg-white p-6 rounded-md shadow-md justify-between items-center">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="emailInput" className="text-xl">
            E-mail
          </label>
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            className="input"
            placeholder="user@example.com"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="passwordInput" className="text-xl">
            Senha
          </label>
          <input
            type="password"
            name="passwordInput"
            id="passwordInput"
            className="input"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-4 rounded w-full font-semibold text-lg cursor-pointer hover:bg-blue-600 active:bg-bg-blue-700 active:shadow-lg transition-all 100ms ease-in"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
