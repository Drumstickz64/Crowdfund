export function formatPayment(payment) {
  let paymentString = payment.toLocaleString();
  paymentString = "$" + paymentString;

  return paymentString;
}
