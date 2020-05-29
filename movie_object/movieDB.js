var movies = [
    {
    title: "You Got Mail",
    hasWatched: true,
    rating: 5
    },
    {
    title: "When Harry Met Sally",
    hasWatched: true,
    rating: 4.6
    },
    {
    title: "Sleepless in Seattle",
    hasWatched: true,
    rating: 4.6
    }
]

console.log(movies)

movies.forEach(function(movies){
    console.log(buildString(movies))
})

function buildString(movies){
    var result = "You have ";
    if(movies.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result +='\"'+ movies.title + '\"' + " - ";
    result += movies.rating + " stars";
    return result;
}

