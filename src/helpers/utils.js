// Form Input Format Validation Functions

// This function is used to take only the numbers from user inputs
function checkNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {
    const clearValue = checkNumber(value);
    let nextValue;

    nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
          4,8)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
        
    return nextValue.trim();
}

export function formatCVC(value) {
  const clearValue = checkNumber(value);
  return `${clearValue.slice(0, 3)}`;
}

export function formatExpirationDate(value) {
  const clearValue = checkNumber(value);
  return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;

}
