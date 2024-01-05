//object of arrays
const myObj = {
    players: ['Thiago Silva', 'Ben Chilwell', 'Reece James', 'Cole Palmer', 'Christopher Nkunku', 'Mykhailo Mudryk', ' Conor Gallagher'],
    goalsThisSeason: [0, 1, 2, 3, 4, 5, 6],
    favoriteOpponent: ['Liverpool', 'Man City', 'Arsenal', 'Tottenham', 'Man Utd', 'Newcastle', 'West Ham']
};

//main funciton 
const randomMsg = () => {
    //generate random number
    const randomNum = num => {
        return Math.floor(Math.random() * num);
    }

    for (let item in myObj) {
        //generate random number with array length as input
        let optionIDx = randomNum(myObj[item].length);

        //generate message using the oject's properties
        switch(item) {
            case 'players':
                console.log(`The Chelsea player ${myObj[item][optionIDx]} `);
                break;
            case 'goalsThisSeason':
                console.log(`scored ${myObj[item][optionIDx]} goals this season `);
                break;
            case 'favoriteOpponent': 
                console.log(`against ${myObj[item][optionIDx]}.`);
                break;
            default:
                console.log(`There is not enough info.`);
        }
    }
}

randomMsg();