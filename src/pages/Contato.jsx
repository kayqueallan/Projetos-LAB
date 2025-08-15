export default function Contato() {
  return (
    <section>
      <h1>Contato</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Nome
          <input type="text" name="nome" placeholder="Seu nome" required />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="voce@exemplo.com"
            required
          />
        </label>
        <label>
          Mensagem
          <textarea
            name="mensagem"
            rows="4"
            placeholder="Escreva sua mensagem"
          ></textarea>
        </label>
        <button type="submit">Enviar (placeholder)</button>
      </form>
      <p style={{ fontSize: ".9rem", color: "#94a3b8" }}>
        Obs.: O envio real por e-mail será implementado na S02.
      </p>
    </section>
  );
}
