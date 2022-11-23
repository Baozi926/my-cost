import localforage from "localforage";

var localStore = localforage.createInstance({
  name: "myCost",
});

export function getTable(table, { idField }) {
  let data = [];

  localStore.getItem(table, (err, val) => {
    if (err) {
      throw new Error("init db error: " + table);
    }

    data = val;
  });

  return {
    add(item) {
      return this.addBefore(item);
    },

    addBefore(item) {
      if (!item) {
        throw new Error("item can not be null");
      }

      return localStore.getItem(table).then((data) => {
        data = data || [];

        return localStore.setItem(table, [item, ...data]);
      });
    },

    removeById(id) {
      return localStore.getItem(table).then((data) => {
        return localStore.setItem(
          table,
          data.filter((v) => {
            return v && v[idField] !== id;
          })
        );
      });
    },

    update(id, item) {
      return localStore.getItem(table).then((data) => {
        const find = data.find((v) => {
          return v.id === id;
        });

        if (find) {
          Object.keys(item).forEach((key) => {
            find[key] = item[key];
          });
        }

        return localStore.setItem(table, data);
      });
    },

    getAll() {
      return localStore.getItem(table);
    },
    updateAll(data) {
      return localStore.setItem(data);
    },
  };
}
