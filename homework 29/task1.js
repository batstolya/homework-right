
var playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];
    
// let li = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');

// // ul.innerHTML;
// li.append(playList[0].author);
// li.append(" : ");
// li.append(playList[0].song);
// document.body.append(li);

// li2.append(playList[1].author);
// li2.append(" : ");
// li2.append(playList[1].song);

// document.body.append(li2);

// li3.append(playList[2].author);
// li3.append(" : ");
// li3.append(playList[2].song);



let ul = document.createElement('ul');

for (let i in playList) {

    let li = document.createElement('li');
    
    li.append(playList[i].author);
    li.append(" : ");
    li.append(playList[i].song);

    ul.append(li);
    document.body.append(ul);
}

