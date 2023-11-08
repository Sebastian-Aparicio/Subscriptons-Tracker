export const moneyFormat = amount => {
    return amount.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    })
}