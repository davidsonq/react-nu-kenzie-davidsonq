import "./style.css";
export const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="aside__total">
      <div>
        <h3>Valor total:</h3>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(
            listTransactions.reduce((a, { value, type }) => {
              return (
                a +
                (type === "saída"
                  ? -Number(value.replace(",", "."))
                  : Number(value.replace(",", ".")))
              );
            }, 0)
          )}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
