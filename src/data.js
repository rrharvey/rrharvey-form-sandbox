import faker from "faker";

export function mocks(id) {
  return {
    id,
    people: new Array(range(2, 3)).fill(0).map(person)
  };
}

function person() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    accounts: new Array(range(1, 3)).fill(0).map(account)
  };
}

function account() {
  return {
    amount: faker.finance.amount(),
    accountName: faker.finance.accountName()
  };
}

export function range(min = 1, max = 5) {
  return Math.round(Math.random() * (max - min) + min);
}
