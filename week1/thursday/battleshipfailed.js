// Your code here
var condition = {
    'Aircraft carrier': false,
    'Battleship': false ,
    'Cruiser': false,
    'Destroyer': false
}

function direction() {
    let dir = Math.round(Math.random())
    return dir
}
function dataFleet() {
    var fleet = [
        {
            type: "Aircraft carrier",
            total: 5,
            sim: 'A',
            locI: Math.floor(Math.random()*10), // 4
            locJ: Math.floor(Math.random()*10), // 5
            direc: direction()
        },
        {
            type: 'Battleship',
            total: 4,
            sim: 'B',
            locI: Math.floor(Math.random()*10), // 4
            locJ: Math.floor(Math.random()*10), // 5
            direc: direction()
        },
        {
            type: 'Cruiser',
            total: 3,
            sim: 'C',
            locI: Math.floor(Math.random()*10),
            locJ: Math.floor(Math.random()*10),
            direc: direction()
        },
        {
            type: 'Destroyer',
            total: 2,
            sim: 'D',
            locI: Math.floor(Math.random()*10),
            locJ: Math.floor(Math.random()*10),
            direc: direction()
        }
    ]

    return fleet
}

function checkCoordinate(coordinate) {
    
}

// console.log(fleet)

function generateShip(coordinates) {
    console.log(coordinates)
}

function ship(board) {
    let temp = board
    let data = dataFleet()

    for(let i = 0; i < temp.length; i++) {
        for(let j = 0; j < temp[i].length; j++) {

            for(let k = 0; k < data.length; k++) {

                if(i === data[k].locI && j === data[k].locJ && condition[data[k].type] === false) {

                    if(data[k].direc === 0) {
                        if(temp[i+data[k].total] === undefined || temp[i+data[k].total][j] === undefined || temp[i][j+data[k].total] !== '-') {

                                ship(temp)

                        } else {
                            let counter = 0
                            while(counter !== data[k].total) {
                                
                                temp[i+counter][j] = data[k].sim
                                counter += 1
                            }
                            condition[data[k].type] = true
                        }
                    } else {
                        if(temp[j+data[k].total] === undefined || temp[i][j+data[k].total] === undefined || temp[i][j+data[k].total] !== '-') {
                            ship(temp)
                        } else {
                            let counter = 0
                            while(counter !== data[k].total) {

                                temp[i][j+counter] = data[k].sim
                                counter += 1
                                
                            }
                            condition[data[k].type] = true
                        }
                    } 
                }
            }
        }
    }

    return temp
}

function board() {

    var result = []
    
    for(let i = 1; i <= 10; i++) {
        let temp = [] 
        for(let j = 1; j <= 10; j++) {
            temp.push('-')
        }
        result.push(temp)
    }

    console.log(ship(result))
}

board()