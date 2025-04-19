// import { log } from "console";

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: keyof T): GroupsMap<T> {
  const keys: string[] = [];
  const result: { [key: string]: any } = {};

  for (let i = 0; i < items.length; i++) {
    if (key in items[i]) {
      if (keys.includes(items[i][key])) {
        continue;
      }

      keys.push(items[i][key]);
    }
  }

  for (let i = 0; i < keys.length; i++) {
    for (let y = 0; y < items.length; y++) {
      if (Object.values(items[y]).includes(keys[i])) {
        if (keys[i] in result) {
          result[keys[i]].push(items[y]);
          continue;
        }

        result[keys[i]] = [items[y]];
      }
    }
  }

  return result;
}
