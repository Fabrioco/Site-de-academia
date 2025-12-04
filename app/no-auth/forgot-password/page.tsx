export default function ForgotPasswordPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-title">Esqueceu a senha?</h1>
      <form className="flex flex-col gap-4 mt-8 w-1/3 bg-white p-6 rounded-md soft-card justify-between items-center">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="emailInput" className="text-xl">
            Email Address:
          </label>
          <input
            type="email"
            id="emailInput"
            name="emailInput"
            required
            className="input"
            placeholder="user@example.com"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-4 rounded w-full font-semibold text-lg cursor-pointer hover:bg-blue-600 active:bg-bg-blue-700 active:soft-card transition-all 100ms ease-in"
        >
          Enviar código
        </button>
      </form>
    </div>
  );
}
