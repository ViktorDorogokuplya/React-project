export const updateObjectInArray = (item, itemId, objId, newObjProps) => {
    return item.map(user => {
        if(user[objId] === itemId){
        return {...user, ...newObjProps};
        }
        return user;
        })
}