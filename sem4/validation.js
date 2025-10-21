const orderCoffe = (type) => {
    const types = {
        SPECIAL: "SPECIAL",
        REGULAR: "REGULAR"
    }
    
    if(Object.values(types).includes(type)) {
        return `You have ordered a ${type} coffee.`;
    } else {
        throw new Error("Invalid coffee type. Please choose SPECIAL or REGULAR.");
    }
}   


try {
    console.log(orderCoffe("SPECIAL"));
    console.log(orderCoffe("REGULAR"));
    console.log(orderCoffe("DELUXE"));
} catch (error) {
    console.error(error.message);
}