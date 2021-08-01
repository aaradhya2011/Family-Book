var images =
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iPBA2ObOPmV08PSQWXU-UfJ8jqNww-AxjGX3sKX_G_QyxlybHo0ydE6mdbp7n4LVpJk&usqp=CAU", 
"https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg", 
"https://i.postimg.cc/5ymDKL83/bro.jpg",
"https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names = ["Family Book","Lakshminarayan Gupta", "Akhilesh Gupta", "Arjun Gupta", "Richa Gupta" ]


var i = 0;
function update()
{
    i++
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  =names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}