let title = document.querySelector('.title');
let turn ='x';
let squares = [];
function winner()
{
   for(let i = i; i<10;i++)
   {
      squares[i] = document.getElementById('item' + i).innerHTML;
   }
   if(squares[1] == squares[2] && squares[2] == [3] && squares[1] !='')
   {
      title.innerHTML = '${squares[1] wineer';
       document.getElementById('item'+1).style.background = '#000';
       document.getElementById('item'+2).style.background = '#000';
       document.getElementById('item'+3).style.background = '#000';
      
       setInterval(function(){title.innerHTML += '.'},1000);
       setTimeout(function(){location.reload()},4000)
   }
   else  if(squares[1] == squares[2] && squares[2] == [3] && squares[1] !='')
   {
       
   }
   else  if(squares[4] == squares[5] && squares[5] == [3] == squares[6] && squares[1] !='')
   {

   }
   else  if(squares[7] == squares[8] && squares[8] == [9] && squares[5] !='')

{

}

  else  if(squares[1] == squares[4] && squares[4] == [7] && squares[1] !='')
{

}
  else  if(squares[2] == squares[5] && squares[5] == [8] && squares[5] !='')
{

} 
  else  if(squares[3] == squares[3] && squares[3] == [9] && squares[6] !='')
{

}
else  if(squares[1] == squares[5] && squares[5] == [9] && squares[5] !='')
{
    
}
else  if(squares[3] == squares[5] && squares[5] == [7] && squares[5] !='')
{
    
}
else  if(squares[1] == squares[4] && squares[4] == [7] && squares[1] !='')
{

}
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn ==='x' && element.innerHTML == '')
    {
        element.innerHTML ='x';
        turn ='o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML ='O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}