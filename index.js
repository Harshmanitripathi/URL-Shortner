const form = document.querySelector("#searchForm");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const link = form.elements.query.value;   
    const word = "Shortened URL: " ;
    document.body.append(word);
    const link_to_website = link;let c=0,l=0;
for(let i=0;i<link_to_website.length;i++){
    if(link_to_website[i] == '/'){
    c++;l=i}
    if(c==2)
    break;
}
console.log(c+" ");let Code="";
if(c>=2){
let cut_part_of_link = link_to_website.substr(l);
let length_of_cut_part_of_link = cut_part_of_link.length/4;
let string_part_1 = cut_part_of_link.substr(0,length_of_cut_part_of_link);
let string_part_2 = cut_part_of_link.substr(length_of_cut_part_of_link,length_of_cut_part_of_link);
let string_part_3 = cut_part_of_link.substr(2*length_of_cut_part_of_link+1,length_of_cut_part_of_link);
let string_part_4 = cut_part_of_link.substr(3*length_of_cut_part_of_link+1);
let char_1=0,char_2=0,char_3=0,char_4=0;
for(let i=0;i<length_of_cut_part_of_link;i++){
     char_1 = char_1 + string_part_1.codePointAt(i);
     char_2 = char_2 + string_part_2.codePointAt(i);
     char_3 = char_3 + string_part_3.codePointAt(i);
}
for(let i=0;i<string_part_4.length;i++){
     char_4 = char_4 + string_part_4.codePointAt(i);
}

while(char_1 >= 122)
{char_1=char_1/4;}
while(char_2 >= 122)
{char_2=char_2/4;}
while(char_3 >= 122)
{char_3=char_3/4;}
while(char_4 >= 122)
{char_4 = char_4/4;}
 Code = String.fromCharCode(Math.floor(char_1),Math.floor(char_2),Math.floor(char_3),Math.floor(char_4));
console.log(Math.floor(char_1)+" "+Math.floor(char_2)+" "+Math.floor(char_3)+" "+Math.floor(char_4))
}

if(Code.length>0){
            let a = document.createElement('a');
a.setAttribute('href',link);
a.innerHTML = "https://"+Code;
// apend the anchor to the body
// of course you can append it almost to any other dom element
document.getElementsByTagName('body')[0].appendChild(a);
}
else{
    document.body.append("Wrong url")
}
})