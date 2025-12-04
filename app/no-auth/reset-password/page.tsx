export default function ResetPasswordPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-title">Redefinir senha</h1>
      <form className="flex flex-col gap-4 mt-8 w-1/3 bg-white p-6 rounded-md justify-between items-center soft-card">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="codeInput" className="text-xl">
            Código de verificação:
          </label>
          <input
            type="text"
            id="codeInput"
            name="codeInput"
            required
            className="input"
            placeholder="Insira o código recebido"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="newPasswordInput" className="text-xl">
            Nova senha:
          </label>
          <input
            type="password"
            id="newPasswordInput"
            name="newPasswordInput"
            required
            className="input"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label htmlFor="confirmPasswordInput" className="text-xl">
            Confirmar nova senha:
          </label>
          <input
            type="password"
            id="confirmPasswordInput"
            name="confirmPasswordInput"
            required
            className="input"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-4 rounded w-full font-semibold text-lg cursor-pointer hover:bg-blue-600 active:bg-bg-blue-700 active:soft-card transition-all 100ms ease-in"
        >
          Redefinir senha
        </button>
      </form>
    </div>
  );
}
