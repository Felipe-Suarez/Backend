export const asPojo = (obj) => JSON.parse(JSON.stringify(obj));

export const renameField = (obj, oldName, newName) => {
    obj[newName] = obj[oldName];
    delete obj[oldName];
    return obj;
}

export const removeField = (record, fields) => {
    const value = record[fields]
    delete record[fields]
    return value
}