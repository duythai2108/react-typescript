function getDevicesKeys<DataKey, B extends keyof DataKey>(
  items: DataKey[],
  key: B
): DataKey[B][] {
  return items.map((item) => item[key]);
}
const devices = [
  {
    name: "iphone",
    price: 1000,
  },
  {
    name: "iPad",
    price: 2000,
  },
  {
    name: "MacBook",
    price: 3000,
  },
];
console.log(getDevicesKeys(devices, "name"));

// ['Iphone','iPad','MacBook']
