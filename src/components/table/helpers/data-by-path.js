export default function DataByPath(path, data) {
    return path.includes('.') ?
        path.split('.').reduce((acc, key) => acc?.[key], data) :
        data?.[path];
}