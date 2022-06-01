const posts = [

  {
    title: 'Post #1',
    date: 'apr 26, 2022',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'apr 26, 2022',
    author: 'Mohamed',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'apr 26, 2022',
    author: 'Mahmoud',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

var c =document.getElementById('t-1');
c.innerText = posts[0].title; 

 var d= document.createElement("u")
 d.innerText = posts[0].date; 
 c.append(d); 
  
 var A = document.createElement("a")
 A.innerText = posts[0].author;
 d.append(A);

var B = document.getElementById('y');
B.innerText = posts [0].contents;

 var n = document.getElementById("n");
 n.innerText = posts[1].title; 

 var t = document.createElement("t"); 
 t.innerText = posts[1].date; 
 n.append(t); 

 var g = document.createElement("g"); 
 g.innerText = posts[1].author; 
 t.append(g); 

var a = document.getElementById("a"); 
a.innerText = posts [1].contents; 

var i = document.getElementById("i");
 i.innerText = posts[2].title; 

 var j = document.createElement("t"); 
 j.innerText = posts[2].date; 
 i.append(j); 

 var y = document.createElement("g"); 
 y.innerText = posts[2].author; 
j.append(y); 

var m = document.getElementById("m"); 
m.innerText = posts [2].contents;








 



 


