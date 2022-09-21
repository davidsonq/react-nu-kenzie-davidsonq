export const TotalMoney = ({ listTransactions }) => {
  return (
    <div>
      <div>
        <h3>Valor total:</h3>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(
            listTransactions.reduce((a, { value }) => a + value, 0) > 0
              ? listTransactions.reduce((a, { value }) => a + value, 0)
              : 0
          )}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
