export default function stringToBoolean(str: string): Boolean | string {
    if (str.toLowerCase() === 'true') {
        return true;
    } else if (str.toLowerCase() === 'false' || '') {
        return false;
    } else {
        throw new Error('Invalid boolean string');
    }
}