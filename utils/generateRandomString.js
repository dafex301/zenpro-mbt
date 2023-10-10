import { faker } from "@faker-js/faker";

export const generateRandomString = () => {
  const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generators = [
    () => faker.lorem.words(1),
    () => faker.string.alphanumeric(3),
    () => faker.string.sample(10),
    () => faker.string.symbol(10),
    () => faker.string.uuid(),
  ];

  return Array(5)
    .fill()
    .map(() => randomElement(generators)())
    .join(" ");
};
